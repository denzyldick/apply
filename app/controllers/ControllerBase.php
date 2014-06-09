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
        $this->view->show_settings = false;
        if ($this->sessionRedirect()) {
               $this->view->show_settings = true;
            if ($this->known() || $this->sessionRedirect()) {
                $this->loginRedirect();
             
            } else {
                $this->notLoggedInRedirect();
            }
        } else {
            $this->notLoggedInRedirect();
        }
    }

    private function sessionRedirect() {
        if ($this->session->has("user-id") && $this->session->has("user-type")) {
            return true;
        }
        return false;
    }

    private function notLoggedInRedirect() {
        if ($this->request->getURI() != "/" && $this->request->getURI() != "/login" && $this->request->getURI() != "/signup" && $this->request->getURI() != "") {

            $this->response->redirect("/login");
        }
        if ($this->request->getURI() == "/") {
            
        }
    }

    private function loginRedirect() {
        if ($this->request->getURI() == "/" || $this->request->getURI() == "/login" || $this->request->getURI() == "\signup") {

            $this->userTypeRedirect();
        } else {
            
        }
    }

    private function userTypeRedirect() {
        if ($this->request->getURI() != $this->session->get("user-type")) {
            $this->response->redirect($this->session->get("user-type"));
        }
        $this->response->redirect($this->session->get("user-type"));
    }

    protected function known() {
        if ($this->cookies->has("email") && $this->cookies->has("password")) {

            return($this->check($this->cookies->get("email")->getValue(), $this->cookies->get("password")->getValue(), "no"));
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
