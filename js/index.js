var homePage = document.querySelector(".home-page");
var loginPage = document.querySelector(".login-page");
const data = localStorage.getItem("")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

if (localStorage.getItem("data")) {
  ShowHomePage();
}

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = { email: email, password: password };
  localStorage.setItem("data", JSON.stringify(user));
  ShowHomePage();
});

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("data");
  ShowLoginPage();
});

function ShowHomePage() {
  homePage.classList.remove("hidden");
  loginPage.classList.add("hidden");
}
function ShowLoginPage() {
  homePage.classList.add("hidden");
  loginPage.classList.remove("hidden");
}
