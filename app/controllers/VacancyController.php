<?php

class VacancyController extends ControllerBase {

    public function indexAction() {
        $this->view->vacancies =   Vacancy::findByUser_id($this->session->get("user-id"));
        $this->view->tokenKey = $this->security->getTokenKey();
        $this->view->tokenValue = $this->security->getToken();
    }

    public function newAction() {

    }

    public function saveAction() {
        if ($this->request->isPost()) {
            $name = $this->request->getPost("name");
            $vacancy = new Vacancy();
            $vacancy->name = $name;

        }
    }

    public function skillsAction() {

        if ($this->request->isPost()) {
            $name = $this->request->getPost("name");
            $skills = $this->request->getPost("skills");
            $this->view->skills = explode(",", $skills);
        }
    }

    public function finishAction() {
        if($this->request->isPost())
        {
          $vacancy_name  =  $this->request->getPost("name");
          $vacancy_longittude  =  $this->request->getPost("longtitude");
          $vacancy_langittude  =  $this->request->getPost("langitude");
          //$vacancy_skill       =  json_decode($this->request->getPost("skilss"));
          $skil  = $this->session->get("skillsWithWeight");
          foreach($skill as $key => $value)
          {
            $skillObj = new Specification();
            $skillObj->name = $key;
            $skillObj->percent  = ($value /);
          }
        }
    }
    private function calculatePecent($number)
    {
      
      return $percent;
    }

    public function locationAction() {
        if($this->request->isPost())
        {
          $allSkills =json_decode($this->request->getPost("allSkills"));
          $skillsWithWeight = array();
          foreach($allSkills as $value)
          {
            $skillsWithWeight[$value] = $this->request->getPost($value);
          }
          $this->session->set("skills_weight",$skillsWithWeight);
        }
    }

    public function removeAction($id)
    {
      if(isset($id))
      {

      $status = Vacancy::findFirst($id)->delete();
      }
      if($status)
      {
        $this->flash->success("Vacancy has been succesfully deleted.");
      }else
      {
        $this->flash->error("Something went wrong, please try again.");
      }

      $this->dispatcher->forward(array("action"=>"index"));

    }

}
