const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", ()=> {
  // activate X animation
  hamburger.classList.toggle("active")
  // show menu in column below X
  navMenu.classList.toggle("active")
})

// close navbar hamburger list after pick list item
document.querySelectorAll(".nav-link").forEach((navLink)=> 
navLink.addEventListener("click", ()=>{
    // show hamburger again
  hamburger.classList.remove("active");
  // hide list menu 
  navMenu.classList.remove("active");
}))
