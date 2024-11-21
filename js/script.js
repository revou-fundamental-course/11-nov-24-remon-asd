// JavaScript for Auto-Sliding Images
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.image-slider .slide');
    let currentIndex = 0;
  
    const changeSlide = () => {
      // Remove active class from current slide
      slides[currentIndex].classList.remove('active');
      slides[currentIndex].classList.add('inactive');
  
      // Move to the next slide
      currentIndex = (currentIndex + 1) % slides.length;
  
      // Add active class to the new current slide
      slides[currentIndex].classList.remove('inactive');
      slides[currentIndex].classList.add('active');
    };
  
    // Initialize first slide
    slides[currentIndex].classList.add('active');
  
    // Change slides every 5 seconds
    setInterval(changeSlide, 5000); // Adjust interval as needed
  });
  
  
  // Contact Form Validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const destination = document.getElementById('destination').value;
    
      if (!name || !email || !destination) {
        alert('Please fill in all the fields!');
        return;
      }
  
    // Display success message
    alert(`Thank you, ${name}! Your inquiry for ${destination} has been submitted.`);
    document.getElementById('contact-form').reset(); // Clear the form
  });
  