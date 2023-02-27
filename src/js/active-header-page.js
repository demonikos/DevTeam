var currentUrl = window.location.href;
var navLinks = document.getElementsByTagName('a');

for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href == currentUrl) {
    navLinks[i].classList.add('active');
  }
}
