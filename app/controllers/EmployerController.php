<?php

class EmployerController extends ControllerBase
{
   
    public function indexAction()
    {
     
    }
    
    public function settingsAction()
    {
        $this->response->redirect("/settings");
    }

}

