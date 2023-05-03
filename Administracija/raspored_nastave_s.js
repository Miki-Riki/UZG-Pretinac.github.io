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


function LogOut() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
}