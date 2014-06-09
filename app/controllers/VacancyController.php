<?php
use Phalcon\Mvc\View;
class VacancyController extends ControllerBase
{
    public function indexAction()
    {

    }
    public function newAction()
    {
           
    }
    
    public function saveAction()
    {
        if($this->request->isPost())
        {
            $name   =   $this->request->getPost("name");
            $vacancy    =    new Vacancy();
            $vacancy->name  =   $name;
           
        }
    }
    public function skillsAction()
    {
   
        if($this->request->isPost())
        {
            $name       =   $this->request->getPost("name");
            $skills     =   $this->request->getPost("skills");
            
             $this->view->skills     =   explode(",",$skills);
                    
        }
       
    }
    public function finishAction()
    {
        
    }
    public function locationAction()
    {
        
    }
}

