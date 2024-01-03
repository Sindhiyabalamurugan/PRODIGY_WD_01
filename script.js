// Smooth scrolling for navigation menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Set visited class to the clicked menu item
  const menuItems = document.querySelectorAll("#navbar a");
  menuItems.forEach(item => {
    item.addEventListener("click", function() {
      menuItems.forEach(item => {
        item.classList.remove("visited");
      });
      this.classList.add("visited");
    });
  });
  
  // Change icon color when the page is visited
  document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.href;
    menuItems.forEach(item => {
      if (item.href === currentLocation) {
        item.classList.add("visited");
      }
    });
  });
  