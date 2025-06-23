// Validation of the login form
function check_credentials() {
    let username = document.forms["login-form"]["user-name"].value;
    let password = document.forms["login-form"]["password-input"].value;

    if (username == "" || password == "") {
        alert("Please fill username and password");
    }
    else {
        if (username.toLowerCase() == "space balls") {
            if (password.toLowerCase() == "1234"){
                alert("1234... amazing! That is the same password as my briefcase");
            }
            else {
                alert("password incorrect");
            }
        }
        else {
                alert("username incorrect");
            }
    }
}