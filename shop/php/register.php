<link rel="stylesheet" href="../css/register.css">
<?php
     include("nav.php");

     
?>

<div class="div_form_container">
        <p class="msg" id="msg"></p>
        <form class=form_register onsubmit="return setUserData()">
            <div class="input_form_div">
                <label for="name">Name</label><br />
                <input type="text" id="name" class="textInput"><br />
            </div>
            <div class="input_form_div">
                <label for="email">Email:</label><br />
                <input type="text" id="email" name="email" class="textInput"><br>
            </div>
            <div class="input_form_div">
                <label for="password">Password:</label><br />
                <input type="password" id="password" class="textInput"><br />
            </div>
            <div class="input_form_div">
                <label for="dob">Birthday:</label><br />
                <input type="date" id="dob" class="dateInput"><br />
            </div>


            <div class="input_form_div">
                <label for="gender_div" class="gender_label ">Gender:</label><br />
                <input type="radio" name="gender" id="male" value="male">
                <label for="male" class="gender_label">Male</label>
                <input type="radio" name="gender" id="female" value="female">
                <label for="female" class="gender_label">Female</label><br />
            </div>

            <div class="input_form_div">
                <label for="file_type">Select File</label><br />
                <input type="file" name="input-file" id="input-file" value="choose file "><br />
                <input type="submit" value="Submit" class="submit_btn">
            </div>
        </form>
    </div>


