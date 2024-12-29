// JavaScript for handling active navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Set the clicked navigation link as active
function setActiveLink() {
  navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links
  this.classList.add('active'); // Add active class to the clicked link
}

// Add event listener to each navigation link
navLinks.forEach(link => link.addEventListener('click', setActiveLink));

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Toggle mobile menu open/close on button click
menuToggle.addEventListener('click', () => {
  const isActive = navMenu.classList.contains('active');
  navMenu.classList.toggle('active'); // Toggle the active state of the nav menu
  menuToggle.setAttribute('aria-expanded', !isActive); // Update aria-expanded attribute for accessibility
});

// Smooth Scrolling for Navigation Links
const smoothLinks = document.querySelectorAll('.nav-menu a');

// Smooth scroll behavior for anchor links
smoothLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor link action
    const targetId = link.getAttribute('href').substring(1); // Get the target section ID
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth', // Scroll smoothly
      block: 'start' // Scroll to the top of the target element
    });
  });
});

// Search Functionality (basic implementation)
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

// Search button click event
searchButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase().trim(); // Get the search query
  if (query) {
    alert(`You searched for: ${query}`); // Display alert with search query (this can be customized to handle actual search results)
  } else {
    alert("Please enter a search term.");
  }
});

// Optional: Close the search bar after a search term is entered
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchButton.click(); // Trigger the search when Enter key is pressed
  }
});
// Get form elements
const contactForm = document.querySelector('.contact-form');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const messageField = document.querySelector('#message');
const submitButton = document.querySelector('.btn-submit');

// Function to validate the form
function validateForm(event) {
  let valid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear previous error messages
  const errorMessages = contactForm.querySelectorAll('.error-message');
  errorMessages.forEach(error => error.remove());

  // Validate Name
  if (nameField.value.trim() === '') {
    valid = false;
    displayError(nameField, 'Name is required');
  }

  // Validate Email
  if (emailField.value.trim() === '') {
    valid = false;
    displayError(emailField, 'Email is required');
  } else if (!emailRegex.test(emailField.value.trim())) {
    valid = false;
    displayError(emailField, 'Please enter a valid email address');
  }

  // Validate Message
  if (messageField.value.trim() === '') {
    valid = false;
    displayError(messageField, 'Message is required');
  }

  return valid;
}

// Function to display error messages
function displayError(field, message) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;
  field.parentElement.appendChild(errorMessage);
}

// Handle form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Validate form inputs
  if (validateForm(event)) {
    // Simulate a successful form submission (e.g., sending data to a server)
    setTimeout(() => {
      // Show thank you message
      contactForm.innerHTML = `<p class="thank-you-message">Thank you for getting in touch! We'll get back to you soon.</p>`;
    }, 1000);
  } else {
    // Show a message for invalid form
    console.log('Form is not valid');
  }
});

// Optionally, reset the form after a timeout (for demonstration purposes)
contactForm.addEventListener('reset', function() {
  setTimeout(() => {
    const thankYouMessage = document.querySelector('.thank-you-message');
    if (thankYouMessage) {
      thankYouMessage.remove();
    }
  }, 2000);
});
// JavaScript for Lyrics Carousel
const lyricsCards = document.querySelectorAll('.lyrics-card');
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');
let currentIndex = 0;

// Function to show the current lyric card
function showLyric(index) {
  lyricsCards.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) {
      card.classList.add('active');
    }
  });
}

// Event Listeners for Navigation
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? lyricsCards.length - 1 : currentIndex - 1;
  showLyric(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === lyricsCards.length - 1) ? 0 : currentIndex + 1;
  showLyric(currentIndex);
});

// Initial Display
showLyric(currentIndex);
// JavaScript to handle testimonial section toggle functionality
const testimonialToggle = document.querySelector('.testimonial-toggle');
const testimonialsContent = document.getElementById('testimonials-content');

testimonialToggle.addEventListener('click', () => {
  const isExpanded = testimonialToggle.getAttribute('aria-expanded') === 'true';
  
  // Toggle the aria-expanded attribute and show/hide content
  testimonialToggle.setAttribute('aria-expanded', !isExpanded);
  testimonialsContent.style.display = isExpanded ? 'none' : 'block';
});


