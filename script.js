   
function debounce(func, wait = 10) {
    let timeout;
    return function (...args) {
        let context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

let side1 = document.getElementById("side1");
let side2 = document.getElementById("side2");

function updateVisibility() {
    let scrollPosition = window.pageYOffset;
    let aboutUsSection = document.getElementById("about"); 
    let videoContainer = document.querySelector('.video-container');
    
    if (!aboutUsSection || !videoContainer) return;
    
    let aboutUsPosition = aboutUsSection.getBoundingClientRect().top + window.scrollY;

    // Apply split effect on all devices
    if (side1 && side2) {
        side1.style.left = -scrollPosition + "px";
        side2.style.left = scrollPosition + "px";
    }

    // Fade video when scrolling to about section
    if (scrollPosition >= aboutUsPosition - window.innerHeight / 2) {
        videoContainer.style.opacity = '0.1'; 
    } else {
        videoContainer.style.opacity = '1'; 
    }
}

// Initialize video on page load
function initializeVideo() {
    const videos = document.querySelectorAll('.videoSplit video');
    videos.forEach(video => {
        video.play().catch(() => {
            // Autoplay failed, video will still display as fallback
        });
    });
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeVideo);
} else {
    initializeVideo();
}

updateVisibility();

window.addEventListener('scroll', debounce(updateVisibility, 15));

// Update on window resize for responsive behavior
window.addEventListener('resize', debounce(updateVisibility, 200));

// Card intersection observer for animations
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll('.card');

    if (cards.length === 0) return;

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-cards'); 
            } else {
                entry.target.classList.remove('show-cards');
            }
        });
    }, {
        threshold: 0.1 
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('show');
        });

        // Close menu when a link is clicked
        const navLinks = navList.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('show');
            });
        });
    }
});

// Donation form submission
function submitDonation() {
  let donationAmount = document.getElementById('donationAmount');
  let thankYouMessage = document.getElementById('thankYouMessage');

  if (!donationAmount || !thankYouMessage) return;

  let amount = donationAmount.value;

  if (amount && !isNaN(amount) && amount > 0) {
      thankYouMessage.textContent = `Thank you for your donation of $${parseFloat(amount).toFixed(2)}!`;
      thankYouMessage.style.color = 'green';
      donationAmount.value = ''; 
      
      // Reset message after 3 seconds
      setTimeout(() => {
          thankYouMessage.textContent = '';
      }, 3000);
  } else {
      thankYouMessage.textContent = 'Please enter a valid amount.';
      thankYouMessage.style.color = 'red';
  }
}