<?php

use Phalcon\Mvc\Model\Validator\PresenceOf;
use Phalcon\Mvc\Model\Validator\Url;
use Phalcon\Mvc\Model\Validator\Numericality;
use Phalcon\Mvc\Model\Validator\Regex;

class Company extends \Phalcon\Mvc\Model
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
    protected $name;

    /**
     *
     * @var string
     */
    protected $description;

    /**
     *
     * @var integer
     */
    protected $longitude;

    /**
     *
     * @var integer
     */
    protected $latitude;

    /**
     *
     * @var integer
     */
    protected $user_id;

    /**
     *
     * @var integer
     */
    protected $zoom;

    /**
     *
     * @var string
     */
    protected $location;

    /**
     *
     * @var string
     */
    protected $logo;

    /**
     *
     * @var string
     */
    protected $website;

    /**
     *
     * @var string
     */
    protected $work_enviroment_type;

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
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Returns the value of field name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Method to set the value of field name
     *
     * @param string $name
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Returns the value of field description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Method to set the value of field description
     *
     * @param string $description
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Returns the value of field longitude
     *
     * @return integer
     */
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * Method to set the value of field longitude
     *
     * @param integer $longitude
     * @return $this
     */
    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;

        return $this;
    }

    /**
     * Returns the value of field latitude
     *
     * @return integer
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * Method to set the value of field latitude
     *
     * @param integer $latitude
     * @return $this
     */
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;

        return $this;
    }

    /**
     * Returns the value of field user_id
     *
     * @return integer
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Method to set the value of field user_id
     *
     * @param integer $user_id
     * @return $this
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;

        return $this;
    }

    /**
     * Returns the value of field zoom
     *
     * @return integer
     */
    public function getZoom()
    {
        return $this->zoom;
    }

    /**
     * Method to set the value of field zoom
     *
     * @param integer $zoom
     * @return $this
     */
    public function setZoom($zoom)
    {
        $this->zoom = $zoom;

        return $this;
    }

    /**
     * Returns the value of field location
     *
     * @return string
     */
    public function getLocation()
    {
        return $this->location;
    }

    /**
     * Method to set the value of field location
     *
     * @param string $location
     * @return $this
     */
    public function setLocation($location)
    {
        $this->location = $location;

        return $this;
    }

    /**
     * Returns the value of field logo
     *
     * @return string
     */
    public function getLogo()
    {
        return $this->logo;
    }

    /**
     * Method to set the value of field logo
     *
     * @param string $logo
     * @return $this
     */
    public function setLogo($logo)
    {
        $this->logo = $logo;

        return $this;
    }

    /**
     * Returns the value of field website
     *
     * @return string
     */
    public function getWebsite()
    {
        return $this->website;
    }

    /**
     * Method to set the value of field website
     *
     * @param string $website
     * @return $this
     */
    public function setWebsite($website)
    {
        $this->website = $website;

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
     * @return $this
     */
    public function setWorkEnviromentType($work_enviroment_type)
    {
        $this->work_enviroment_type = $work_enviroment_type;

        return $this;
    }

    public function columnMap()
    {
        return array('id' => 'id', 'name' => 'name', 'description' => 'description', 'longitude' => 'longitude', 'latitude' => 'latitude', 'user_id' => 'user_id', 'location' => 'location', 'zoom' => 'zoom', 'logo' => 'logo', 'website' => 'website', 'work_enviroment_type' => 'work_enviroment_type');
    }

    public function initialize()
    {
        $this->hasOne("user_id", "User", "id");
        $this->hasOne("location_id", "Location", "id");
    }

    public function validation()
    {
        $this->validate(new PresenceOf(
            array(
                'field' => 'name',
                'message' => 'company_name_is_missing'
            )
        ));
        $this->validate(new PresenceOf(
            array(
                'field' => 'description',
                'message' => 'company_description_is_missing'
            )
        ));
        $this->validate(
            new Url(
                array(
                    'field' => 'website',
                    'message' => 'company_url_is_not_valid'
                )
            )

        );
        $this->validate(
            new PresenceOf(
                array(
                    "field" => "location",
                    "message" => "company_location_is_missing"
                )
            )
        );
//        $this->validate(
//                new PresenceOf(
//                    array(
//                        "field"=>"logo",
//                        "message"=>"company_logo_is_missing"
//                    )
//                )
//        );
        $this->validate(
            new PresenceOf(
                array(
                    "field" => "work_enviroment_type",
                    "message" => "company_culture_is_missing"
                )
            )
        );
        if ($this->validationHasFailed()) {
            return false;
        }
        return true;
    }

}
