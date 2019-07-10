<?php
/**
 * Created by PhpStorm.
 * User: Nathan
 * Date: 7/10/2019
 * Time: 4:13 PM
 */

class item extends database
{
    private $unid;
    private $item_fields;
    private $allowed_fields=['name'=>'','mfq'=>''];

    public function __construct($unid=null)
    {
        parent::__construct();
        if($unid==null){
            return $this->create_item();
        }
        else{
            $item_fields=$this->get_list('items','unid',$unid)->fetch();
            if(isset($item_fields)){
                $this->unid=$unid;
                return $this; //exists!
            }
            else{
                return -1; //invalid unid
            }

        }
    }
    private function create_item(){
        return null;
    }
    public function get_cost(){
        return $this->item_fields['level'];
    }
    public function get_attribute($key){
        if(array_key_exists($key, $this->allowed_fields)){
            return $this->item_fields[$key];
        }
    }

}