// ABOUT TEXT DROPDOWN //
const dwButton = document.getElementById("dw-button")
const aboutTextDropdown = document.getElementById("about-text")
const homeButton = document.getElementById("home")
const aboutButton = document.getElementById("about")

const contactButton = document.getElementById("contact")
const contactButtonDesktop = document.getElementById("contact-desktop")
const contactDropdown = document.getElementById("contact-form")
const navBar = document.getElementById("navbar")

function turnRed () {
  dwButton.classList.toggle("turn-red");
  aboutButton.classList.toggle("turn-red");
}

function showDropdown () {
  aboutTextDropdown.classList.toggle("about-text-dropdown");
  contactDropdown.classList.remove("contact-form-dropdown");
  navBar.classList.remove("navbar-dropdown");
  contactButton.classList.remove("turn-red");
}

function goHome () {
  aboutTextDropdown.classList.remove("about-text-dropdown");
  dwButton.classList.remove("turn-red");
  aboutButton.classList.remove("turn-red");
  reelLeftButton.classList.remove("carat-popup");
  reelRightButton.classList.remove("carat-popup");
  contactDropdown.classList.remove("contact-form-dropdown");
  contactButton.classList.remove("turn-red");
  reelNav.classList.remove("turn-red");
  
  
}

dwButton.addEventListener("click", turnRed);
dwButton.addEventListener("click", showDropdown);
aboutButton.addEventListener("click", turnRed);
aboutButton.addEventListener("click", showDropdown);
homeButton.addEventListener("click", goHome);

// CONTACT FORM DROPDOWN //


function turnRed2 () {
  contactButton.classList.toggle("turn-red");
}

function showContactDropdown () {
  contactDropdown.classList.toggle("contact-form-dropdown");
  navBar.classList.toggle("navbar-dropdown");
  aboutTextDropdown.classList.remove("about-text-dropdown");
  dwButton.classList.remove("turn-red");
  aboutButton.classList.remove("turn-red");
}

contactButton.addEventListener("click", turnRed2);
contactButton.addEventListener("click", showContactDropdown);

// REEL NAVIGATION //
const reelNav = document.getElementById("reel")
const reelLeftButton = document.getElementById("left-carat")
const reelRightButton = document.getElementById("right-carat")

function turnRed3 () {
  reelNav.classList.toggle("turn-red");
}
function showReelButtons () {
  reelLeftButton.classList.toggle("carat-popup");
  reelRightButton.classList.toggle("carat-popup");
}

reelNav.addEventListener("click", turnRed3);
reelNav.addEventListener("click", showReelButtons);

// CLICK OUTSIDE TO RETURN //
// window.onclick = function(event) {
//   if  (!event.target.classList.contains("deanwallflower") &&
//     aboutTextDropdown.classList.contains("about-text-dropdown")
//   ) {
//     aboutTextDropdown.classList.remove("about-text-dropdown");
//   }
// }