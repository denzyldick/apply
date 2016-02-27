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
        if($this->request->get("vacancy_id","int",null) == null)
        {
            $vacancy = new Vacancy();
        }else{
            $vacancy = Vacancy::findFirst(["id = :vacancy_id: AND user_id = :user_id: ","bind"=>["vacancy_id"=>$this->request->get("vacancy_id","int"),'user_id'=>$this->user->getId()]]);
        }


        if ($this->request->isPost()) {

            $name = $this->request->getPost("name");

            $longitude = $this->request->getPost("longitude");
            $latitude = $this->request->getPost("latitude");
            $zoom = $this->request->getPost("zoom");
            $location_name = $this->request->getPost("location");
            $skills = $this->request->getPost("skills");
            $culture = $this->request->getPOst("culture");
            $fulltime = $this->request->getPost("fulltime", "int", 0);
            $parttime = $this->request->getPost("parttime", "int", 0);
            $freelance = $this->request->getPost("freelance", "int", 0);
            $description = $this->request->getPost("description", "string");
            $job_benefits = $this->request->getPost("job_benefits", "string");


            $location = new Location();
            $location->setLongitude($longitude);
            $location->setLatitude($latitude);
            $location->setZoom($zoom);
            $location->setLocation($location_name);
            $location->save();


            $vacancy->setFunction($name);
            $vacancy->setPostedDate($this->date);
            $vacancy->setUserId($this->session->get("user-id"));
            $vacancy->setLocationId($location->getId());
            $vacancy->setWorkEnviromentType($culture);
            $vacancy->setFreelance($freelance);
            $vacancy->setParttime($parttime);
            $vacancy->setFulltime($fulltime);
            $vacancy->setDescription($description);
            $vacancy->setJobBenefits($job_benefits);


            if ($vacancy->save() && $vacancy->validation() && $location->save()) {

                $skills = explode(",", $this->request->getPost("skills"));

                foreach ($skills as $value) {
                    $specification = new Specification();
                    $specification->setPercent(0);
                    $specification->setVacancyId($vacancy->getId());
                    $skill = new Skills();
                    $skill->setName($value);
                    $skill->save();
                    $specification->setSkillsId($skill->getId());
                    $specification->save();
                }

                $this->flash->success($this->lang->_("vacancy_has_been_successfully_saved"));
                $this->response->redirect("/vacancy");
            } else {

                $errors = $vacancy->getMessages();
                array_merge($errors, $location->getMessages());
                foreach ($errors as $message) {

                    $this->flash->error($this->lang->_($message->getMessage()));
                }
            }
        }
        $this->view->vacancy = $vacancy;

    }



    public function finishAction()
    {
        if ($this->request->isPost() && $this->user->getVacancyCount() > 0) {
            $vacancy = $this->request->getPost("vacancy_id");
            $
            $this->user->setVacancycount($this->user->getVacancyCount() - 1);
            $this->user->save();
            $this->flash->success("Your vacancy has been successfully saved");
            $this->response->redirect("/vacancy");
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
        $this->response->redirect("/vacancy");
    }

}
