<?php
class EmployerController extends ControllerBase
{
    public function indexAction()
    {
      $phql  = "SELECT  Matches.* FROM Matches join Vacancy on Vacancy.id = Matches.vacancy_id WHERE Vacancy.user_id = :user_id: AND Matches.employer_accepted ='yes' ";
      $suggestions = $this->modelsManager->executeQuery($phql,array('user_id'=>$this->user->getId()));

        $this->view->suggestions = $suggestions;
         $this->view->amount_text = (count($suggestions) == 1? " 1 ".$this->lang->_('matches') : count($suggestions)." ".$this->lang->_('matches'));

    }
    public function settingsAction()
    {
        $this->response->redirect("/settings");
    }
    public function skillsAction()
    {
        if ($this->request->isPost()) {
            $skills = $this->request->getPost("skills");
            $work_enviroment = $this->request->getPost("work_enviroment");
            $longtitude = $this->request->getPost("longtitude");
            $latitidue = $this->request->getPost("latitude");
            $character = $this->request->getPost("character");
            $travel_time = $this->request->getPost("travel_time");
        }
    }
}
