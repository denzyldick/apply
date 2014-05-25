<?php

class IndexController extends  \Phalcon\Mvc\Controller
{

    public function indexAction()
    {

    }

    public function showAction()
    {
        $this->view->show_settings = false;
    }
}

