<?php

class EmployeeController extends ControllerBase
{
    public function initialize()
    {
        parent::initialize();
    }

    public function indexAction()
    {
        $this->view->vacancies = Vacancy::find();
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

        $skills = Array();
        foreach (explode(",", $new_skills) as $new) {

            $skills[$new] = 0;
        }
        foreach ($this->user->specification as $specification) {
            unset($skills[$specification->skills->getName()]);
            $skills[$specification->skills->getName()] = $specification->getPercent();

        }

        $this->view->skills = $skills;

    }

    public function optionsAction()
    {
        /* For personalities */
        $this->view->personalities = $this->personalities;
        if ($this->request->isPost()) {
            $save_it = true;
            if (!is_numeric($this->user->getLocationId())) {
                $location = new Location();
                $this->user->setLocationId($location->getId());
            } else {
                $location = $this->user->location;
            }
            $personalities = $this->request->getPost("type_personality");
            $skills = explode(",", $this->request->getPost("skills", "string", ""));
            $work_environment = $this->request->getPost("work_enviroment");
            $travel_distance = $this->request->getPost("travel_distance");
            $location_name = $this->request->getPost("location");
            $longitude = $this->request->getPost("longitude");
            $latitude = $this->request->getPost("latitude");
            $photo  =  $this->request->getPost("file_name");
            $zoom = $this->request->getPost("zoom");

            if (0 == strlen(trim($latitude)) || 0 == strlen(trim($longitude)) || 0 == strlen(trim($location_name))) {
                $this->flash->error($this->lang->_(where_do_you_live));
                $save_it = false;
            }
            if (count($personalities) > 5) {
                $this->flash->error($this->lang->_('max_5_personalities'));
                $save_it = false;
            }
            if (count($skills) == 1 && $skills[0] == "") {
                $this->flash->error($this->lang->_("please_enter_some_skills"));
                $save_it = false;
            }

            /**
             * Delete everything
             */
            Specification::find(["user_id = :user_id:", "bind" => ["user_id" => $this->user->getId()]])->filter(function ($s) {
                $s->delete();
            });
            foreach ($skills as $name) {
                $skill = new Skills();
                $skill->setName($name);
                $skill->save();
                $speficiation = new Specification();
                $speficiation->setUserId($this->user->getId());
                $speficiation->setSkillsId($skill->getID());
                $speficiation->save();
            }
            $location->setZoom($zoom);
            $location->setLocation($location);
            $location->setLongitude($longitude);
            $location->setLatitude($latitude);
            $location->setTravelDistance($travel_distance);
            $location->setLocation($location_name);

            $this->user->setSummary($this->request->get("summary", "string"));
            $this->user->setWorkEnviromentType($work_environment);
            $this->user->setPhoto($photo);

            if ($this->user->save() && $save_it) {
                Matches::find(
                    array("user_id = {$this->user->getId()}")
                )->delete();
                $this->flashSession->success($this->lang->_("saved_successfully"));
            }

            $this->response->redirect("/employee/options");
        } else {
            $this->fillView();
        }
    }

    public function careerAction()
    {
        $work = WorkExperience::findByUserId($this->user->getId());
        $this->view->work_experience = $work;
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

    public function educationAction()
    {
    }
    public function workAction()
    {

    }
}
