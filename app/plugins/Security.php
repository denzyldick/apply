<?php

use Phalcon\Events\Event,
        Phalcon\Mvc\User\Plugin,
        Phalcon\Mvc\Dispatcher,
        Phalcon\Acl;

class Security extends Plugin
{

  public function __construct($dependencyInjector)
	{
		$this->_dependencyInjector = $dependencyInjector;
	}

	public function getAcl()
	{
		if (!isset($this->persistent->acl)) {



    //Create te acces control list ACL
    $acl = new Phalcon\Acl\Adapter\Memory();
    // Deny every action
    $acl->setDefaultAction(Phalcon\Acl::DENY);


    $roles =  array(
      'guest'=> new Phalcon\Acl\Role('guest'),
      'employee'=> new Phalcon\Acl\Role('employee'),
      'employer'=> new Phalcon\Acl\Role('employer')

    );
    foreach($roles as $role)
    {
      $acl->addRole($role);
    }
    //Employee area
    $employeeResource = array(
      'employee' => array("index"),
      'matches' => array("index","view"),
      'premium'=> array("index"),
      'settings'=>array("index","save")
    );
    foreach($employeeResource as $resource => $actions)
    {
      $acl->addResource(new Phalcon\Acl\Resource($resource),$actions);
    }

    //Employer area
    $employerResource = array(
      'employer'=>array('index','settings'),
      'settings'=>array('index','save'),
      'matches' => array("index","view"),
      'premium'=> array("index"),
      'settings'=>array("index","save"),
      'vacancy'=>array('index','new','location','skills','finish','remove','save'),
      'company'=>array('index')
    );

    foreach($employerResource as $resource => $actions)
    {

    $acl->addResource(new Phalcon\Acl\Resource($resource),$actions);
    }

    $publicResources =  array(
      'login'=> array('index','login'),
      'logout'=> array('index'),
      'signup'=>array('index','start'),
      'index'=> array('index','show')
    );
    foreach($publicResources as $resource => $actions)
    {
      $acl->addResource(new Phalcon\Acl\Resource($resource),$actions);
    }
    //Grant access to public areas to both users and guests
    foreach ($roles as $role) {
        foreach ($publicResources as $resource => $actions) {
            $acl->allow($role->getName(), $resource, '*');
        }
    }
    foreach($publicResources as $resource => $actions)
    {
      foreach($actions as $action)
      {
        $acl->allow('guest',$resource,$action);
      }
    }
    //Grant access to private area only to role employee
    foreach ($employeeResource as $resource => $actions) {
        foreach ($actions as $action) {
            $acl->allow('employee', $resource, $action);
        }
    }
    //Grant access to private area only to role employer
    foreach($employerResource as $resource => $actions)
    {
        foreach($actions as $action)
        {
          $acl->allow('employer',$resource,$action);
        }
    }

			$this->persistent->acl = $acl;
		}

		return $this->persistent->acl;
	}

    public function beforeDispatch(Event $event, Dispatcher $dispatcher)
    {

        //Check whether the "auth" variable exists in session to define the active role
        $auth = $this->session->has('user-type');

        if (!$auth) {

              $role = 'guest';
              $userDispatcher =   $guestDispatcher = array(
              'controller'=>'login',
              'action'=>'index');
        } else {
            $role = $this->session->get("user-type");

           $userDispatcher =   $nonGuestDispatcher = array(
              'controller'=>$role,
              'action'=> 'action'
            );
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

        /*   $dispatcher->forward(
                  $userDispatcher
            );  */

            //Returning "false" we tell to the dispatcher to stop the current operation
          //  return false;
        }

    }

}
