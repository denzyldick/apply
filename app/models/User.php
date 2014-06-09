<?php

class User extends \Phalcon\MVC\Model {

    private $id;
    public $firstname;
    public $lastname;
    private $password;
    private $salt;
    public $email;
    public $usertype;

    public function getId() {
        return $this->id;
    }

    public function getType() {
        return $this->usertype;
    }

    public function getPassword() {
        return $this->password;
    }

    public function setId($id) {
        if (!is_numeric($id)) {
            return false;
        } else {
            $this->id = $id;
            return true;
        }
    }

    public function setEmail($email) {
        if (count(User::find("email =  '$email'")) == 0) {
            $this->email = $email;
            return true;
        }
        return false;
    }

    public function setPassword($password) {
        if (empty($password)) {
            return false;
        }
        $this->password = $password;
        return true;
    }

    public function setFirstname($firstname) {
        if (!empty($firstname)) {
            $this->firstname = $firstname;
            return true;
        }
        return false;
    }

    public function setLastname($lastname) {
        if (!empty($lastname)) {
            $this->lastname = $lastname;
            return true;
        }
        return false;
    }

    public function setType($type) {
        if (!empty($type)) {
            $this->usertype = $type;
            return true;
        }

        return false;
    }

}
