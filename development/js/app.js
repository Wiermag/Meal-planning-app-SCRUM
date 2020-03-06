const input = document.querySelector("#userName");
const button = document.querySelector("#setUserName");
const userNameField = document.querySelector("#showName");
const removeUser = document.querySelector("#removeUserName");

userNameField.innerText = localStorage.getItem("name");

button.addEventListener("click", function () {
    if (localStorage.getItem("name") === null) {
        console.log("elo");
        localStorage.setItem("name", input.value);
        userNameField.innerText = localStorage.getItem("name")
    } else {
        userNameField.innerText = localStorage.getItem("name")
    }
});

removeUser.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("name");
    userNameField.innerText = "";
});

