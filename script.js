let menu = document.querySelector('.menu');
menu.addEventListener('click', function() {
  let popup = document.querySelector('.popup-menu');
  popup.classList.toggle('visible');
});

let close_popup = document.querySelector('.popup-close');
close_popup.addEventListener('click', function() {
  let popup = document.querySelector('.popup-menu');
  popup.classList.toggle('visible');
});