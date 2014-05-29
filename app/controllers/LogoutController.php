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
        $this->response->redirect("/");
        $this->session->destroy();
    }
}
