    // Debounce function to limit the rate at which the scroll event fires
function debounce(func, wait = 10) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  
  // Video Split Scroll Effect with Debounce
  let side1 = document.getElementById("side1");
  let side2 = document.getElementById("side2");
  
function updateVisibility() {
    let scrollPosition = window.pageYOffset;
    let aboutUsSection = document.getElementById("aboutusm"); // Get the About Us section
    let videoContainer = document.querySelector('.video-container');

    // Get the position of the About Us section
    let aboutUsPosition = aboutUsSection.getBoundingClientRect().top + window.scrollY;

    // Update side positions for split video effect
    side1.style.left = -scrollPosition + "px";
    side2.style.left = scrollPosition + "px";

    // Show cards and adjust video opacity based on scroll position relative to About Us section
    if (scrollPosition >= aboutUsPosition - window.innerHeight / 2) {
        videoContainer.style.opacity = '0.1'; // Reduce video opacity
        // Show cards if needed
        // cardsContainer.classList.add('show-cards'); // Uncomment if you have a cards container to show
    } else {
        videoContainer.style.opacity = '1'; // Full video opacity
        // Hide cards if needed
        // cardsContainer.classList.remove('show-cards'); // Uncomment if you have a cards container to hide
    }
}

// Initial call to set the correct state based on the current scroll position
updateVisibility();

// Add scroll event listener
window.addEventListener('scroll', debounce(updateVisibility, 10));

// JavaScript to trigger animation on scroll using Intersection Observer
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll('.card');

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-cards'); // Add class to trigger animation
            } else {
                entry.target.classList.remove('show-cards'); // Remove class when out of view
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    cards.forEach(card => {
        observer.observe(card); // Observe each card
    });
});

  document.getElementById('nav-toggle').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show'); // Toggle the 'show' class
  });

  document.addEventListener('DOMContentLoaded', function() {
    let lightModeBtn = document.getElementById('light-mode');
    let darkModeBtn = document.getElementById('dark-mode');

    // Function to set light mode
    function setLightMode() {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }

    // Function to set dark mode
    function setDarkMode() {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }

    // Event listeners for button clicks
    lightModeBtn.addEventListener('click', setLightMode);
    darkModeBtn.addEventListener('click', setDarkMode);
});
function submitDonation() {
  let donationAmount = document.getElementById('donationAmount').value;
  let thankYouMessage = document.getElementById('thankYouMessage');

  if (donationAmount) {
      thankYouMessage.textContent = `Thank you for your donation of $${donationAmount}!`;
      document.getElementById('donationAmount').value = ''; // Clear the input field
  } else {
      thankYouMessage.textContent = 'Please enter a valid amount.';
  }
}