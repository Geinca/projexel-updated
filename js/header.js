// Toggle mobile menu
    function toggleMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenu.classList.toggle('active');
      
      // Toggle hamburger animation
      const hamburger = document.querySelector('.hamburger');
      hamburger.classList.toggle('active');
    }
    
    // Toggle dropdown in mobile menu
    function toggleDropdown(element) {
      const dropdownContent = element.nextElementSibling;
      dropdownContent.classList.toggle('active');
      
      // Rotate chevron icon
      const chevron = element.querySelector('i');
      if (dropdownContent.classList.contains('active')) {
        chevron.style.transform = 'rotate(180deg)';
      } else {
        chevron.style.transform = 'rotate(0deg)';
      }
    }
    
    // Placeholder function for section display
    function showSection(sectionId) {
      console.log('Showing section:', sectionId);
      // Add your actual section display logic here
      toggleMobileMenu(); // Close mobile menu after selection
    }