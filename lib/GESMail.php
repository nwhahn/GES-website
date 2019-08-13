<?php
/**
 * Created by PhpStorm.
 * User: Nathan
 * Date: 8/13/2019
 * Time: 12:38 PM
 */

class GESMail
{
    private $to='nathanh@generationelectricalsupply.com';
    private $message;
    private $subject;

    public function __construct($subject,$text,$to=null){


        if($to!=null){
            $this->to=$to;
        }
        $this->subject=$subject;
        $this->message=$text;

        //throw new Exception("Testing if this errors");
    }
    public function Send(){
        return mail($this->to,$this->subject,$this->message);

    }


}