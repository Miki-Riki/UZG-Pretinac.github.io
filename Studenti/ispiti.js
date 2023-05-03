const Menu = document.querySelector('.fa-bars');
const Links = document.querySelector('nav ul');


Menu.addEventListener('click', () => {
  Menu.classList.toggle('fa-times');
  if (Links.classList.contains('active')) {
    Links.style.animation = 'slide-up .65s forwards';
    setTimeout(() => {
      Links.classList.remove('active');
      Links.style.animation = '';
    }, 650);
  } else {
    Links.classList.add('active');
    Links.style.animation = 'slide-down .65s forwards';
  }
});

function Show() {
  var x = document.getElementById("hidden");
    x.style.display = "block";
}
  
function showPopup() {
  document.getElementById("h1_odjava").style.display = "block";
  document.getElementById("odjava").style.display = "block";
  document.getElementById("hidden").style.display = "none";
  document.getElementById("h1_prijava").style.display = "none";
  document.getElementById("cont_1").style.display = "none";
}

function Hide() {
  document.getElementById("odjava").style.display = "none";
  document.getElementById("h1_odjava").style.display = "none";
  document.getElementById("h1_prijava").style.display = "block";
  document.getElementById("cont_1").style.display = "block";
}


function Open() {
  var x = document.getElementById("table");
  if (x.style.display === "table") {
    x.style.display = "none";
  } else {
    x.style.display = "table";
  }
}


function LogOut() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
}