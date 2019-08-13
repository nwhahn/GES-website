<?php

$unid=$_POST['id'];
/*
let data= {
    name: 'aa',
            mfq:'legrand',
            desc:'Insert Description',
            rating:4,
            SKU:'example',
            new:false
        };

*/
$data=array(
    'name'=>$unid,
    'mfq'=>'legrand',
    'desc'=>'Insert Description',
    'rating'=>4,
    'SKU'=>'EXSKU',
    'new'=>true

);

echo json_encode($data);
