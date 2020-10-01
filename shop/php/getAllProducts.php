<?php
    // if(isset($_SESSION['email'])){
    //     header('Location:../index.php');
    // }
    // include("nav.php");
    include("db/db_config.php");
    $sql = "SELECT * FROM `products`";
    $result = mysqli_query($connect,$sql);
    
    $data = array();
       while($row=mysqli_fetch_assoc($result)){
        array_push($data,$row);
       }
    //   $data = mysqli_fetch();
     $jsond= json_encode($data);
     echo $jsond;
?>
