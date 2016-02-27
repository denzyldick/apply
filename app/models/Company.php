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
    protected $user_id;


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
     * @var integer
     */
    protected $location_id;

    protected $twitter;
    protected  $facebook;
    public function getLocationId()
    {
        return $this->location_id;
    }

    public function setLocationId($location_id)
    {
        $this->location_id = $location_id;
    }

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

//    public function columnMap()
//    {
//        return array('id' => 'id', 'name' => 'name', 'description' => 'description',  'user_id' => 'user_id', 'location_id'=>'location_id','logo' => 'logo', 'website' => 'website', 'work_enviroment_type' => 'work_enviroment_type');
//    }

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

        if ($this->validationHasFailed()) {
            return false;
        }
        return true;
    }

    public function afterSave()
    {
        /** @var Elasticsearch\Client $elasticsearch */
        $elasticsearch =  \Phalcon\Di::getDefault()->get("elasticsearch");

        $elasticsearch->index($this->buildIndex());
    }

    private function buildIndex()
    {
        return [
            "index"=>"apply",
            "type"=>"company",
            "body"=>[
                "name"=>$this->getName(),
                "company_id" =>$this->getId(),
                "website"=>$this->getWebsite(),
                "summary"=>$this->getDescription(),
                "facebook"=>$this->getFacebook(),
                "twitter"=>$this->getTwitter()
            ]
        ];
    }

    /**
     * @return mixed
     */
    public function getFacebook()
    {
        return $this->facebook;
    }

    /**
     * @param mixed $facebook
     */
    public function setFacebook($facebook)
    {
        $this->facebook = $facebook;
    }

    /**
     * @return mixed
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    /**
     * @param mixed $twitter
     */
    public function setTwitter($twitter)
    {
        $this->twitter = $twitter;
    }

}
