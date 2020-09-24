var users = [];
function setUserData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var gender = "";

    var radioButtons = document.getElementsByName("gender");

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            gender = radioButtons[i].value;
        }
    }

    if (validateData(email, password)) {
        users.push({ name, email, password, dob, gender });
        var u = { users };
        localStorage.setItem("users", JSON.stringify(u));
        return true;
    } else {
        return false;
    }


}

function validateData(email, password) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("in validation" + (re.test(String(email).toLowerCase()) && (String(password).length > 7)));
    return (re.test(String(email).toLowerCase()) && (String(password).length > 7));
}

function getUsersFromStorage() {
    var userDiv = document.getElementById("user-data");
    var d = JSON.parse(localStorage.getItem("users"));
    console.log(typeof (d));
    console.log(d);
    console.log(d.users);
    console.log(typeof (d.users));
    console.log(d.users.email);

    // userDiv.innerHTML = ;
}