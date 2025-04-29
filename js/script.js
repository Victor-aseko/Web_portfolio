
// const textArray = ["Web Designer", "Web Developer", "Photographer", "Freelancer"];
// const typedTextSpan = document.getElementById("typed-text");
// const cursorSpan = document.querySelector(".cursor");

// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//     if (charIndex < textArray[textArrayIndex].length) {
//         typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, 150);
//     } else {
//         setTimeout(erase, 1000);
//     }
// }

// function erase() {
//     if (charIndex > 0) {
//         typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, 100);
//     } else {
//         textArrayIndex++;
//         if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//         setTimeout(type, 250);
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     if (textArray.length) setTimeout(type, 1000);
// });

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu button and mobile nav container
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    // Toggle mobile menu when the button is clicked
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      
      // Change the menu icon between hamburger and X
      const menuIcon = this.querySelector('svg');
      if (mobileNav.classList.contains('active')) {
        menuIcon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
      } else {
        menuIcon.innerHTML = `
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
      }
    });
    
    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if it's open
        if (mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
          mobileMenuBtn.querySelector('svg').innerHTML = `
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          `;
        }
        
        // Smooth scroll to the target section
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
    
    // Add animation to stats when scrolled into view
    const statsSection = document.querySelector('.stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateStats() {
      if (statsSection.getBoundingClientRect().top < window.innerHeight * 0.75 && !animated) {
        statNumbers.forEach(statNumber => {
          const target = parseInt(statNumber.textContent);
          let count = 0;
          const duration = 2000; // 2 seconds
          const interval = Math.floor(duration / target);
          
          const counter = setInterval(() => {
            count += 1;
            statNumber.textContent = count;
            
            if (count >= target) {
              clearInterval(counter);
            }
          }, interval);
        });
        animated = true;
      }
    }
    
    // Check on scroll and on page load
    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on page load
  });
  
