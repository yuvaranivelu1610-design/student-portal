function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "student" && password === "1234") {

        document.getElementById("message").style.color = "green";
        window.location.href = "dashboard.html";

    } else {

        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML =
            "Invalid Username or Password";

    }
}
function showMessage(page) {

    document.getElementById("dashboardMessage").innerHTML =
        page + " page selected";

}


function logout() {

    window.location.href = "index.html";

}