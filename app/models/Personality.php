<?php
use Phalcon\Mvc\Model;

class Personality extends Model
{

    protected $vacancy_id;
    protected $user_id;
    protected $personality;

    public function setVacancyId($vacancy_id)
    {
        $this->vacancy_id = $vacancy_id;
    }

    public function setUserId($user_id)
    {
        $this->user_id = $user_id;
    }

    public function setPersonality($personality)
    {
        $this->personality = $personality;
    }
}