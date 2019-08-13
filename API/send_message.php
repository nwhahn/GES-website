<?php
include_once '../lib/GESMail.php';

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$subject=$_POST['subject'];
$text=$_POST['text'];



try {
    $client = new GESMail($subject,$text);
    $client->Send();

    echo json_encode(array(
        "sent" => true
    ));
}
catch(Exception $e){
    echo json_encode(array(
        "sent" => false,
        'message'=>$e->getMessage()
    ));
}

