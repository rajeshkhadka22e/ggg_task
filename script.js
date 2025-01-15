
// Handle Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', (e) => {
 const menu = document.getElementById('mobile-menu');
 menu.classList.toggle('hidden');
 e.stopPropagation(); // Prevent the click event from propagating to the document
});

// Close mobile menu when clicking the close button
document.getElementById('close-menu').addEventListener('click', () => {
 const menu = document.getElementById('mobile-menu');
 menu.classList.add('hidden');
});

// Close mobile menu when clicking on an item
const menuLinks = document.querySelectorAll('#mobile-menu .nav-link');
menuLinks.forEach((link) => {
 link.addEventListener('click', () => {
   const menu = document.getElementById('mobile-menu');
   menu.classList.add('hidden');
 });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
 const menu = document.getElementById('mobile-menu');
 const menuBtn = document.getElementById('menu-btn');
 if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
   menu.classList.add('hidden');
 }
});

// Add 'active' class to the current page link
const currentPage = window.location.pathname;

const links = document.querySelectorAll('.nav-link');

// Initially set the active link based on the current page
links.forEach(link => {
 if (link.getAttribute('href') === currentPage) {
   link.classList.add('text-blue-500', 'font-bold', 'underline');
 } else {
   link.classList.remove('text-blue-500', 'font-bold', 'underline');
 }
});

// Add event listener to each link to update the active class on click
links.forEach(link => {
 link.addEventListener('click', () => {
   // Remove 'active' class from all links
   links.forEach(l => {
     l.classList.remove('text-blue-500', 'font-bold');
   });

   // Add 'active' class to the clicked link
   link.classList.add('text-blue-500', 'font-bold');
 });
});


 
