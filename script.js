{% comment %} JavaScript for Form Toggles for login  {% endcomment %}
function showForm(formId) {
    // Hide all forms
    document.querySelectorAll('#forms > div').forEach((form) => {
      form.classList.add('hidden');
    });
  
    // Show the selected form
    document.getElementById(formId).classList.remove('hidden');
  }
  


{% comment %} for navbar {% endcomment %}
    // JavaScript to handle active state
    document.addEventListener('DOMContentLoaded', () => {
      const navLinks = document.querySelectorAll('.nav-link');
      
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          // Remove 'active' class from all links
          navLinks.forEach(nav => nav.classList.remove('active'));
          
          // Add 'active' class to the clicked link
          e.target.classList.add('active');
        });
      });
    });