<?php
/**
 * Created by PhpStorm.
 * User: denzyl
 * Date: 20-11-14
 * Time: 9:36
 */

class NotificationController extends ControllerBase {

    public function indexAction()
    {

        $notifications  = Notification::find(array("receiver ={$this->user->getId()}"));
        echo $notifications;
    }

    public function seenAction()
    {
        $this->view->disable();
        if($this->request->isPost())
        {
            $notification = Notification::find(
                array("receiver={$this->user->getId()} AND id = {$this->request->getPost('notification')}")
            );
            if(count($notification) == 1)
            {
            }

        }
    }

} 