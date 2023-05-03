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


const Dropdown = document.getElementById("select");
const ORS = document.getElementById("ORS");
const OO = document.getElementById("OO");
const IS = document.getElementById("IS");

Dropdown.addEventListener("change", function() {
  if (Dropdown.value === "1") {
    ORS.style.display = "block";
    OO.style.display = "none";
    IS.style.display = "none";
    ORS.lastElementChild.style.borderBottom = "none";
  } else if (Dropdown.value === "2") {
    ORS.style.display = "none";
    OO.style.display = "block";
    IS.style.display = "none";
    OO.lastElementChild.style.borderBottom = "none";
  } else if (Dropdown.value === "3") {
    ORS.style.display = "none";
    OO.style.display = "none";
    IS.style.display = "block";
  } else if (Dropdown.value === "") {
    ORS.style.display = "block";
    OO.style.display = "block";
    IS.style.display = "block";
  }
});


function LogOut() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
}