<?php
class Vacancy extends \Phalcon\Mvc\Model {
    /**
     *
     * @var integer
     */
    protected $id;
    /**
     *
     * @var string
     */
    protected $function;
    /**
     *
     * @var string
     */
    protected $posted_date;
    /**
     *
     * @var integer
     */
    protected $user_id;
    /**
     *
     * @var double
     */
    protected $longitude;
    /**
     *
     * @var double
     */
    protected $latitude;
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
    protected $vacancycol;
    /**
     * Method to set the value of field id
     *
     * @param integer $id
     * @return $this
     */
    public function setId($id) {
        $this->id = $id;
        return $this;
    }
    /**
     * Method to set the value of field function
     *
     * @param string $function
     * @return $this
     */
    public function setFunction($function) {
        $this->function = $function;
        return $this;
    }
    /**
     * Method to set the value of field posted_date
     *
     * @param string $posted_date
     * @return $this
     */
    public function setPostedDate($posted_date) {
        $this->posted_date = $posted_date;
        return $this;
    }
    /**
     * Method to set the value of field user_id
     *
     * @param integer $user_id
     * @return $this
     */
    public function setUserId($user_id) {
        $this->user_id = $user_id;
        return $this;
    }
    /**
     * Method to set the value of field longitude
     *
     * @param double $longitude
     * @return $this
     */
    public function setLongitude($longitude) {
        $this->longitude = $longitude;
        return $this;
    }
    /**
     * Method to set the value of field latitude
     *
     * @param double $latitude
     * @return $this
     */
    public function setLatitude($latitude) {
        $this->latitude = $latitude;
        return $this;
    }
    /**
     * Method to set the value of field zoom
     *
     * @param integer $zoom
     * @return $this
     */
    public function setZoom($zoom) {
        $this->zoom = $zoom;
        return $this;
    }
    /**
     * Method to set the value of field location
     *
     * @param string $location
     * @return $this
     */
    public function setLocation($location) {
        $this->location = $location;
        return $this;
    }
    /**
     * Method to set the value of field vacancycol
     *
     * @param string $vacancycol
     * @return $this
     */
    public function setVacancycol($vacancycol) {
        $this->vacancycol = $vacancycol;
        return $this;
    }
    /**
     * Returns the value of field id
     *
     * @return integer
     */
    public function getId() {
        return $this->id;
    }
    /**
     * Returns the value of field function
     *
     * @return string
     */
    public function getFunction() {
        return $this->function;
    }
    /**
     * Returns the value of field posted_date
     *
     * @return string
     */
    public function getPostedDate() {
        return $this->posted_date;
    }
    /**
     * Returns the value of field user_id
     *
     * @return integer
     */
    public function getUserId() {
        return $this->user_id;
    }
    /**
     * Returns the value of field longitude
     *
     * @return double
     */
    public function getLongitude() {
        return $this->longitude;
    }
    /**
     * Returns the value of field latitude
     *
     * @return double
     */
    public function getLatitude() {
        return $this->latitude;
    }
    /**
     * Returns the value of field zoom
     *
     * @return integer
     */
    public function getZoom() {
        return $this->zoom;
    }
    /**
     * Returns the value of field location
     *
     * @return string
     */
    public function getLocation() {
        return $this->location;
    }
    /**
     * Returns the value of field vacancycol
     *
     * @return string
     */
    public function getVacancycol() {
        return $this->vacancycol;
    }
    /**
     * Return the amount of skills
     * @return integer
     */
    public function countSkills() {
        return (Specification::count(array("vacancy_id=".$this->getId())));

    }
    /**
    *  Return the amount of matches
    *  @return integer
    */
    public function countMatches()
    {
      return (Matches::count(array("vacancy_id=".$this->getId())));

    }
}
