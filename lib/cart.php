<?php
/**
 * Created by PhpStorm.
 * User: Nathan
 * Date: 8/13/2019
 * Time: 3:36 PM
 */

class cart extends database
{
    private $items;
    private $user_id;
    private $table='userCartData';

    public function __construct($unid,$new_user=false){
        parent::__construct();
        $this->user_id=$unid;
        if($new_user){
            $this->items=json_encode (json_decode ("{}"));
            $data=array(
              'entry_number'=>$unid,
              'items'=>$this->items
            );
            $this->add_object($this->table,$data);
        }else{

            $this->items=json_decode($this->get_list($this->table,'entry_number',$unid,'items'),true);
        }


    }

    public function add_item($id,$qty,$options=null){
        try{

            $this->save();
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }
    public function remove_item($id){
        try{
            unset($this->items[$id]);
            $this->save();
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }
    public function remove_all(){
        try{
            $this->items=json_encode (json_decode ("{}"));
            $this->save();
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }
    private function save(){
        return $this->save_object($this->user_id,$this->table,$this->items);
    }
}
