let navToggle = document.querySelector('#nav-toggle');

// Video autoplay functionality
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.play().catch(error => {
            console.log('Autoplay prevented:', error);
            // Fallback: Add play button hover effect
            let projectCard = video.closest('.project-card');
            if (projectCard) {
                projectCard.addEventListener('mouseenter', function() {
                    video.play();
                });
                projectCard.addEventListener('mouseleave', function() {
                    video.pause();
                });
            }
        });
    });
});
let navList = document.querySelector('#nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});
$(document).ready(function() {
   
    $('#btn1').on('click', function() {
  
      window.location.href = 'login.html';
    });
    $('.card-button').on('click', function(){
        window.location.href = 'services.html'
    });
    $.getJSON('services2.json', function (data) {
     
      displayCategories(data.categories, '#services-container');

   
      $('#mission-image').attr('src', data.mission.image);

    
      displayCategories(data.secondCategories, '#second-services-container');

   
      $('#second-mission-image').attr('src', data.secondMission.image);

      displayCategories(data.thirdCategories, '#third-services-container');

    
  });

  function displayCategories(categories, containerId) {
      var container = $(containerId);

      $.each(categories, function (index, category) {
          var card = $('<div class="card">' +
              '<div class="card-inner">' +
              '<div class="card-front" style="display: flex;">' +
              '<img src="' + category.image + '" height="100px" width="200px">' +
              '<p>' + category.title + '</p>' +
              '</div>' +
              '<div class="card-back">' +
              '<p>' + category.description + '</p>' +
              '</div>' +
              '</div>' +
              '<button class="booking-button" data-service="${category.title}">Book Now</button>' +
              '</div>');

          container.append(card);
      });
  }
  $(document).on('click', '.booking-button', function() {
    let serviceName = $(this).data('service');
    window.location.href = 'booking.html?service=' + encodeURIComponent(serviceName);
});
});
