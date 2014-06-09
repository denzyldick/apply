<?php

class SettingsController extends ControllerBase{

    public function indexAction()
    {
        $user   =   User::findFirstById($this->session->get("user-id"));
        
        $this->view->firstname  =   ucfirst($user->firstname);
        $this->view->lastname   =   ucfirst($user->lastname);
        $this->view->email      =   $user->email;
        $this->view->type       = ucfirst($user->usertype);
    }

}

