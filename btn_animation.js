//arrow button
const arrowBtn = document.querySelector('.arrow-btn');
arrowBtn.addEventListener('click', anim);
function anim(event) {
  event.preventDefault();
  arrowBtn.classList.toggle('arrow-btn_active');
}
//arrow button