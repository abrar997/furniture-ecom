document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(`email is ${email}, password is ${password}`);
});
