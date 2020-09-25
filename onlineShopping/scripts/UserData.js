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
    var d = JSON.parse(localStorage.getItem("users")); // d.users[0].name 

    console.log("Array len = " + d.users.length);
    var arr = d.users;
    var i;
    for (i = 0; i < arr.length; i++) {
        userDiv.innerHTML += arr[i].name + " " + arr[i].email + " " + arr[i].password + " " + arr[i].dob + " " + arr[i].gender;

    }

}
// {
//     users:
//     [
//         {
//             "name": "Ronak Suchak",
//             "email": "ronaksuchak16@hotmail.com",
//             "password": "1234567890",
//             "dob": "2020-09-05",
//             "gender": "male"
//         }
//     ]
// }
