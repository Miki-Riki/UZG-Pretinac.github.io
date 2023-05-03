const Menu = document.querySelector('.fa-bars');
const Links = document.querySelector('nav ul');
const Body = document.querySelector('body');

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


const Menu_2 = document.querySelector('.mob_menu');
const Predmeti = document.querySelectorAll('.side_menu a');
const Links_2 = document.querySelector('.side_menu');
const icon = document.getElementById("icon");

Menu_2.addEventListener('click', () => {
  if (Links_2.classList.contains('active')) {
    CloseNav();
    Links_2.style.animation = 'slide-left .5s forwards';
    setTimeout(() => {
      Links_2.classList.remove('active');
      Links_2.style.animation = "";
    }, 500);
  } else {
    OpenNav();
    Links_2.classList.add('active');
    Links_2.style.animation = "slide-right .5s forwards";
  }
});

function OpenNav() {
  Menu_2.style.marginLeft = "265px";
  Menu_2.style.transition = ".45s";
}

function CloseNav() {
 Menu_2.style.marginLeft = "-1em";
 Menu_2.style.transition = ".55s";
 icon.style.backgroundColor = "white";
}

icon.addEventListener("click", function() {
  if(!Links_2.classList.contains("active")) {
    icon.style.backgroundColor = "aliceblue";
  }
});

icon.addEventListener("mouseover", function() {
  if (!Links_2.classList.contains("active")) {
    icon.style.backgroundColor = "aliceblue";
  }
});

icon.addEventListener("mouseout", function() {
  if (!Links_2.classList.contains("active")) {
    icon.style.backgroundColor = "white";
  }
});


Predmeti.forEach(link => {
  link.addEventListener('click', () => {
    Links_2.classList.remove('active')
    Menu_2.style.marginLeft = "-1em";
    icon.style.backgroundColor = "white";
  });
});


$(document).ready(function () {
    $("#cont2").hide();
  });
  
  function showItem(id) {
    $('.cont').hide();
    
    contId = "cont" + id;
    
    $("#" + contId).show();
};


function LogOut() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
}