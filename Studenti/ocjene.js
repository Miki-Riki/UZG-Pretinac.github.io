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


const Dropdown = document.getElementById("godina");
const Tables = document.getElementById("tables");
const Main_Table = document.getElementById("main_table")

Dropdown.addEventListener("change", function() {
  if (Dropdown.value === "1") {
    Tables.style.display = "block";
    Main_Table.style.display = "none";
  } else {
    Tables.style.display = "none";
    Main_Table.style.display = "table";
  }
});

const Dropdown_2 = document.getElementById("predmeti");
const Table_2 = document.getElementById("table_2");

Dropdown_2.addEventListener("change", function() {
  if (Dropdown_2.value === "alg") {
    Table_2.style.display = "table";
  } else {
    Table_2.style.display = "none";
  }
});


function LogOut() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
}