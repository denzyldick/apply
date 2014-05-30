<?php

class SettingsController extends \Phalcon\Mvc\Controller
{

    public function indexAction()
    {
        $user   =   User::findFirstById($this->session->get("user-id"));
        
        $this->view->firstname  =   $user->firstname;
        $this->view->lastname   =   $user->lastname;
        $this->view->email      =   $user->email;
    }

}

