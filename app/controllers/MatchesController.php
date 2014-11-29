<?php

class MatchesController extends ControllerBase
{


    public function indexAction()
    {


        $vacancies = Vacancy::find(array("user_id = " . $this->session->get("user-id")));
        $arrayMatches = array();
        foreach ($vacancies as $value) {
            $matches = Matches::find(array("vacancy_id = " . $value->getId()));

            foreach ($matches as $match) {

                array_push($arrayMatches, $match);
            }
        }
        $this->view->matches = $arrayMatches;
        $this->view->amount_text = (count($arrayMatches) == 1 ? " 1 Match" : count($arrayMatches) . " Matches");

    }

    public function viewAction($vacancy, $tokenKey, $tokenValue)
    {

        if ($this->security->checkToken($tokenKey, $tokenValue) == 1) {
            $matches = Matches::find(array("vacancy_id = " . $vacancy));
            $this->view->matches = $matches;
            $this->view->amount_text = (count($matches) == 1) ? "This vacancy has 1 match." : "This vacancy has " . count($matches) . " matches.";

        }
    }

    public function removeAction($match)
    {
        $match = Matches::findFirst($match);
        if ($match->delete()) {
            $this->flash->success("Match has been decline.");
            return $this->dispatcher->forward(array("action" => "index"));
        }
    }
}
