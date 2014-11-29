<?php

use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\User\Component;

/**
 * Elements is a type menu manager. So every menu link needs to be declared in the class
 * @author Denzyl Dick<denzyl@live.nl>
 *
 */
class Elements extends Component
{
    private $employeeMenu;
    private $employerMenu;
    private $publicMenu;

    private $employeeSettingsDropDown;
    private $employerSettingsDropDown;
    private $di;

    public function __construct($di)
    {
        $this->di = $di;
        $this->employeeMenu = array(

            $this->lang->_("overview") => "/employee",
            $this->lang->_("suggestions") => "/suggestion"
        );
        $this->publicMen = array();
        $this->employerMenu = array(
            $this->lang->_("overview") => "/employer",
            $this->lang->_("suggestions") => "/suggestion",
            $this->lang->_("vacancies") => "/vacancy"
        );

        $this->employeeSettingsDropDown = array(
            $this->lang->_("account") => "/settings",
            $this->lang->_("career_path") => "/employee/options"
            //,        $this->lang->_("support")=> "/support"

        );
        $this->employerSettingsDropDown = array(
            $this->lang->_("account") => "/settings",
            $this->lang->_("company") => "/company",
            $this->lang->_("upgrade") => "/premium"
        );
    }

    /**
     * Get the menu you need
     * return array;
     */
    public function getMenu()
    {
        if ($this->session->get("user-type") == "employer") {
            return $this->employerMenu;
        } elseif ($this->session->get("user-type") == "employee") {
            return $this->employeeMenu;
        } else {
            return $this->publicMenu;
        }
    }

    /**
     * Get the menu you need
     * return array;
     */
    public function getSettingsDropDown()
    {
        if ($this->session->get("user-type") == "employer") {
            return $this->employerSettingsDropDown;
        } elseif ($this->session->get("user-type") == "employee") {
            return $this->employeeSettingsDropDown;
        }
    }
}
