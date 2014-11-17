<?php

    class SignupController extends ControllerBase
    {
        public function indexAction()
        {
        }

        public function employerAction()
        {

        }

        public function employeeAction()
        {

        }

        private function userExsists($email)
        {
            $result = User::findFirstByEmail($email);

            return (count($result) < 0);
        }

        private function sendRegistrationMail(User $user)
        {

            $this->view->start();
            $this->view->setVar("fullname", "$user->getFirstname()} {$user->getLastname()}");
            $this->view->setVar("verification_code", $this->crypt->encrypt($user->getId()));
            $this->view->render('mailer', 'activation');
            $this->view->finish();

            $this->mailer->setBody($this->view->getContent());
            $this->mailer->setSubject($this->lang->_('activation_mail_subject'));
            $this->mailer->setRecipments(array($user->getEmail() => "{$user->getFirstname()} {$user->getLastname()}"));
            $this->mailer->setSender(array($this->config->smtp->email));
            $this->mailer->setType('text/html');
            $this->mailer->send();
        }

        public function activateAction()
        {
            if ($this->request->isPost()) {
                $id = $this->crypt->decrypt($this->request->getPost('code'));
                if (is_numeric($id)) {
                    $user = User::findFirst($id);
                    if (count($user) == 1) {
                        $user->setValidated('yes');
                        $this->flash->succes($this->lang->_('your_account_has_been_activated'));
                        $this->dispatcher->forward(array('controller' => 'login'));
                    }
                }
                $this->dispatcher->forward(array('controller' => 'signup'));
            }
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
                    $user->setType($type);
                    $user->setValidated('no');
                    $user->setVacancyCount(3);
                    $user->setSignupDate($this->getCurrentTime);

                    $location = new Location();
                    $location->setLongitude(0);
                    $location->setLatitude(0);

                    $location->save();
                    $user->setLocationId($location->getId());

                    if ($user->save()) {

                        $this->sendRegistrationMail($user);
                        if ($user->getType() == "employer") {
                            $company = new Company();
                            $company->setUserId($user->getId());
                            $company->save();
                        }


                        $this->flash->success("Your account has been created.");
                        $this->check($user->getEmail(), $password, null);
                        if ($user->getUserType() == "employer") {
                            $this->dispatcher->forward(array("controller" => "company"));

                        } else if ($user->getUserType() == "employee") {
                            $this->dispatcher->forward(array("controller" => "employee", "action" => "options"));
                        }

                    } else if ($user->save() == false) {
                        $this->flash->notice($this->lang->_('user_already_exsists'));
                        $this->dispatcher->forward(array('controller' => 'signup', 'action' => 'index'));
                    }
                } else {
                    $this->flash->notice($this->lang->_('user_already_exsists'));
                    $this->dispatcher->forward(array('controller' => 'signup', 'action' => 'start'));
                }
            }

        }
    }
