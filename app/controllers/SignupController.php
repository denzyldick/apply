<?php

class SignupController extends ControllerBase {

public function indexAction() {

}
    public function startAction() {
         $this->view->disable();
        if ($this->request->isPost() == true) {
            $user = new User();

            $email = $this->request->getPost('email');
            $firstname = $this->request->getPost('firstname');
            $lastname = $this->request->getPost('lastname');
            $password = $this->request->getPost('password');
            $re_type = $this->request->getPost('re_type');
            $type = $this->request->getPost('type');

            if ($type == "employer") {
                $type = "Employer";
            } else {
                $type = "Employee";
            }

            $errormessage = "Please: <br/>";
            $status = true;

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

                $errormessage .= "enter a valid email adres<br/>";
                $status = false;
            }
            if (empty($firstname)) {

                $errormessage .= "enter your firstname.";
                $status = false;
            }
            if (empty($lastname)) {

                $errormessage .= "enter your lastname";
                $status = false;
            }
            if (empty($password)) {
                $errormessage .= "enter your password";
                $status = false;
            }

            if ($re_type != $password) {
                $errormessage .= "password doesn't match";
                $status = false;
            }

            if ($status) {

                $user->setEmail($email);
                $user->setFirstname($firstname);
                $user->setLastname($lastname);
                $user->setPassword($this->security->hash($password));
                $user->setType($type);

        if($user->getType() == "employer")
                      {
                        $company = new Company();
                        $company->user_id = $user->getId();
                        $company->save();
                      }
               if( $user->save())
               {
                 $this->flash->success("Your account has been created.");
                 return $this->dispatcher->forward(array("controller"=>"login","action"=>"index"));

               }else
               {
                   foreach ($user->getMessages() as $message) {
    echo $message;
  }   }


            } else {
                echo(json_encode(array("status" => "false", "message" => $errormessage)));
            }
        } else {


            $response = new \Phalcon\Http\Response();
            $response->setStatusCode(404, "Not Found");
            $response->setContent("<h1>404 :( </h1>Sorry, the page doesn't exist");
            $response->send();
        }
    }

}
