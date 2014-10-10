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
class ControllerBase extends \Phalcon\Mvc\Controller
{
    protected $permission = false;
    protected $user;
    public function setAssets()
    {
      $this->assets
    ->collection('jsfooter')
    ->setTargetPath('final.js')
    ->setTargetUri('final.js')

    ->addJs('js/grayscale.js')

    ->join(false)
    ->addFilter(new Phalcon\Assets\Filters\Jsmin());

    $this->assets
    ->collection('jsheader')
    ->addJs('js/Chart.js')
    ->addJs('js/jquery/jquery.min.js')
    ->addJs('bootstrap/js/bootstrap.min.js')
    ->addJs('js/jquery-gmaps-latlon-picker.js')
    ->addJs('js/bootstrap-tagsinput.min.js')
    ->addJs('slider/js/bootstrap-slider.js')
    ->addJs('js/main.js')

    ->addJs('https://maps.googleapis.com/maps/api/js?key=AIzaSyAwk6wzMEnz2z58YepPrxwwcCf_tOd20lg', false, false);

    }
    public function initialize()
    {
        $this->setAssets();

        if ($this->session->get("user-type") != "guest" and $this->session->has("user-type") == true) {
            $this->view->show_settings = true;
            $this->companyHasBeenFilled();
            $this->skillsHasBeenFilled();
            $this->user = User::findFirst($this->session->get("user-id"));
            $this->matcher->generateMatches($this->user);

        } else {
            $this->view->show_settings = false;
        }
    }
    protected function skillsHasBeenFilled()
    {

      if ($this->session->get("user-type")=="employee") {
        if (count(Specification::find(array("user_id =".$this->session->get("user-id")))) < 1 && $this->dispatcher->getControllerName() !='employee' && $this->dispatcher->getActionName() !='options') {
            $this->flash->notice($this->lang->_("add_skills")."&nbsp;&nbsp;<a href=/employee/options class='btn btn-small btn-primary'>{$this->lang->_('click_here')}</a>");
        }

      }
    }
    protected function companyHasBeenFilled()
    {
        if ($this->session->get("user-type") == "employer" && $this->dispatcher->getControllerName()
        !='company') {
            $company =  Company::findFirst(array("user_id = {$this->session->get('user-id')}"));

              if ($company->name == null) {

                $this->flash->notice("Please enter all your company information &nbsp;&nbsp;<a href=/company class='btn btn-small btn-primary'> click here</a>");

                return false;
            }

            return true;
        }
    }
    protected function known()
    {
        if ($this->cookies->has("email") && $this->cookies->has("password")) {
            return ($this->check($this->cookies->get("email")->getValue(), $this->cookies->get("password")->getValue(), "no"));
        }

        return false;
    }
    protected function remember($email, $password)
    {
        $this->cookies->useEncryption(true);
        $this->cookies->set("email", $email);
        $this->cookies->set("password", $password);
    }
    protected function setType(User $user)
    {
        if ($user->getType() == "employee") {
            $controller = "employee";
        } else {
            $controller = "employer";
        }
        $this->session->set("user-id", $user->getId());
        $this->session->set("user-type", $user->getType());
    }
    protected function check($email, $password, $remember = "no")
    {
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

      public function notFoundAction()
    {
        // Send a HTTP 404 response header
        $this->response->setStatusCode(404, "Not Found");
    }

}
