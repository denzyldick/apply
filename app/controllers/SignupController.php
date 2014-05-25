<?php

class SignupController extends \Phalcon\Mvc\Controller
{
    public function indexAction()
    {
        
    }
    
    public function startAction()
    {
         
        if($this->request->isPost()== true)
        {
            $this->view->disable();
            $email  = $this->request->getPost('email');
            $firstname  = $this->request->getPost('firstname');
            $lastname = $this->request->getPost('lastname');
            $password = $this->request->getPost('password');  
            
       
            
            if(!filter_var($email,FILTER_VALIDATE_EMAIL))
            {
               $this->flash->error("Not a valid email"); 
            }
            if(empty($firstname))
            {
                $this->flash->error("Please enter your firstname");
            }
            if(empty($lastname))
            {
                $this->flash->error("Please enter your lastname");
            }
            if(empty($password))
            {
                $this->flash->error("Please enter a password");
            }
            $user   =   new User();
            if(
            $user->setEmail($email) &&
           $user->setFirstname($firstname) &&
           $user->setLastname($lastname)&&
           $user->setPassword($this->security->hash($password)))
            {
           $user->save();
            }else
            {
          $this->flash->error("Something went wrong");
            }
            
            
            
        }  else {
            
            
        }
    }
}