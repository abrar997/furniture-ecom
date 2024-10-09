var loginForm = document.getElementById("login-form");

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

if (window.location.pathname === "/login.html") {
  if (localStorage.getItem("data")) {
    document.getElementById("login-title").innerHTML =
      "<h1 class='text-4xl font-bold text-main'>You are already login </h1>";
    document.getElementById("login-btn").style.background = "gray";
    document.getElementById("login-btn").style.cursor = "not-allowed";
    loginForm.style.display = "none";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    loginForm.addEventListener("submit", function (e) {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      e.preventDefault();
      const user = {
        email,
        password,
      };
      localStorage.setItem("data", JSON.stringify(user));
      loginForm.reset();
      window.location.href = "index.html";
    });
  }
}

if (window.location.pathname === "/logout.html") {
  document.getElementById("logout-btn").addEventListener("click", function () {
    if (localStorage.getItem("data")) {
      localStorage.removeItem("data");
      window.location.href = "login.html";
    } else {
      window.location.href = "login.html";
    }
  });
}
