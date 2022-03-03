// ABOUT TEXT DROPDOWN //
const dwButton = document.getElementById("dw-button")
const homeButton = document.getElementById("home")
const aboutButton = document.getElementById("about")
const aboutTextDropdown = document.getElementById("about-text")

const contactButton = document.getElementById("contact")
const contactButtonDesktop = document.getElementById("contact-desktop")
const contactDropdown = document.getElementById("contact-form")
const navBar = document.getElementById("navbar")

function selected () {
  dwButton.classList.toggle("selected");
  aboutButton.classList.toggle("selected");
}

function showDropdown () {
  aboutTextDropdown.classList.toggle("about-text-dropdown");
  dwButton.classList.toggle("dw-button-dropdown");
  contactDropdown.classList.remove("contact-form-dropdown");
  navBar.classList.remove("navbar-dropdown");
  contactButton.classList.remove("selected");
}

function goHome () {
  aboutTextDropdown.classList.remove("about-text-dropdown");
  dwButton.classList.remove("selected");
  aboutButton.classList.remove("selected");
  reelLeftButton.classList.remove("carat-popup");
  reelRightButton.classList.remove("carat-popup");
  contactDropdown.classList.remove("contact-form-dropdown");
  contactButton.classList.remove("selected");
  reelNav.classList.remove("selected");
  
  
}

dwButton.addEventListener("click", selected);
dwButton.addEventListener("click", showDropdown);
aboutButton.addEventListener("click", selected);
aboutButton.addEventListener("click", showDropdown);
homeButton.addEventListener("click", goHome);

// CONTACT FORM DROPDOWN //


function selected2 () {
  contactButton.classList.toggle("selected");
}

function showContactDropdown () {
  contactDropdown.classList.toggle("contact-form-dropdown");
  navBar.classList.toggle("navbar-dropdown");
  aboutTextDropdown.classList.remove("about-text-dropdown");
  dwButton.classList.remove("selected");
  aboutButton.classList.remove("selected");
}

contactButton.addEventListener("click", selected2);
contactButton.addEventListener("click", showContactDropdown);

// REEL NAVIGATION //
const reelNav = document.getElementById("reel")
const reelLeftButton = document.getElementById("left-carat")
const reelRightButton = document.getElementById("right-carat")

function selected3 () {
  reelNav.classList.toggle("selected");
}
function showReelButtons () {
  reelLeftButton.classList.toggle("carat-popup");
  reelRightButton.classList.toggle("carat-popup");
}

reelNav.addEventListener("click", selected3);
reelNav.addEventListener("click", showReelButtons);

// CLICK OUTSIDE TO RETURN //
// window.onclick = function(event) {
//   if  (!event.target.classList.contains("deanwallflower") &&
//     aboutTextDropdown.classList.contains("about-text-dropdown")
//   ) {
//     aboutTextDropdown.classList.remove("about-text-dropdown");
//   }
// }