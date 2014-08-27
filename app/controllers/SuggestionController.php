<?php

class SuggestionController extends ControllerBase
{

    public function getEmployeesuggestion()
    {
      return $this->modelsManager->executeQuery("SELECT * FROM Matches WHERE employee_accepted != 'yes'ORDER BY percent DESC");
    }

    public function getEmployersuggestion()
    {

    $phql  = "SELECT  * FROM Matches JOIN Vacancy ON Vacancy.id = Matches.vacancy_id WHERE Vacancy.user_id = :user_id: ";
    $suggestions = $this->modelsManager->executeQuery($phql,array('user_id'=>$this->user->id));

      $this->view->suggestions = $suggestions;
       $this->view->amount_text = (count($suggestions) == 1? " 1 ".$this->lang->_('suggestion') : count($suggestions)." ".$this->lang->_('suggestions'));

    }
    public function vacanciesAction($suggestion)
    {   $this->view->amount  =  count($suggestion)." ".$this->lang->_("job");
        $this->view->suggestions = $suggestion;

    }
    public function indexAction()
    {

      if ($this->user->getType() == "employer") {
        $this->getEmployersuggestion();
        } elseif ($this->user->getType() == "employee") {
        $this->dispatcher->forward(array("controller"=>"suggestion","action"=>"vacancies","params"=>array($this->getEmployeesuggestion())));
      }

    }

    public function viewAction($vacancy,$tokenKey,$tokenValue)
    {

        if ($this->security->checkToken($tokenKey,$tokenValue) == 1) {
          $matches  = Matches::find(array("vacancy_id = ".$vacancy));
        $this->view->matches = $matches;
        $this->view->amount_text = (count($matches) == 1)? "This vacancy has 1 match.":"This vacancy has ".count($matches)." matches.";

        }
    }

    public function removeAction($match)
    {
      $match = Matches::findFirst(
        array("id = {$match} AND user_id = {$this->user->getId()} "));
      if ($match->delete()) {
        $this->flash->success($this->lang->_('suggestion_decline'));

       $this->dispatcher->forward(array('controller'=>'suggestion',"action"=>"index"));
      }
    }
    public function acceptAction($match)
    {

      $match =  Matches::findFirst($match);
      $match->setEmployeeAccepted('yes');
      if ($match->save() ==  true) {
        $this->flash->success($this->lang->_("vacancy_poster_will_be_notified"));
        $this->dispatcher->forward(array("controller"=>"index"));
      }
    }
}
