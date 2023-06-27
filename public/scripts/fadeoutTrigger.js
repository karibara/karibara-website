let skills = document.getElementById('skills');

// this function change opacity of element while scrolling
function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  let distanceToTop = window.scrollY + element.getBoundingClientRect().top;
  let elementHeight = element.offsetHeight;
  let scrollTop = document.documentElement.scrollTop;
  
  let opacity = 1;
  let opacityMultiplyer = 1.2;

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop)*opacityMultiplyer / elementHeight;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

// this runs everytime the user scrolls
function scrollHandler() {
  fadeOutOnScroll(skills);
}

window.addEventListener('scroll', scrollHandler);