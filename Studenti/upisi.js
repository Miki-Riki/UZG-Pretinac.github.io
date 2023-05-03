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


function Count() {
    var total = 0;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var ectsTotalInput = document.querySelector('#ects-total input[type="text"]');
  
    for (var i = 0; i < checkboxes.length; i++) {
      total += parseInt(checkboxes[i].parentNode.previousElementSibling.textContent.trim());
    }
  
    if (checkboxes.length > 0) {
      ectsTotalInput.value = total;
    } else {
      ectsTotalInput.value = 0;
    }
  }
  
  
  window.addEventListener('load', function() {
    Count();
  });
  

  let form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Zahtjev za upis je uspješno podnesen!");
  });


  function LogOut() {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "flex";
  }