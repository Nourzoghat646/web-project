let images = ["img/calendar-check.png",'img/graphic-design.png' ,'img/meeting.png' ];
let currentIndex = 0;

function updateImage() {
    document.getElementById('sliderImage').src = images[currentIndex];
}

document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});
