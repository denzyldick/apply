<?php

class User extends \Phalcon\MVC\Model
{
    private $id;
    private $firstname;
    private $lastname;
    private $password;
    private $salt;
    private $email;
    
    public function setId($id)
    {
        if(!is_numeric($id))
        {
            return("NaN");
        }else
        {
            $this->id   = $id;
            return true;
        }
    }
    public function setEmail($email)
    {
       if(count(User::find("email =  '$email'")) == 0)
       {
           $this->email=    $email;
           return true;
       }else
       {
           return "This user already exsist";
       }
    }
    
   public function setPassword($password)
   {
       if(empty($password))
       {
           return "You must put a pasword";
       }
       $this->password = $password;
       return true;
   }
   
   public function setFirstname($firstname)
   {
       if(!empty($firstname))
       {
           $this->firstname = $firstname;
             return true;
       }
   }
   
          
   public function setLastname($lastname)
   {
       if(!empty($lastname))
       {
           $this->lastname =    $lastname;
             return true;
       }
   }
}