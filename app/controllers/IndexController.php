<?php

class IndexController extends  \Phalcon\Mvc\Controller
{

    public function indexAction()
    {
        if($this->session->has("user-id"))
        {
            $this->response->redirect("".$this->session->get("user-type"));
        }
    }

    public function showAction()
    {
        $this->view->show_settings = false;
    }
}

