<?php
use Phalcon\Events\Events,
    Phalcon\Mvc\User\Plugin,
    Phalcon\Mvs\Dispatcher;
/**
*Percent Calculator
* Calculate the percentage of the macthes between vacancy and a user.
*@author Denzyl Dick<denzyl@live.nl>
*/
class PercentCalculator extends Plugin{
    private $vacancy = null;
    private $user = null;
    private $percent;

    public function setVacancy(Vacancy $vacancy)
    {
      $this->vacancy = $vacancy;
    }
    public function setUser(User $user)
    {
      $this->user = $user;
    }


    public function getPercent()
    {
      if($this->vacancy == null )
      {
        throw new Exception('$vacancy is not an instance of Vacancy');
      }else if($this->user == null)
      {
        throw new Exception('$user is not an instance of User');
      }else
      {
    return    $this->calculate($this->vacancy,$this->user);

      }
    }
    private function specificationsToArraySkills($specifications)
    {
        $array  =  array();
        foreach ($specifications as $specification) {
          $array[] = array($specification->skills->getName(),$specification->getPercent());
        }
        return $array;
    }

    private function matchCommonSkills($vacancy_skills,$user_skills)
    {

      $common_skills =  array();
      foreach ($vacancy_skills as $vacancy_skill) {

          foreach ($user_skills as $user_skill) {
            if($vacancy_skill[0] == $user_skill[0])
            {
              $common_skills[] =  $vacancy_skill[0];        }
          }
      }

      return $common_skills;
    }
    private function calculate($vacancy,$user)
    {
      $vacancy_skills = $this->specificationsToArraySkills($vacancy->getSpecification());
      $user_skills =  $this->specificationsToArraySkills($user->getSpecification());

      $common_skills  = $this->matchCommonSkills($vacancy_skills,$user_skills);


    return $common_skills['percent'] = floor(count($common_skills)/count($vacancy_skills) *100);


    }

}
