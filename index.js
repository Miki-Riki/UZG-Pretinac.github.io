var username = "user";
var password = "1234";

function Login() {
  var inputUsername = document.getElementById("un").value;
  var inputPassword = document.getElementById("pw").value;

  if (inputUsername.trim() === "" || inputPassword.trim() === "") {
    var error = document.getElementById("error");
    error.innerHTML = "Molimo vas da popunite sva obavezna polja";
    error.style.display = "block";

    setTimeout(function() {
      error.style.display = "none";
      setTimeout(function() {
        error.innerHTML = "";
      }, 300);
    }, 2000);

    event.preventDefault();

    return;
  }

  if (inputUsername === username && inputPassword === password) {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "flex";

    setTimeout(function() {
    window.location.href = "Početna/home.html";
    }, 2000);
  } else {
    var error = document.getElementById("error");
    error.innerHTML = "Pogrešno korisničko ime ili lozinka";
    error.style.display = "block";
    
    setTimeout(function() {
      error.style.display = "none";
      setTimeout(function() {
        error.innerHTML = "";
      }, 300);
    }, 2000);
  }

  event.preventDefault();
}




