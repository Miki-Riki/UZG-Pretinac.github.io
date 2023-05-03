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


document.getElementById("semestar").addEventListener("change", filterTable);

function filterTable() {
  var selectedSem = document.getElementById("semestar").value;
  var rows = document.getElementById("Data").getElementsByTagName("tr");
  
  for (var i = 1; i < rows.length; i++) {
    var sem = rows[i].getElementsByTagName("td")[8];
    if (selectedSem == "" || sem.innerHTML == selectedSem) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}


const Dropdown = document.getElementById("godine");
const Dropdown_2 = document.getElementById("semestar");
const Main = document.getElementById("main");
const Selected = document.getElementById("show");
const Selected_2 = document.getElementById("show2");
const Table = document.getElementById("Data");


Dropdown.addEventListener("change", function() {
  if (Dropdown.value >= "1" || Dropdown.value <= "5") {
    Selected.style.display = "block";
    Selected_2.style.display = "block";
  } else {
    Selected.style.display = "none";
    Selected_2.style.display = "none";
  }

  if (Dropdown.value ==="") {
    for (var i = 1; i < Table.rows.length; i++) {
      Table.rows[i].style.display = "";
    }
    Main.style.display = "block";
    Dropdown_2.value = "";
  }
});


Dropdown.addEventListener("click", function() {
  if (Dropdown.value === "") {
    for (var i = 1; i < Table.rows.length; i++) {
      Table.rows[i].style.display = "";
    }
    Selected.style.display = "none";
    Selected_2.style.display = "none";
    Main.style.display = "block";
    Dropdown_2.value = "";
  }
});


function LogOut() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
}