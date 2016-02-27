<?php

/**
 * Notification Controller
 * User: denzyl
 * Date: 20-11-14
 * Time: 9:36
 */
class NotificationController extends ControllerBase
{

    public function indexAction()
    {
        if ($this->request->isAjax()) {
            /**
             * @var Notification $notification
             */
            $notifications = Notification::find(array("receiver ={$this->user->getId()}"));
            $nfs = array();
            foreach ($notifications as $notification) {
                if ($this->user->getUsertype() == 'employer') {
                    $message = (string)$notification->Matches->User->getFirstname();

                } else if ($this->user->getUsertype() == 'employee') {
                    /**
                     * @var Company $company
                     */
                    $company = Company::findFirst(array("user_id= {$notification->getSender()}"));
                    $message = $company->getName();
                }


                array_push($nfs,
                    array(
                        "message_key" => sprintf($this->lang->_(
                            $notification->getMessageKey()), $message
                        // $notification->getMessageKey()), 'test notification'

                        ),
                        'notification_title' => strtoupper($this->lang->_("are_you_interested"))
                    )
                );
            }

            $this->response->setContent(json_encode($nfs));
            $this->response->setStatusCode(200, "found");
            $this->response->setContentType("application/json");
            $this->response->send();

        }

    }

    public function seenAction()
    {
        $this->view->disable();
        if ($this->request->isPost()) {
            $notification = Notification::find(
                array("receiver={$this->user->getId()} AND id = {$this->request->getPost('notification')}")
            );
            if (count($notification) == 1) {
                $notification->setSeen('yes');
            }


        }
    }

} 