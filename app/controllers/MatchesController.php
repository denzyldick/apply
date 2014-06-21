<?php

class MatchesController extends ControllerBase
{


    public function indexAction()
    {
      $this->view->disable();

      $vacancies  = Vacancy::find(array("user_id = 1"));
      $arrayMatches = array();
      foreach($vacancies as $value)
      {
        $matches = Matches::findByVacancy_id($value->id);

        foreach($matches as $match)
        {

          array_push($arrayMatches,$match);
        }
      }
      $this->view->matches = $arrayMatches;
      var_dump($arrayMatches);
    }

    public function viewAction($vacancy,$tokenKey,$tokenValue)
    {


        if($this->security->checkToken($tokenKey,$tokenValue) == 1)
        {

        $this->view->matches = Matches::findFirstByVacancy_id($vacancy);



        }
    }
}
