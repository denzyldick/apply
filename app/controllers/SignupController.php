<?php
class SignupController extends ControllerBase
{
    public function indexAction()
    {
    }
    private function userExsists($email)
    {
        $result = User::findFirstByEmail($email);

        return (count($result) < 0);
    }
    public function startAction()
    {

        if ($this->request->isPost() == true) {

            $email = $this->request->getPost('email');
            $firstname = $this->request->getPost('firstname');
            $lastname = $this->request->getPost('lastname');
            $password = $this->request->getPost('password');
            $re_type = $this->request->getPost('re_type');
            $type = $this->request->getPost('type');
              if (!$this->userExsists($email)) {

            $user = new User();
            $user->setEmail($email);
            $user->setFirstname($firstname);
            $user->setLastname($lastname);
            $user->setPassword($this->security->hash($password));
            $user->setType((empty($type) == true ? "employee" : "employer"));

            $location = new Location();
            $location->setLongitude(0);
            $location->setLatitude(0);
            $location->save();

            $user->setLocationId($location->getId());

            if ($user->save()) {

                if ($user->getType() == "employer") {
                    $company = new Company();
                    $company->user_id = $user->getId();
                    $company->save();
                }

                $this->flash->success("Your account has been created.");
                $this->dispatcher->forward(array("controller" => "login", "action" => "index"));
            }} else {
                $this->flash->notice($this->lang->_('user_already_exsists'));
                $this->dispatcher->forward(array('controller'=>'signup','action'=>'start'));
            }
        }
    }
}
