let menu = document.querySelector('.menu');
menu.addEventListener('click', function() {
  let popup = document.querySelector('.popup_menu');
  popup.classList.toggle('visible');
});