<?php


use Phalcon\Events\Events;
use Phalcon\Mvc\User\Plugin;
use Phalcon\Mvc\Dispatcher;

/**
 *Percent Calculator
 * Calculate the percentage of the macthes between vacancy and a user.
 * @author Denzyl Dick<denzyl@live.nl>
 */
class PercentCalculator extends Plugin
{
    private $vacancy = null;
    private $user = null;
    const SKILLS_PERCENTAGE = 90;
    const WORK_ENVIRONMENT_TYPE_PERCENTAGE = 10;

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
        if ($this->vacancy == null) {
            throw new Exception('$vacancy is not an instance of Vacancy');
            return null;
        } else if ($this->user == null) {
            throw new Exception('$user is not an instance of User');
            return null;
        } else {
            return $this->calculate();

        }
    }

    private function calculate()
    {

        $vacancy_skills = $this->specificationsToArraySkills($this->vacancy->getSpecification());
        $user_skills = $this->specificationsToArraySkills($this->user->getSpecification());
        $common_skills = $this->matchCommonSkills($vacancy_skills, $user_skills);
        $work_type = $this->workEnvironment();
        $personality = $this->calculatePersonality();

        return $common_skills['percent'] = floor(count($common_skills) / count($vacancy_skills) * (self::SKILLS_PERCENTAGE + $work_type));

    }

    private function calculatePersonality()
    {
        //   $this->view->disable();
        $user_personalities = Personality::find(array("user_id={$this->user->getId()}"))->toArray();
        $vacancy_personalities = Personality::find(array("vacancy_id={$this->vacancy->getId()}"))->toArray();
        $common_personalities = array();
        foreach ($vacancy_personalities as $vacancy_personality) {
            foreach ($user_personalities as $user_personality) {
                if ($user_personality['personality'] == $vacancy_personality['personality']) {
                    $common_personalities[] = $user_personality['personality;'];
                }
            }
        }

        return $common_personalities;

    }


    private function workEnvironment()
    {
        if ($this->vacancy->getWorkEnviromentType() === $this->user->getWorkEnviromentType() || $this->vacancy->User->Company->getWorkEnviromentType() === $this->user->getWorkEnviromentType()) {
            return self::WORK_ENVIRONMENT_TYPE_PERCENTAGE;
        }
        return 0;
    }

    private function specificationsToArraySkills($specifications)
    {
        $array = array();
        foreach ($specifications as $specification) {
            $array[] = array($specification->skills->getName(), $specification->getPercent());
        }
        return $array;
    }

    private function matchCommonSkills($vacancy_skills, $user_skills)
    {

        $common_skills = array();
        foreach ($vacancy_skills as $vacancy_skill) {

            foreach ($user_skills as $user_skill) {
                if ($vacancy_skill[0] == $user_skill[0]) {
                    $common_skills[] = $vacancy_skill[0];
                }
            }
        }

        return $common_skills;
    }

}
