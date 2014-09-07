<?php

class EmployeeController extends ControllerBase
{
    public function initialize()
    {
      parent::initialize();
    }
      public function getEmployeeMatches()
    {
      return $this->modelsManager->executeQuery("SELECT * FROM Matches WHERE employee_accepted = 'yes'ORDER BY percent DESC");
    }
    public function indexAction()
    {
        if ($this->user->getType() == "employee") {

          $this->view->amount  = count($this->getEmployeeMatches());
          $this->view->matches = $this->getEmployeeMatches();
        }
    }

    private function deleteSpecification()
    {
      $specifications  = Specification::find(
        "user_id = {$this->user->getId()}");
      foreach ($specifications as $specification) {
        $specification->delete();
      }

    }
    public function doneAction()
    {
    if ($this->request->isPost()) {

        $skills = $this->request->get();
        unset($skills["_url"]);
        $status = true;
        $this->deleteSpecification();
        foreach ($skills as $key => $value) {
            $skill = new Skills();
            $skill->setName($key);
            $skill->save();

            $specification = new Specification();
            $specification->setUserId($this->user->getId());
            $specification->setSkillsId($skill->getId());
            $specification->setPercent($this->convert->toPercent($value));

        if (!$specification->save()) {
            $status = false;
        }
        }
        if ($status) {
            $this->flash->success($this->lang->_("saved_changes"));
      $this->dispatcher->forward(array("controller"=>"employee","action"=>"index"));

        }
        }

    }
    public function skillsAction($skills)
    {

    $this->view->skills =  explode(",",$skills);

    }
    private function fillView()
    {
        $skills = '';
        foreach ($this->user->specification as $specification) {

          $skills .= ','.$specification->skills->getName();
        }
        $this->view->skills = $skills;
        $location = Location::findFirstById($this->user->getLocationId());

        $this->view->longitude = $location->getLongitude();
        $this->view->latitude  = $location->getLatitude();
        $this->view->zoom    =  $location->getZoom();
        $this->view->location  = $location->getLocation();

    }

    public function optionsAction()
    {

        $this->fillView();

      if ($this->request->isPost()) {

          $skills = $this->request->getPost("skills");
          $character = $this->request->getPost("character");
          $work_enviroment  =  $this->request->getPost("work_enviroment");
          $travel_time = $this->request->getPost("travel_time");
          $location_name  = $this->request->getPost("location");
          $longitude  = $this->request->getPost("longitude");
          $latitude = $this->request->getPost("latitude");
          $zoom  = $this->request->getPost("zoom");

         $user  = $this->user;
      if (!is_numeric($user->getLocationId())) {
          $location = new Location();

    } else {
        $location = Location::findFirstById($user->getLocationId());
         }
      

          $location->setZoom($zoom);
          $location->setLocation($location);
          $location->setLongitude($longitude);
          $location->setLatitude($latitude);
          $location->setTravelDistance($travel_time);
          $location->setLocation($location_name);
          $location->save();

          $user->setWorkEnviromentType($work_enviroment);
          $user->setLocationId($location->getId());
          if ($user->save()) {
        $this->dispatcher->forward(array("controller"=>"employee","action"=>"skills","params"=>array($skills)));

}
      }
    }

}
