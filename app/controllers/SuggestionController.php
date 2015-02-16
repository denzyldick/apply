<?php

class SuggestionController extends ControllerBase
{

    public function vacanciesAction($suggestion)
    {
        $this->view->suggestions = $suggestion;
    }

    public function profileAction($user_id, $suggestion_id)
    {
        $this->view->user = User::findFirst($user_id);
        $this->view->suggestion = Matches::findFirst($suggestion_id);

    }

    public function vacancyAction($vacancy_id, $suggestion_id)
    {
        $this->view->vacancy = Vacancy::findFirst($vacancy_id);
        $this->view->suggestion = Matches::findFirst($suggestion_id);
    }

    public function indexAction()
    {

        if ($this->user->getUserType() == "employer") {
            $this->getEmployersuggestion();
        } elseif ($this->user->getUserType() == "employee") {
            $this->dispatcher->forward(array("controller" => "suggestion", "action" => "vacancies", "params" => array($this->getEmployeesuggestion())));
        }

    }

    public function getEmployersuggestion()
    {

        $phql = "SELECT  Matches.* FROM Matches join Vacancy on Vacancy.id = Matches.vacancy_id WHERE Vacancy.user_id = :user_id: AND Matches.employer_accepted ='no'  AND softdeleted='no' GROUP BY Matches.id ";
        $suggestions = $this->modelsManager->executeQuery($phql, array('user_id' => $this->user->getId()));

        $this->view->suggestions = $suggestions;

    }

    public function getEmployeesuggestion()
    {
        return $this->modelsManager->executeQuery("SELECT * FROM Matches WHERE user_id = :user_id: AND  Matches.employee_accepted = 'no'  AND softdeleted='no' ORDER BY percent DESC",
            array('user_id' => $this->user->getId())
        );
    }

    public function viewAction($vacancy, $tokenKey, $tokenValue)
    {

        if ($this->security->checkToken($tokenKey, $tokenValue) == 1) {
            $suggestions = Matches::find(array("vacancy_id ={$vacancy} AND employer_accepted ='no' AND softdeleted='no' "));
            $this->view->suggestions = $suggestions;
            $this->view->vacancy = Vacancy::findFirst($vacancy);
            $this->view->amount_text = (count($suggestions) == 1) ? "This vacancy has 1 match." : "This vacancy has " . count($suggestions) . " matches.";

        }
    }

    public function removeAction($match)
    {
        if ($this->user->getUserType() == 'employee') {
            $this->removeEmployeeSuggestion($match);
        } else if ($this->user->getUserType() == 'employer') {
            $this->removeEmployerSuggestion($match);
        }

    }

    private function removeEmployeeSuggestion($match)
    {
        $match = Matches::findFirst(
            array("id = {$match} AND user_id = {$this->user->getId()} "));
        if ($match->delete()) {
            $this->flash->success($this->lang->_('suggestion_decline'));
            $this->dispatcher->forward(array('controller' => 'suggestion', "action" => "index"));
        }
    }

    private function removeEmployerSuggestion($match)
    {
        $match = Matches::findFirst(
            array("id = {$match}")
        );
        $vacancy = Vacancy::findFirst("id = {$match->getVacancyId()}");
        if ($vacancy->getUserId() == $this->user->getId()) {
            $match->delete();
            $this->flash->success($this->lang->_('suggestion_decline'));

            $this->dispatcher->forward(array('controller' => 'suggestion', "action" => "index"));
        }

    }

    public function declineAction($match)
    {
        $match = Matches::findFirst($match);
        $match->setSoftdeleted('yes');
        if ($match->save() == true) {

            $this->dispatcher->forward(array("controller" => "index"));
        }
    }

    public function acceptAction($match)
    {
        $match = Matches::findFirst($match);
        $vacancy_owner = $match->Vacancy->User->getId();
        $notification = new Notification();
        $notification->setViewed('no');
        $notification->setDate($this->date);
        if ($this->user->getUserType() == 'employer') {
            $notification->setMessageKey('interested_in_you');
           $match->setEmployerAccepted('yes');
            $notification->setReceiver($match->getUserId());
            $notification->setSender($this->user->getId());
        } else if ($this->user->getUserType() == 'employee') {
            $match->setEmployeeAccepted('yes');
            $notification->setMessageKey('new_nudge');
            $notification->setSender($this->user->getId());
            $notification->setReceiver($vacancy_owner);
        }
        $match->save();
        $notification->setMatches($match->getId());
        $notification->save();
        $this->flash->success($this->lang->_("the_user_will_be_notified"));
        $this->dispatcher->forward(
            array(
                "action" => "profile",
                "params" => array($match->getUserId(), $match->getId()
                )
            )
        );
    }
}
