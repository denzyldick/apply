<?php
class SignupController extends ControllerBase {
    public function indexAction() {
    }
    public function startAction() {
        if ($this->request->isPost() == true) {
            $email = $this->request->getPost('email');
            $firstname = $this->request->getPost('firstname');
            $lastname = $this->request->getPost('lastname');
            $password = $this->request->getPost('password');
            $re_type = $this->request->getPost('re_type');
            $type = $this->request->getPost('type');
            $user = new User();
            $user->setEmail($email);
            $user->setFirstname($firstname);
            $user->setLastname($lastname);
            $user->setPassword($this->security->hash($password));
            $user->setType((empty($type) == true ? "employee" : "employer"));
            if ($user->save()) {
                if ($user->getType() == "employer") {
                    $company = new Company();
                    $company->user_id = $user->getId();
                    $company->save();
                }
                $this->flash->success("Your account has been created.");
                $this->dispatcher->forward(array("controller" => "login", "action" => "index"));
            }
        }
    }
}
