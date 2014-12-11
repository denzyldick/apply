<?php

use Phalcon\Acl;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\User\Plugin;

/**
 * Matching plugin
 * @author Denzyl<denzyl@live.nl>
 * @version 0.1
 * @todo add geolocation support and a more indept specification support
 */
class Matcher extends Plugin
{
    /**
     * Logged in user object
     * @var User
     */
    private $user;
    /**
     * Dependency injector
     * @var FactoryDefault
     */
    private $di;

    /**
     * Set the Dependency Injector
     * @param  FactoryDefa $dependencyInjector Dependency Injector
     * @return void
     */
    public function __contruct($dependencyInjector)
    {
        $this->di = $dependencyInjector;
        $this->setDi($dependencyInjector);
    }

    /**
     * Generate matches for the users(employer & employee)
     * @param User
     * @return void
     */
    public function generateMatches($user)
    {
        $this->user = $user;
        if ($user->getUsertype() == "employee") {
            $this->generateJobMatches();

        } elseif ($user->getUsertype() == "employer") {
            $this->generateApliantsMatches();
        }
    }

    private function generateJobMatches()
    {

        $user_skills = [];

        foreach ($this->user->specification as $specification) {
            $user_skills[] = $specification->skills->getName();
        }
        $skills = "'" . implode("','", array_unique($user_skills)) . "'";

        $phql = "SELECT
                      Vacancy.id,


                (6371 * 2 * ASIN(SQRT( POWER(SIN((seeker_location.latitude -
                ABS(
                vacancy_location.latitude)) * pi()/180 / 2),2) + COS(seeker_location.latitude * pi()/180 ) * COS(
                ABS
                (vacancy_location.latitude) *  pi()/180) * POWER(SIN((seeker_location.longitude - vacancy_location.longitude) *  pi()/180 / 2), 2) )))

                as distance
                FROM
                      Vacancy
                JOIN Specification
                      ON Vacancy.id = Specification.vacancy_id
                JOIN Skills
                      ON Skills.id = Specification.skills_id
                JOIN User
                      AS seeker
                      ON seeker.id = :seeker_id:
                JOIN Location
                      AS seeker_location
                      ON seeker.location_id = seeker_location.id
                JOIN Location
                      AS vacancy_location
                      ON vacancy_location.id = Vacancy.location_id


                GROUP BY
                    Vacancy.id
                HAVING
                      distance < :travel_distance:
                ORDER By
                    Specification.percent DESC

                    ";
        // 6371 = KM
        // 3959 = MILES
        //( 6371 * acos( cos( radians(vacancy_location.latitude) ) * cos( radians( seeker_location.latitude ) ) * cos( radians( seeker_location.longitude ) - radians(vacancy_location.longitude) ) + sin( radians(vacancy_location.latitude) ) * sin( radians( seeker_location.latitude ) ) ) ) AS distance

        $vacancies = $this->modelsManager->executeQuery($phql,
            array(
                'seeker_id' => $this->user->getId(),
                'travel_distance' => $this->user->location->getTravelDistance()
            ));

        foreach ($vacancies as $value) {

            $vacancy = Vacancy::findFirst($value->id);
            $this->saveMatch($this->user, $vacancy);

        }
    }

    private function saveMatch(User $user, Vacancy $vacancy)
    {
        $calculator = $this->calculator;
        $calculator->setVacancy($vacancy);
        $calculator->setUser($user);
        $match = new Matches();
        $match->setUserId($user->getId());
        $match->setVacancyId($vacancy->getId());
        $match->setPercent($calculator->getPercent());
        $match->setEmployeeAccepted('no');
        $match->setEmployerAccepted('no');
        $match->setViewed('no');
        $match->setSoftdeleted('no');
        if (count(Matches::find(
                array(" user_id = {$user->getId()} AND vacancy_id = {$vacancy->getId()}"))) == 0 && $calculator->getPercent() > 0
        ) {

            $match->save();
        }
    }

    /**
     * Generate matches for the emloyees
     * @param
     * @return void
     */
    private function generateApliantsMatches()
    {
        $vacancies = Vacancy::find(array("user_id = {$this->user->getId()}"));

        foreach ($vacancies as $vacancy) {

            $phql = 'SELECT
                                   User.id
                            FROM
                                   User
                            JOIN
                                    Location
                            ON      User.location_id = Location.id
                            WHERE
                                  Location.travel_distance >(6371 * 2 * ASIN(SQRT( POWER(SIN((Location.latitude -
                                   ABS(
                                   :latitude:)) * pi()/180 / 2),2) + COS(Location.latitude * pi()/180 ) * COS(
                                   ABS
                                   (:latitude:) *  pi()/180) * POWER(SIN((Location.longitude - :longitude:) *  pi()/180 / 2), 2) )))';

            $cachekey = (md5($this->user->getId() . $phql));

            //            $users = $this->cache->save($cachekey);
            //          if($users == null)
            //        {
            $users = $this->modelsManager->executeQuery($phql,
                array(
                    'latitude' => $vacancy->location->getLatitude(),
                    'longitude' => $vacancy->location->getLongitude()
                )
            );

            //      }

            foreach ($users as $id) {
                $user = User::findFirst($id[id]);
                $this->saveMatch($user, $vacancy);
            }

        }
    }

//    private function getVacancyMatches()
//    {
//        $phql = "SELECT *
//                FROM Vacancy
//                JOIN Specification
//                JOIN Skills
//
//                WHERE Skills.name in (SELECT Skills.name FROM Skills
//                   JOIN Specification
//                   JOIN User ON User.id = Specification.skills_id)
//                ";
//        $result = $this->modelsManager($phql, array(
//            "id" => $vacancy->id
//        ));
//
//    }

}
