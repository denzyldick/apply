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
            $notifications = Notification::find(array("receiver ={$this->user->getId()}"));
            $nfs = array();
            foreach ($notifications as $notification) {

                array_push($nfs,
                    array(
                        "message_key" => sprintf($this->lang->_(
                            $notification->getMessageKey()), (string)$notification->Matches->Vacancy->getFunction()

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