<?php

class EmployerController extends \Phalcon\Mvc\Controller
{

    public function indexAction()
    {
     if($this->session->has("user-id"))
     {
        
     }else
     {
      //   $this->response->redirect("/");
     }
    }
    
    public function settingsAction()
    {
        $this->response->redirect("/settings");
    }

}

