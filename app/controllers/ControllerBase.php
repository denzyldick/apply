<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
*/
/**
 * Description of ControllerBase
 *
 * @author denzyl
 */
class ControllerBase extends \Phalcon\Mvc\Controller {
    protected $permission = false;
    public function initialize() {
        if ($this->session->get("user-type") != "guest" AND $this->session->has("user-type") == true) {
            $this->view->show_settings = true;
            $this->companyHasBeenFilled();
        } else {
            $this->view->show_settings = false;
        }
    }
    protected function companyHasBeenFilled() {
        if ($this->session->get("user-type") == "employer") {
            $company = Company::findFirstByUser_id($this->session->get("user-id"));
            if ($company->name == null || $company->description == null || $company->longitude == null || $company->latitude == null || $company->zoom == null) {
                $this->flash->notice("Please enter all your company information &nbsp;&nbsp;<a href=/company class='btn btn-small btn-primary'> click here</a>");
                return false;
            }
            return true;
        }
    }
    protected function known() {
        if ($this->cookies->has("email") && $this->cookies->has("password")) {
            return ($this->check($this->cookies->get("email")->getValue(), $this->cookies->get("password")->getValue(), "no"));
        }
        return false;
    }
    protected function remember($email, $password) {
        $this->cookies->useEncryption(true);
        $this->cookies->set("email", $email);
        $this->cookies->set("password", $password);
    }
    protected function setType(User $user) {
        if ($user->getType() == "employee") {
            $controller = "employee";
        } else {
            $controller = "employer";
        }
        $this->session->set("user-id", $user->getId());
        $this->session->set("user-type", $user->getType());
    }
    protected function check($email, $password, $remember = "no") {
        $user = User::findFirstByEmail(trim($email));
        if ($user) {
            if ($this->security->checkHash($password, $user->getPassword())) {
                $this->setType($user);
                ($remember === "yes") ? $this->remember($email, $password) : "";
                return true;
            }
            return false;
        }
        return false;
    }
}
