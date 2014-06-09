<?php

class LoginController extends ControllerBase {

    public function indexAction() {
        parent::initialize();
    }

  
    public function loginAction() {
      
        if ($this->request->isPost()) {
            $email = $this->request->getPost("email");
            $password = $this->request->getPost("password");
            $remember = $this->request->getPost("remember");

            if ($this->check($email, $password, $remember)) {
            
              echo "Hello world";
            } else {
                echo json_encode(array("status" => "false", "message" => "Wrong email or password"));
            }
        }
    }

}
