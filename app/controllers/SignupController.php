<?php

class SignupController extends ControllerBase
{
    public function indexAction()
    {
        $this->view->type = $this->request->get("type","string","employee");

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
            $user = new User();
            $email = $this->request->getPost('email');
            $firstname = $this->request->getPost('firstname');
            $lastname = $this->request->getPost('lastname');
            $password = $this->request->getPost('password');
            $re_type = $this->request->getPost('re_type');
            $type = $this->request->getPost('type');
            $user->setEmail($email);
            $user->setFirstname($firstname);
            $user->setLastname($lastname);
            $user->setPassword($password);
            $user->setUsertype($type);
            $user->setValidated('no');
            $user->setVacancyCount(3);
            $user->setSignupDate($this->date);
            $user->setLoginDate($this->date);
            $location = new Location();
            $location->setLongitude(0);
            $location->setLatitude(0);
            $location->save();
            $user->setLocationId($location->getId());

            if($user->save() && $this->check($email,$password)){

                $this->flash->success($this->lang->_("your_account_has_been_created"));
                if($user->isEmployer())
                {
                    $this->response->redirect("company");
                }else{
                    $this->response->redirect("employee/options");
                }
                $this->response->redirect("/login");
            } else {
                foreach ($user->getMessages() as $message) {
                    $this->flash->error($message);
                }
                $this->dispatcher->forward(array('controller' => 'signup', 'action' => 'index', 'params' => array($user)));

            }
        }
        $this->view->trying_to_reg_user = $user;


    }


    private function sendRegistrationMail(User $user)
    {

        $verification = new Verification();
        $verification->setUserId($user->getId());
        $verification->setDate($this->date);
        $verification->setType("activation");
        $verification->setKey($this->crypt->encryptBase64($user->getEmail()));
        $verification->save();
        $this->view->start();
        $$this->view->setVar("verification_url", $this->url->get(array("for" => "verification", "key" => $verification->getKey())));
        $this->view->render('mailer', 'activation');
        $this->view->finish();
        $this->mailer->setBody($this->view->getContent());
        $this->mailer->setSubject($this->lang->_('activation_mail_subject'));
        $this->mailer->setRecipments(array($user->getEmail() => "{$user->getFirstname()} {$user->getLastname()}"));
        $this->mailer->setSender(array($this->config->smtp->email));
        $this->mailer->setType('text/html');
        $this->mailer->send();
    }
}
