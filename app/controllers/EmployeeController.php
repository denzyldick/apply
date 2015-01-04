<?php

class EmployeeController extends ControllerBase
{
    public function initialize()
    {
        parent::initialize();
    }

    public function indexAction()
    {

            $this->view->amount = count($this->getEmployeeMatches());
            $this->view->matches = $this->getEmployeeMatches();

    }

    public function getEmployeeMatches()
    {
        return $this->modelsManager->executeQuery("SELECT * FROM Matches WHERE employee_accepted = 'yes' AND softdeleted = 'no' AND user_id = {$this->user->getId()} ORDER BY percent DESC");
    }

    public function doneAction()
    {
        if ($this->request->isPost()) {

            $skills = $this->request->get();
            unset($skills["_url"]);
            $status = true;

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
                $this->dispatcher->forward(array("controller" => "employee", "action" => "index"));

            }
        }

    }

    private function deleteSpecification()
    {
        $specifications = Specification::find(
            "user_id = {$this->user->getId()}");
        foreach ($specifications as $specification) {
            $specification->delete();
        }

    }

    public function skillsAction($new_skills)
    {
       // $this->view->disable();
        var_dump($new_skills);
        $skills = Array();
        foreach(explode(",",$new_skills) as $new) {

            $skills[$new] =0;
        }
        foreach ($this->user->specification as $specification) {
            unset($skills[$specification->skills->getName()]);
           $skills[$specification->skills->getName()]  = $specification->getPercent();

        }
     //   $this->view->disable();

        var_dump($skills);
        $this->view->skills = $skills;

    }

    public function optionsAction()
    {
        if ($this->request->isPost()) {

            $save_it = true;
            if (!is_numeric($this->user->getLocationId())) {
                $location = new Location();
                $this->user->setLocationId($location->getId());


            } else {
                $location = $this->user->location;

            }

            $skills = $this->request->getPost("skills");
            $character = $this->request->getPost("character");
            $work_environment = $this->request->getPost("work_enviroment");
            $travel_distance = $this->request->getPost("travel_distance");
            $location_name = $this->request->getPost("location");
            $longitude = $this->request->getPost("longitude");
            $latitude = $this->request->getPost("latitude");
            $zoom = $this->request->getPost("zoom");

         //   $this->view->disable();
            var_dump($this->request->getPost());
            if(0 === strlen(trim($skills)))
            {
                $this->flash->error($this->lang->_("please_enter_some_skills"));
                $save_it = false;
            }
            if(0 == strlen(trim($latitude)) || 0 == strlen(trim($longitude)) ||  0 == strlen(trim($location_name)))
            {
                $this->flash->error($this->lang->_(where_do_you_live));
                $save_it = false;
            }
            $location->setZoom($zoom);
            $location->setLocation($location);
            $location->setLongitude($longitude);
            $location->setLatitude($latitude);
            $location->setTravelDistance($travel_distance);
            $location->setLocation($location_name);


            $this->user->setWorkEnviromentType($work_environment);

            if ($this->user->save() && $save_it == true) {
                Matches::find(
                    array("user_id = {$this->user->getId()}")
                )->delete();

                $this->dispatcher->forward(array("controller" => "employee", "action" => "skills", "params" => array($skills)));

            }
        } else {

            $this->fillView();

        }
    }

    private function fillView()
    {
        $skills = '';
        foreach ($this->user->specification as $specification) {

            $skills .= ',' . $specification->skills->getName();
        }
        $this->view->skills = $skills;
        $location = Location::findFirstById($this->user->getLocationId());

        $this->view->longitude = $location->getLongitude();
        $this->view->latitude = $location->getLatitude();
        $this->view->zoom = $location->getZoom();
        $this->view->location = $location->getLocation();
        $this->view->travel_distance = $location->getTravelDistance();


    }

}
