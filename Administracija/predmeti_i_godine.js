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


const Dropdown = document.getElementById("drop_down");
const H4 = document.getElementById("h4");
const Table = document.getElementById("table");

Dropdown.addEventListener("change", function() {
  if (Dropdown.value === "1" || Dropdown.value === "2") {
    H4.style.display = "block";
    Table.style.display = "table";
  } else {
    H4.style.display = "none";
    Table.style.display = "none";
  }
});


function LogOut() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
}