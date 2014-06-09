<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of LogoutController
 *
 * @author denzyl
 */
class LogoutController extends \Phalcon\Mvc\Controller {
    
    public function indexAction()
    {
        $this->session->destroy("user-id");
        $this->session->destroy("user-type");
        $this->cookies->delete("email");
        $this->cookies->delete("password");
        $this->cookies->delete("remember");
        $this->response->redirect("/");
       
    }
}
