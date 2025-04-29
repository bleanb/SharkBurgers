// Scroll animations

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }
  
  // Function to handle scroll animations
  function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up');
    
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate');
      }
    });
  }
  
  // Initialize animations on page load
  document.addEventListener('DOMContentLoaded', () => {
    // Trigger once on load for elements that are already in view
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
  });
  
  // Hero section animations with sequential timing
  document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero .fade-in');
    
    // Apply sequential fade-in with delay
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, 300 * index);
    });
  });