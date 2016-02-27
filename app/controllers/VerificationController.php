<?php
/**
 * Created by PhpStorm.
 * User: denzyl
 * Date: 12/10/14
 * Time: 7:29 PM
 */

class VerificationController extends ControllerBase{


    public function indexAction($cypher)
    {//wwEJ1kaFRgh+XuA2TOztrFdxSAM4gchYs2jjLyMkoOySCtMoD4QWKEXGeXUP/tYbfKfya/1xdTOTtVtUeSwmOQ==
        $key = urldecode($cypher);
        $verification = Verification::findFirstByKey($key);
        $this->view->disable();
        var_dump($cypher);
        var_dump($key);
        var_dump($verification);

        if(is_null($verification))
        {

            $this->dispatcher->forward(array("controller"=>"login"));

        }

    }
} 