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
const Dropdown_2 = document.getElementById("sel2");
const ShowOption = document.getElementById("show");
const Value = document.getElementById("smjer");
const Table = document.getElementById("table");

Dropdown.addEventListener("change", function() {
  if (Dropdown.value === "1" || Dropdown.value === "2") {
    Value.style.display = "block";
  } else {
    Table.style.display = "none";
  }
});

Dropdown_2.addEventListener("change", function() {
    if (Dropdown_2.value === "1") {
        Table.style.display = "table";
    } else {
        Table.style.display = "none";
    }
}); 


Dropdown.addEventListener("click", function() {
  if (Dropdown.value === "") {
    ShowOption.style.display = "block";
    Dropdown_2.value = "";
    ShowOption.style.display = "block";
  }
});

Dropdown.addEventListener("click" ,function() {
  if (Dropdown.value === "") {
    Value.style.display = "none";
  }
})


function LogOut() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
}