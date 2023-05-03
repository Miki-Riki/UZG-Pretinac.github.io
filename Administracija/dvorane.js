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


document.getElementById("gradovi").addEventListener("change", filterTable);

function filterTable() {
  var selectedGrad = document.getElementById("gradovi").value;
  var rows = document.getElementById("Data").getElementsByTagName("tr");
  
  for (var i = 1; i < rows.length; i++) {
    var grad = rows[i].getElementsByTagName("td")[2];
    if (selectedGrad == "" || grad.innerHTML == selectedGrad) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}


function LogOut() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
}



