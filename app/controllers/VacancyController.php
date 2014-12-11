<?php

class VacancyController extends ControllerBase
{

    public function indexAction()
    {
        $this->view->vacancies = array();
        if (count(Company::findFirstByUser_id($this->user->getId())) == 1) {
            $vacancies = Vacancy::findByUser_id($this->user->getId());
            $this->view->vacancies = $vacancies;
            $this->view->count = count($vacancies);
            $this->view->tokenKey = $this->security->getTokenKey();
            $this->view->tokenValue = $this->security->getToken();
            $this->view->remaining_vacancy = $this->user->getVacancyCount();

        }
    }

    public function newAction()
    {
        if (!$this->companyHasBeenFilled()) {
            $this->dispatcher->forward(array("controller" => "vacancy", "action" => "index"));
        }
    }

    public function saveAction()
    {
        if ($this->request->isPost() && $this->user->getVacancyCount() > 0) {
            $name = $this->request->getPost("name");
            $longitude = $this->request->getPost("longitude");
            $latitude = $this->request->getPost("latitude");
            $zoom = $this->request->getPost("zoom");
            $location_name = $this->request->getPost("location");
            $skills = $this->request->getPost("skills");
            $culture = $this->request->getPOst("culture");

            $location = new Location();
            $location->setLongitude($longitude);
            $location->setLatitude($latitude);
            $location->setZoom($zoom);
            $location->setLocation($location_name);
            $location->save();

            $vacancy = new Vacancy();
            $vacancy->setFunction($name);
            $vacancy->setPostedDate($this->date);
            $vacancy->setUserId($this->session->get("user-id"));
            $vacancy->setLocationId($location->getId());
            $vacancy->setWorkEnviromentType($culture);

            if ($vacancy->save()) {

                $this->dispatcher->forward(array("action" => "skills", "params" => array($skills, $vacancy->getId())));
            }

        }
    }

    public function skillsAction($skills, $vacancy_id)
    {
        $this->view->skills = explode(",", $skills);
        $this->view->vacancy_id = $vacancy_id;
    }

    public function finishAction()
    {
        if ($this->request->isPost() && $this->user->getVacancyCount() > 0) {
            $vacancy = $this->request->getPost("vacancy_id");
            $skills = json_decode($this->request->getPost("skills"));
            foreach ($skills as $key => $value) {
                $specification = new Specification();
                $specification->setPercent($this->convert->toPercent($this->request->getPost($value)));
                $specification->setVacancyId($vacancy);
                $skill = new Skills();
                $skill->setName($value);
                $skill->save();
                $specification->setSkillsId($skill->getId());
                $specification->save();
            }
            $this->user->setVacancycount($this->user->getVacancyCount() - 1);
            $this->user->save();
            $this->flash->success("Your vacancy has been succesfully save");
            $this->dispatcher->forward(array("controller" => "vacancy", "action" => "index"));
        }
    }

    public function locationAction()
    {
        if ($this->request->isPost()) {
            $allSkills = json_decode($this->request->getPost("allSkills"));
            $skillsWithWeight = array();
            foreach ($allSkills as $value) {
                $skillsWithWeight[$value] = $this->request->getPost($value);
            }
            $this->session->set("skills_weight", $skillsWithWeight);
        }
    }

    public function removeAction($id)
    {
        if (isset($id)) {
            $vacancy = Vacancy::findFirst($id);
            if ($vacancy) {
                $status = $vacancy->delete();
            }
        }
        if ($status) {
            $this->flash->success($this->lang->_("Your_vacancy_has_been_successfully_deleted"));
        } else {
            $this->flash->error($this->lang->_("something_went_wrong_try_again"));
        }
        $this->dispatcher->forward(array("action" => "index"));
    }

    private function getRemaingVacancy()
    {
        // $vacancies = Vacancy::findByUser_id($this->user->getId());
        // $premiums  = Premium::findByUser_id($this->user->getId());
        //
        // $amount = 0;
        // foreach($premiums as $premium)
        // {
        //   $bundle = Bundle::findFirst($premium->getBundleIdbundle());
        //   $amount = $amount + $bundle->getAmount();
        // //$bundle->getAmount()."<br/>";
        // }
        // return ($amount - count($vacancies));
    }
}
