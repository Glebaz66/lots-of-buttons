const menuBtn = document.querySelector('.arrow-btn');

function anim(event) {
  event.preventDefault();
  menuBtn.classList.toggle('arrow-btn_active');
}
menuBtn.addEventListener('click', anim);