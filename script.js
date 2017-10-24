const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);

const box = document.querySelector('.bio');
box.addEventListener('click', function() {
  let first = 'opening';
  let second = 'open';

  if(this.classList.contains(first)) {
    [first, second] = [second, first]
  }

  this.classList.toggle(first);
  setTimeout(() => {
    this.classList.toggle(second);
  }, 500);
});
