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
    /**
     * @var User user
     */
    protected $user;

    public function initialize()
    {

        $this->setAssets();
        if ($this->session->get("user-type") != "guest" and $this->session->has("user-type") == true) {
            $this->view->show_settings = true;
            $this->companyHasBeenFilled();
            $this->skillsHasBeenFilled();
            $this->user = User::findFirst($this->session->get("user-id"));
            $this->matcher->generateMatches($this->user);
            $this->view->user = $this->user;

        } else {
            $this->view->show_settings = false;
        }

    }

    public function setAssets()
    {
        $this->assets
            ->addCss("https://bootswatch.com/flatly/bootstrap.min.css")
            ->addCss("/css/bootstrap-tagsinput.css")
            ->addCss("/font-awesome/css/font-awesome.min.css")
            ->addCss("http://fonts.googleapis.com/css?family=Roboto")
            ->addCss("/css/socialicious.css")
            ->addCss("/bootstrap/fonts/font-awesome.min.css")
            ->addCss("/slider/css/slider.css")
            ->addCss("pnotify/css/pnotify.custom.min.css")
            ->addCss("/css/style.css")
            ->addCss("/css/animate.css");
        $this->assets
            ->collection('jsHeader')
            ->addJs('/js/jquery/jquery.min.js')
            ->addJs('https://maps.googleapis.com/maps/api/js?key=AIzaSyAwk6wzMEnz2z58YepPrxwwcCf_tOd20lg', false, false)
            ->addJs('/js/Chart.js')
            ->addJs("/dropzone/dropzone.js")
            ->addJs("/pnotify/js/pnotify.custom.min.js")
            ->addJs('/js/main.js');
        $this->assets
            ->collection('jsFooter')
            ->addJs('/bootstrap/js/bootstrap.min.js')
            ->addJs('/js/jquery-gmaps-latlon-picker.js')
            ->addJs('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.7.1/bootstrap-tagsinput.min.js',false)
            ->addJs('/slider/js/bootstrap-slider.js')
            ->addJs("http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js", false, false);
    }

    protected function companyHasBeenFilled()
    {
        if ($this->session->get("user-type") === "employer" && !Company::findFirstByUserId($this->session->get('user-id') && $this->dispatcher->getControllerName() !== "company")  ) {
//            $this->flashSession->notice($this->lang->_("please_enter_your_company_information") . "&nbsp;&nbsp;<a href=/company class='btn btn-small btn-primary '><i class='fa fa-briefcase'></i>  " . $this->lang->_("click_here") . "</a>");
        }

    }

    protected function skillsHasBeenFilled()
    {
        if (Specification::find(array("user_id =" . $this->session->get("user-id"))) == false && $this->dispatcher->getControllerName() !== 'employee' && $this->dispatcher->getActionName() !== 'options' && $this->session->get("user-type") == "employee") {

//            $this->flash->notice($this->lang->_("add_skills") . "&nbsp;&nbsp;<a href=/employee/options class='btn btn-small btn-primary'>{$this->lang->_('click_here')}</a>");
            return false;
        }
        return false;
    }

    public function notFoundAction()
    {
        // Send a HTTP 404 response header
        $this->response->setStatusCode(404, "Not Found");
    }

    protected function known()
    {
        if ($this->cookies->has("email") && $this->cookies->has("password")) {
            return ($this->check($this->cookies->get("email")->getValue(), $this->cookies->get("password")->getValue(), "no"));
        }

        return false;
    }


    protected function isFirstTime(User $user)
    {
        if (is_null($user->getLoginDate())) {
            return true;
        }
        return false;
    }


    protected function remember($email, $password)
    {
        $this->cookies->useEncryption(true);
        $this->cookies->set("email", $email);
        $this->cookies->set("password", $password);
    }


    protected function check($email, $password, $remember = "no")
    {


        $user = User::findFirst(array("email = :email:","bind"=>["email"=>$email]));

        if (count($user) == 1 && $user instanceof User) {

            $this->user = $user;

            if($this->user->isAuthentic($password))
            {
                $this->session->set("user-id", $user->getId());
                $this->session->set("user-type", $user->getUserType());

                if($remember == "yes")
                {
                    $this->remember($email,$password);
                }
                return true;
            }
        }

        return false;
    }

}
