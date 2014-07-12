<?php

class VacancyController extends ControllerBase {


    public function indexAction() {
      $this->view->vacancies = array();

  //    if(Company::findFirstByUser_id($this->session->get("user-id")) == 1)
  //    {

        $vacancies  =  Vacancy::findByUser_id($this->session->get("user-id"));
        $this->view->vacancies =   $vacancies;
        $this->view->count     =  count($vacancies);
        $this->view->tokenKey = $this->security->getTokenKey();
        $this->view->tokenValue = $this->security->getToken();
    /*  }else
      {

       $this->flash->warning("You need to enter you company information, before you can add a vacancy");

     }*/
    }

    public function newAction() {

    }

    public function saveAction() {
        if ($this->request->isPost()) {
            $name       = $this->request->getPost("name");
            $longitude  =  $this->request->getPost("longitude");
            $latitude   =  $this->request->getPost("latitude");
            $zoom       =  $this->request->getPost("zoom");
            $location   =  $this->request->getPost("location");
            $skills     =  $this->request->getPost("skills");

            $vacancy = new Vacancy();
            $vacancy->setFunction($name);
            $vacancy->setLongitude($longitude);
            $vacancy->setLatitude($latitude);;
            $vacancy->setZoom($zoom);
            $vacancy->setLocation($location);
            $vacancy->setPostedDate(date(DATE_RFC2822));
            $vacancy->setUserId($this->session->get("user-id"));

            if($vacancy->save())
            {
              $this->flash->success("Vacancy has been saved");
              return $this->dispatcher->forward(array(
                "action"=>"skills",
                "params"=>array($skills,$vacancy->getId())
                ));
            }

        }
    }

    public function skillsAction($skills,$vacancy_id) {

        $this->view->skills = explode(",",$skills);
        $this->view->vacancy_id = $vacancy_id;

    }

    public function finishAction() {
  
        if($this->request->isPost())
        {

          $vacancy = $this->request->getPost("vacancy_id");
          $skills  = json_decode($this->request->getPost("skills"));
           foreach($skills as $key => $value)
          {
            $specification = new Specification();

            $specification->setPercent($this->calculatePecent($this->request->getPost($value)));
            $specification->setVacancyId($vacancy);

            $skill = new Skills();
            $skill->setName($value);
            $skill->save();
            $specification->setSkillsId($skill->getId());

            $specification->save();
          }
          $this->flash->success("Skills has been saved.");
        }

    }
    private function calculatePecent($number)
    {

      return ($number/5)* 100;
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
      $vacancy = Vacancy::findFirst($id);
      if($vacancy)
      {
      $status = $vacancy->delete();
    }}
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
