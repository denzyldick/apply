<?php

use Phalcon\DI;
use Phalcon\Mvc\Model\Validator\Email as Email;
use Phalcon\Mvc\Model\Validator\Inclusionin;
use Phalcon\Mvc\Model\Validator\PresenceOf;
use Phalcon\Mvc\Model\Validator\Uniqueness;

class User extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    protected $id;

    /**
     *
     * @var string
     */
    protected $firstname;

    /**
     *
     * @var string
     */
    protected $lastname;

    /**
     *
     * @var string
     */
    protected $country;

    /**
     *
     * @var string
     */
    protected $city;

    /**
     *
     * @var string
     */
    protected $email;

    /**
     *
     * @var string
     */
    protected $password;

    /**
     *
     * @var string
     */
    protected $usertype;

    /**
     *
     * @var string
     */
    protected $lang;

    /**
     *
     * @var string
     */
    protected $validated;

    /**
     *
     * @var string
     */
    protected $work_enviroment_type;

    /**
     *
     * @var integer
     */
    protected $location_id;

    /**
     *
     * @var integer
     */
    protected $vacancy_count;

    /**
     *
     * @var integer
     */
    protected $emailer;

    /**
     *
     * @var string
     */
    protected $id_stripe;

    /**
     *
     * @var integer
     */
    protected $location_diameter;

    /**
     *
     * @var string
     */
    protected $signup_date;

    /**
     * Returns the value of field id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Method to set the value of field id
     *
     * @param integer $id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Returns the value of field firstname
     *
     * @return string
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Method to set the value of field firstname
     *
     * @param string $firstname
     *
     * @return $this
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Returns the value of field lastname
     *
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Method to set the value of field lastname
     *
     * @param string $lastname
     *
     * @return $this
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * Returns the value of field country
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Method to set the value of field country
     *
     * @param string $country
     *
     * @return $this
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Returns the value of field city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Method to set the value of field city
     *
     * @param string $city
     *
     * @return $this
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Returns the value of field email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Method to set the value of field email
     *
     * @param string $email
     *
     * @return $this
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Returns the value of field password
     *
     * @return string
     */
    public function getPassword()
    {

        return $this->password;
    }

    /**
     * Method to set the value of field password
     *
     * @param string $password
     *
     * @return $this
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }
    /**
     * Returns the value of field usertype
     *
     * @return string
     */
    public function getUsertype()
    {
        return $this->usertype;
    }

    /**
     * Method to set the value of field usertype
     *
     * @param string $usertype
     *
     * @return $this
     */
    public function setUsertype($usertype)
    {
        $this->usertype = $usertype;

        return $this;
    }

    /**
     * Returns the value of field lang
     *
     * @return string
     */
    public function getLang()
    {
        return $this->lang;
    }

    /**
     * Method to set the value of field lang
     *
     * @param string $lang
     *
     * @return $this
     */
    public function setLang($lang)
    {
        $this->lang = $lang;

        return $this;
    }

    /**
     * Returns the value of field validated
     *
     * @return string
     */
    public function getValidated()
    {
        return $this->validated;
    }

    /**
     * Method to set the value of field validated
     *
     * @param string $validated
     *
     * @return $this
     */
    public function setValidated($validated)
    {
        $this->validated = $validated;

        return $this;
    }

    /**
     * Returns the value of field work_enviroment_type
     *
     * @return string
     */
    public function getWorkEnviromentType()
    {
        return $this->work_enviroment_type;
    }

    /**
     * Method to set the value of field work_enviroment_type
     *
     * @param string $work_enviroment_type
     *
     * @return $this
     */
    public function setWorkEnviromentType($work_enviroment_type)
    {
        $this->work_enviroment_type = $work_enviroment_type;

        return $this;
    }

    /**
     * Returns the value of field location_id
     *
     * @return integer
     */
    public function getLocationId()
    {
        return $this->location_id;
    }

    /**
     * Method to set the value of field location_id
     *
     * @param integer $location_id
     *
     * @return $this
     */
    public function setLocationId($location_id)
    {
        $this->location_id = $location_id;

        return $this;
    }

    /**
     * Returns the value of field vacancy_count
     *
     * @return integer
     */
    public function getVacancyCount()
    {
        return $this->vacancy_count;
    }

    /**
     * Method to set the value of field vacancy_count
     *
     * @param integer $vacancy_count
     *
     * @return $this
     */
    public function setVacancyCount($vacancy_count)
    {
        $this->vacancy_count = $vacancy_count;

        return $this;
    }

    /**
     * Returns the value of field emailer
     *
     * @return integer
     */
    public function getEmailer()
    {
        return $this->emailer;
    }

    /**
     * Method to set the value of field emailer
     *
     * @param integer $emailer
     *
     * @return $this
     */
    public function setEmailer($emailer)
    {
        $this->emailer = $emailer;

        return $this;
    }

    /**
     * Returns the value of field id_stripe
     *
     * @return string
     */
    public function getIdStripe()
    {
        return $this->id_stripe;
    }

    /**
     * Method to set the value of field id_stripe
     *
     * @param string $id_stripe
     *
     * @return $this
     */
    public function setIdStripe($id_stripe)
    {
        $this->id_stripe = $id_stripe;

        return $this;
    }

    /**
     * Returns the value of field location_diameter
     *
     * @return integer
     */
    public function getLocationDiameter()
    {
        return $this->location_diameter;
    }

    /**
     * Method to set the value of field location_diameter
     *
     * @param integer $location_diameter
     *
     * @return $this
     */
    public function setLocationDiameter($location_diameter)
    {
        $this->location_diameter = $location_diameter;

        return $this;
    }

    /**
     * Returns the value of field signup_date
     *
     * @return string
     */
    public function getSignupDate()
    {
        return $this->signup_date;
    }

    /**
     * Method to set the value of field signup_date
     *
     * @param string $signup_date
     *
     * @return $this
     */
    public function setSignupDate($signup_date)
    {
        $this->signup_date = $signup_date;

        return $this;
    }

    public function validation()
    {


        $this->validate(new Uniqueness(
            array(
                "field" => "email",
                "message" => "email_already_in_use"
            )
        ));
        $this->validate(new PresenceOf(
            array(
                "field" => "email",
                "message" => "email_is_missing"
            )
        ));


        $this->validate(new PresenceOf(
                array(
                    "field" => "firstname",
                    "message" => "firstname_is_missing"
                )
            )

        );

        $this->validate(
            new PresenceOf(
                array(
                    "field" => "lastname",
                    "message" => "lastname_is_missing"
                )
            )
        );
        $this->validate(
            new PresenceOf(
                array(
                    "field" => "password",
                    "message" => "password_is_missing"
                )
            )
        );
        $this->validate(
            new Inclusionin(
                array(
                    "field" => "usertype",
                    "domain" => array("employee", "employer"),
                    "message" => "not_a_valid_account_type"
                )
            )
        );
        if ($this->validationHasFailed() == true) {
            return false;
        }

    }

    public function beforeSave()
    {
        $this->password = $this->hashPassword($this->password);
    }

    public function login()
    {

    }

    private function hashPassword($password)
    {
        $security = new \Phalcon\Security();
        return $security->hash($password);
    }
    public function initialize()
    {
        $this->hasOne("location_id", "Location", "id");
        $this->hasMany("id", "Specification", "user_id");
        $this->belongsTo("id", "Company", "user_id");
        $this->hasMany("id", "Premium", "user_id");
        $this->hasMany('id', 'Notification', 'sender');
        $this->hasMany('id', 'Notification', 'receiver');
    }

}
