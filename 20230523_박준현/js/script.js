document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.toggle-menu').classList.toggle('show');
  document.querySelector('nav').classList.toggle('fixed');
});

const mainMenuTitle = document.querySelectorAll('.main-menu-title');
const subMenues = document.querySelectorAll('.sub-menu');

for (let i = 0; i < mainMenuTitle.length; i++) {
  mainMenuTitle[i].addEventListener('click', () => {
    subMenues[i].classList.toggle('show');
    for (let j = 0; j < mainMenuTitle.length; j++) {
      if (i !== j) {
        subMenues[j].classList.remove('show');
      }
    }
  });
}
