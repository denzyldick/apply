<?php

use Phalcon\Acl;
use Phalcon\Events\Event;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\User\Plugin;

class Security extends Plugin
{

    public function __construct($dependencyInjector)
    {
        $this->_dependencyInjector = $dependencyInjector;
    }

    public function beforeDispatch(Event $event, Dispatcher $dispatcher)
    {

        //Check whether the "auth" variable exists in session to define the active role
        $auth = $this->session->has('user-type');

        if (!$auth) {

            $role = 'guest';
            $userDispatcher = [
                'controller' => 'login',
                'action' => 'index'];
        } else {
            $role = $this->session->get("user-type");

            $userDispatcher = [
                'controller' => $role,
                'action' => 'index'
            ];
            $this->view->show_settings = true;
        }

        //Take the active controller/action from the dispatcher
        $controller = $dispatcher->getControllerName();
        $action = $dispatcher->getActionName();

        //Obtain the ACL list
        $acl = $this->getAcl();

        //Check if the Role have access to the controller (resource)
        $allowed = $acl->isAllowed($role, $controller, $action);

        if ($allowed != Acl::ALLOW) {

            //If he doesn't have access forward him to the index controller

            $dispatcher->forward(
                $userDispatcher
            );

            //Returning "false" we tell to the dispatcher to stop the current operation
            return false;
        }

    }

    public function getAcl()
    {

        //Create te acces control list ACL
        $acl = new Phalcon\Acl\Adapter\Memory();
        // Deny every action
        $acl->setDefaultAction(Phalcon\Acl::DENY);

        $roles = array(
            'guest' => new Phalcon\Acl\Role('guest'),
            'employee' => new Phalcon\Acl\Role('employee'),
            'employer' => new Phalcon\Acl\Role('employer')

        );
        foreach ($roles as $role) {
            $acl->addRole($role);
        }
        //Employee area
        $employeeResource = [
            'photo'=>['index'],
            'education'=>["index","delete"],
            'search'=>['index','dummy'],
            'work' => ['index','delete'],
            'employee' => ["index", "skills", "done", "options", "education", "work"],
            'suggestion' => ["index", "vacancies", "accept", 'vacancy', 'remove', 'decline'],
            'logout' => ['index'],
            'settings' => ["index", "save", "password", "reset","deactivate"],
            'support' => ['index'],
            'notification' => ['index', 'seen']
        ];
        foreach ($employeeResource as $resource => $actions) {
            $acl->addResource(new Phalcon\Acl\Resource($resource), $actions);
        }

        //Employer area
        $employerResource = [
            'photo'=>['index','upload'],
            'search'=>['index','dummy'],
            'employer' => ['index', 'settings'],
            'suggestion' => ["index", "view", 'profile', 'accept', 'remove', 'decline'],
            'premium' => ["index", 'charge'],
            'settings' => ["index", "save", "password", "reset","deactivate"],
            'logout' => ['index'],
            'vacancy' => ['index', 'new', 'location', 'skills', 'finish', 'remove', 'save'],
            'company' => ['index', 'save'],
            'support' => ['index'],
            'notification' => ['index', 'seen']
        ];

        foreach ($employerResource as $resource => $actions) {

            $acl->addResource(new Phalcon\Acl\Resource($resource), $actions);
        }

        $publicResources = [
            'photo'=>['index'],
            'search'=>['index','dummy'],
            'index' => ['index', 'show'],
            'login' => ['index', 'login', 'forgotpassword'],
            'signup' => ['index', 'start', 'activate'],
            'verification' => ['index']

        ];
        foreach ($publicResources as $resource => $actions) {
            $acl->addResource(new Phalcon\Acl\Resource($resource), $actions);
        }

        foreach ($publicResources as $resource => $actions) {
            foreach ($actions as $action) {
                $acl->allow('guest', $resource, $action);
            }
        }
        //Grant access to private area only to role employee
        foreach ($employeeResource as $resource => $actions) {
            foreach ($actions as $action) {
                $acl->allow('employee', $resource, $action);
            }
        }
        //Grant access to private area only to role employer
        foreach ($employerResource as $resource => $actions) {
            foreach ($actions as $action) {
                $acl->allow('employer', $resource, $action);
            }
        }

        return $acl;
    }

}
