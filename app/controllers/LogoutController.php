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
        $this->session->remove("user-id");
        $this->session->remove("user-type");
        $this->cookies->get("email")->delete();
        $this->cookies->get('password')->delete();
        $this->cookies->get('remember')->delete();
        $this->response->redirect("/");

    }
}
