const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  const popup = document.querySelector('.popup-menu');
  popup.classList.toggle('visible');
});

const closePopup = document.querySelector('.popup-close');
closePopup.addEventListener('click', () => {
  const popup = document.querySelector('.popup-menu');
  popup.classList.toggle('visible');
});

const navigateToSection = document.querySelectorAll('.popup-list a');
for (let i = 0; i < navigateToSection.length; i += 1) {
  navigateToSection[i].addEventListener('click', () => {
    const popup = document.querySelector('.popup-menu');
    popup.classList.toggle('visible');
  });
}
