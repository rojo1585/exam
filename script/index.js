$('.carousel').carousel({
    interval: 2000
  })

  const nav = document.querySelector('nav');

function watchMenu() {
  nav.style.top = `-${
    nav.clientHeight < window.scrollY ?
      nav.clientHeight : 0
  }px`;
}

window.addEventListener('scroll', watchMenu);