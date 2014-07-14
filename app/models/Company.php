<?php
class Company extends \Phalcon\Mvc\Model {
    /**
     *
     * @var integer
     */
    public $id;
    /**
     *
     * @var string
     */
    public $name;
    /**
     *
     * @var string
     */
    public $description;
    /**
     *
     * @var string
     */
    public $longitude;
    /**
     *
     * @var string
     */
    public $location;
    /**
     *
     * @var string
     */
    public $latitude;
    /**
     *
     *@var integer
     */
    public $zoom;
    /**
     *
     * @var integer
     */
    public $user_id;
    /**
     * Independent Column Mapping.
     */
    public function columnMap() {
        return array('id' => 'id', 'name' => 'name', 'description' => 'description', 'longitude' => 'longitude', 'latitude' => 'latitude', 'user_id' => 'user_id', 'location' => 'location', 'zoom' => 'zoom');
    }
    public function initialize() {
        $this->hasOne("user_id", "User", "id");
    }
}
