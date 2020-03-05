const input = document.querySelector("#userName");
const button = document.querySelector("#setUserName");
const userNameField = document.querySelector("#showName");


button.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("name", input.value);
    userNameField.innerText = localStorage.getItem("name")
});

