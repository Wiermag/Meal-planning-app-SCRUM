const input = document.querySelector("#userName");
const button = document.querySelector("#submitName");
const userNameField = document.querySelector("#showName");
const formContainer = document.querySelector(".userNameForm-container");
const desktopDisplay = document.querySelector(".desktop-display");

//USERNAME FORM

localStorage.removeItem("name");

const removebutton = document.querySelector("#remove");


userNameField.innerText = localStorage.getItem("name");

if (userNameField.innerText !== "") {
    userNameField.innerText = localStorage.getItem("name");
    formContainer.classList.add("form-display")
}

button.addEventListener("click", function (e) {
    if (localStorage.getItem("name") === null) {
        localStorage.setItem("name", input.value);
        userNameField.innerText = localStorage.getItem("name")
    } else {
        localStorage.removeItem("name");
        localStorage.setItem("name", input.value);
        userNameField.innerText = localStorage.getItem("name")
    }
    e.preventDefault();
    formContainer.classList.add("form-display")
});

removebutton.addEventListener("click", function () {
    localStorage.removeItem("name");
    userNameField.innerText = "" ;
    formContainer.classList.remove("form-display");
    desktopDisplay.classList.add("desktop-display")
});

//SWITCHING DESKTOP VIBILITY - TOGGLE USERFORM/DESKTOP

button.addEventListener("click", ()=> {
    desktopDisplay.classList.remove("desktop-display")
});