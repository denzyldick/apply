<?php

/**
 * Created by PhpStorm.
 * User: denzyl
 * Date: 2/10/16
 * Time: 9:38 PM
 */
class PhotoController extends ControllerBase
{
    public function indexAction()
    {
        $hash = $this->request->get("6452491d49e5df385fb4d4416126200d");
        $this->response->setContentType("image/*");
        $this->response->setContent(file_get_contents(__DIR__ . "/../../files/{$hash}"));
        $this->response->send();
    }

    public function uploadAction()
    {
        $this->view->disable();

        if ($this->request->hasFiles()) {
            /** @var \Phalcon\Http\Request\File $file */
            $file = $this->request->getUploadedFiles()[0];
            $validation = new \Phalcon\Validation();

            $validation->add('file', new \Phalcon\Validation\Validator\File([
                'maxSize' => '2M',
                'messageSize' => $this->lang->_("this_file_exceeds_the_maximum"),
                'allowedTypes' => ['image/jpeg', 'image/png'],
                'messageType' => $this->lang->_("this_logo_file_type_is_not_allowed"),
                'maxResolution' => '800x600',
                'messageMaxResolution' => $this->lang->_("logo_resolution_is_too_big")
            ]));
            $messages = $validation->validate($_FILES);

            $random_name = md5($this->security->hash(openssl_random_pseudo_bytes(14))) . "." . $file->getExtension();
            if (count($validation->getMessages()) == 0) {
                if( $file->moveTo("files/{$random_name}")) {
                    $this->response->setContentType("application/json");
                    $this->response->setContent(json_encode(["name"=>$random_name]));
                    $this->response->setStatusCode(200, $this->lang->_("file_has_been_uploaded"));
                    $this->response->send();
                }else{
                    $this->response->setStatusCode(400,$file->getError());
                }
            } else {
                $message = $this->flash->error($messages[0]->getMessage());
                $this->response->setContentType("text/html");
                $this->response->setContent($message);
                $this->response->setStatusCode(400, $messages[0]->getMessage());
                $this->response->send();
            }
        }
    }

}