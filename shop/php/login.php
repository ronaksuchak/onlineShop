
<link rel="stylesheet" href="../css/login.css">
<?php
     include("nav.php");
?>
<div class="div_form_container">
        <p class="msg_login"></p>
        <form class=form_login action="#" method="POST">
            <div class="div_password">
                <label for="email">Email:</label><br />
                <input type="text" id="email_login" name="email"><br>
            </div>
            <div class="div_password">
                <label for="password">Password:</label><br />
                <input type="password" id="password_login" name="password"><br />
                <input type="submit" value="Submit" class="submit_btn">
            </div>
        </form>
        <!-- <button onclick="onLogin"> Login </button> -->
    </div>

    <?php
     if(isset($_POST['email']) && isset($_POST['password'])){
        $email = $_POST['email'];
        $password =$_POST['password'];
        if($email === 'email@email.com' && $password === 'abc'){
            header('Location:../index.php');
        }else{
            echo '<p style="color:#ff79c6;">'.$email.$password.'</p>';
        }
    }else{
        echo '<p style="color:#ff79c6;"> All fieldes are required!! 😈 </p>';
    }
    ?>
