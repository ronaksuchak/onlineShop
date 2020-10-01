<?php
    $db_username = "root";
    $db_password = "";
    $db_server="localhost";
    $db_name = "shop";


    $connect = mysqli_connect($db_server,$db_username,$db_password,$db_name);
    if($connect == false){
        die("Error:Connection failed".mysqli_connect_error($connect));  
    }
//    echo "Connection successful";
?>

