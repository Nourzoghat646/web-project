let images1 = ["img/calendar-check.png", 'img/graphic-design.png', 'img/meeting.png'];
let descriptions1 = [
    "Description for calendar check image.",
    "Description for graphic design image.",
    "Description for meeting image."
];

let images2 = ["img/video-camera.png", 'img/web-design.png', 'img/world-wide-web.png'];
let descriptions2 = [
    "Description for meeting image.",
    "Description for calendar check image.",
    "Description for graphic design image."
];

let currentIndex1 = 0;
let currentIndex2 = 0;

function updateImage1() {
    document.getElementById('sliderImage1').src = images1[currentIndex1];
    document.getElementById('imageDescription1').innerText = descriptions1[currentIndex1];
}

function updateImage2() {
    document.getElementById('sliderImage2').src = images2[currentIndex2];
    document.getElementById('imageDescription2').innerText = descriptions2[currentIndex2];
}

// Automatic change for the first slider every 6 seconds
setInterval(function() {
    currentIndex1 = (currentIndex1 === images1.length - 1) ? 0 : currentIndex1 + 1;
    updateImage1();
}, 4000);

// Automatic change for the second slider every 6 seconds
setInterval(function() {
    currentIndex2 = (currentIndex2 === images2.length - 1) ? 0 : currentIndex2 + 1;
    updateImage2();
}, 4000);