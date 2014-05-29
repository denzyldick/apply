<?php

class LoginController extends \Phalcon\Mvc\Controller
{

    public function indexAction()
    {

    }
    
    public function loginAction()
    {
        $this->view->disable();
        if($this->request->isPost())
        {
            $email = $this->request->getPost("email");
            $password = $this->request->getPost("password");
            
             $user = User::findFirstByEmail($email);
        if ($user) {
            if ($this->security->checkHash($password, $user->getPassword())) {
                
                if($user->getType() == "employee")
                {
                    $controller = "employee";
                }  else {
                    
                $controller = "employer";
                    
                }
                $this->session->set("user-id",$user->getId());
                $this->session->set("user-type",$user->getType());
          echo json_encode(array("status"=>"true","redirect"=>$controller));
        

            }else{
                 echo json_encode(array("status"=>"false","message"=>"Wrong email or password"));
            }
        }
          
    }
        }
    
            

}

