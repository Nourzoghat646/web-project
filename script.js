   
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
    let aboutUsPosition = aboutUsSection.getBoundingClientRect().top + window.scrollY;

    side1.style.left = -scrollPosition + "px";
    side2.style.left = scrollPosition + "px";

   
    if (scrollPosition >= aboutUsPosition - window.innerHeight / 2) {
        videoContainer.style.opacity = '0.1'; 
     
       
    } else {
        videoContainer.style.opacity = '1'; 
    }
}

updateVisibility();

window.addEventListener('scroll', debounce(updateVisibility, 10));
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll('.card');

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
});

  document.getElementById('nav-toggle').addEventListener('click', function() {
    let navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
  });

function submitDonation() {
  let donationAmount = document.getElementById('donationAmount').value;
  let thankYouMessage = document.getElementById('thankYouMessage');

  if (donationAmount) {
      thankYouMessage.textContent = `Thank you for your donation of $${donationAmount}!`;
      document.getElementById('donationAmount').value = ''; 
  } else {
      thankYouMessage.textContent = 'Please enter a valid amount.';
  }
}