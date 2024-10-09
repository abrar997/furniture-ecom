var loginForm = document.getElementById("login-form");

//check if user login or not and run page depending on that
if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  if (!localStorage.getItem("data")) {
    window.location.href = "/login.html";
  } else {
    document.getElementById("logout-link").classList.remove("hidden");
  }
}
//for login page to login user with email and password
if (window.location.pathname === "/login.html") {
  if (localStorage.getItem("data")) {
    //if login change elements of login page
    document.getElementById("login-title").innerHTML =
      "<h1 class='text-4xl font-bold text-main'>You are already login </h1>";
    //if login hide form
    loginForm.style.display = "none";
    setTimeout(() => {
      window.location.href = "/index.html"; // if login return to home page after 1.5s
    }, 1500);
  } else {
    // if not login add user and got to home page
    loginForm.addEventListener("submit", function (e) {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      e.preventDefault();
      const user = {
        email,
        password,
      };
      localStorage.setItem("data", JSON.stringify(user));
      loginForm.reset(); //reset form inputs
      window.location.href = "/index.html";
    });
  }
}

//logout
if (window.location.pathname === "/logout.html") {
  document.getElementById("logout-btn").addEventListener("click", function () {
    if (localStorage.getItem("data")) {
      localStorage.removeItem("data");
      window.location.href = "/login.html";
    } else {
      window.location.href = "/login.html";
    }
  });
}
