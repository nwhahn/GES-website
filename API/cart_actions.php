<?php
/**
 * Created by PhpStorm.
 * User: Nathan
 * Date: 8/13/2019
 * Time: 2:58 PM
 */

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


try{
    if(!isset($_POST['request_type'])){
        throw new Exception("No Request Type");
    }

    switch($_POST['request_type']){
        case "add":
            break;
        case "remove":
            break;
        case "save":
            break;
        default:
            throw new Exception("Invalid Request Type");
            break;

    }
}
catch(Exception $e){
    echo json_encode(array(
        "success" => false,
        'message'=>$e->getMessage()
    ));
}
