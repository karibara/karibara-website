let skills = document.getElementById('skills');
let screenWidth = document.documentElement.clientWidth || window.innerWidth;

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

// this execute code conditioned by the screen size
if (screenWidth > 480) {
  // behavior on desktop
  window.addEventListener('scroll', scrollHandler);
} else {
  // behavior on mobile
}
