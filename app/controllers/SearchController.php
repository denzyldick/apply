<?php

use Phalcon\DI;
use Phalcon\Mvc\View;

class SearchController extends ControllerBase
{
    public function indexAction()
    {
        $query = $this->request->get("query", "string", "null");

        $elasticsearch = DI::getDefault()->get("elasticsearch");

        try {
            if (is_null($this->user) == false) {

                if ($this->user->isEmployer()) {
                    $this->searchEmployer($elasticsearch, $query);
                } else {

                    $this->searchEmployee($elasticsearch, $query);

                }


            } else {
                $this->searchEmployee($elasticsearch, $query);

            }
        }catch(\Exception $e)
        {

        }

    }


    /**
     * @param $elasticsearch
     * @param $query
     */
    private function searchEmployer($elasticsearch, $query)
    {
        $response = $elasticsearch->search($params = [
            'type'=>'education,work_experience,location,specification',
            'body' => [
                'query' => [
                    'match' => [
                        "_all" => $query
                    ]
                ]
            ]
        ]);
        $results = [];
        foreach ($response["hits"]["hits"] as $result) {
            $id = ($result["_type"] == "location" ? $result["_source"]["location_id"] : $result["_source"]["user_id"]);
            if (is_null($id) == false) {
                $results[] = [
                    "type" => $result["_type"],
                    "id" => $id,
                    "score" => $result["_score"]
                ];
            }
        }
        $users = [];
        foreach ($results as $result) {
            if ($result["type"] == "location") {
                $users[] = User::findFirst(["location_id= :location_id:", "bind" => ["location_id" => $result["id"]]]);
            } else {
                $users[] = User::findFirst(["id= :user_id: ", "bind" => ["user_id" => $result["id"]]]);
            }
        }

        $this->view->users = $users;
        $this->view->setRenderLevel(View::LEVEL_ACTION_VIEW);
    }

    /**
     * @param $elasticsearch
     * @param $query
     */
    private function searchEmployee($elasticsearch, $query)
    {

        $response = $elasticsearch->search($params = [
            'type' => 'company,vacancy,vacancy_skill,location',
            'body' => [

                'query' => [
                    'match' => [
                        "_all" => $query
                    ]
                ]
            ]

        ]);

        $results = [];
        foreach ($response["hits"]["hits"] as $result) {

            switch($result["_type"])
            {
                case "company":
//                    $results[] = Company::findFirst(["id = :id:", "bind" => ["id" => $result["_source"]["company_id"]]]);
                    break;
                case "vacancy":
                    $vacancy = Vacancy::findFirst(["id = :id:","bind"=>["id"=>$result["_source"]["vacancy_id"]]]);
                        if($vacancy)
                        {
                            $results[] = $vacancy;
                        }
                    break;
                case "vacancy_skill":
                    var_dump($result);
                    /** @var Skills $skill */
                    $skill = Specification::findFirst(["vacancy_id = :vacancy_id: ","bind"=>["vacancy_id"=>$result["_source"]["vacancy_id"]]]);

                    $vacancy =  $skill->vacancy;
                    if($vacancy)
                    {
                        $results[] = $vacancy;
                    }
                    break;
                case "location":
                    $vacancy = Vacancy::findFirst(["location_id = :location_id: ","bind"=>["location_id"=>$result["_source"]["location_id"]]]);

                    if($vacancy)
                    {
                        $results[] = $vacancy;
                    }
                break;
            }

        }

        $this->view->vacancies = $results;
        $this->view->pick("search/vacancy");
        $this->view->setRenderLevel(View::LEVEL_ACTION_VIEW);
    }
}