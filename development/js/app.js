const input = document.querySelector("#userName");
const button = document.querySelector("#submitName");
const userNameField = document.querySelector("#showName");
const formContainer = document.querySelector(".container-userNameForm");

userNameField.innerText = localStorage.getItem("name");

button.addEventListener("click", function () {
    if (localStorage.getItem("name") === null) {
        localStorage.setItem("name", input.value);
        userNameField.innerText = localStorage.getItem("name")
    } else {
        localStorage.removeItem("name");
        localStorage.setItem("name", input.value);
        userNameField.innerText = localStorage.getItem("name")
    }
    formContainer.classList.add("form-display")
});
