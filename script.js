// JavaScript for changing the animated text
const animatedText = document.getElementById('animatedText');
let textArray = ['Organized by ', 'Presented by ', 'Produced by' ];
let index = 0;

setInterval(function() {
    animatedText.innerHTML = textArray[index];
    index = (index + 1) % textArray.length;
}, 2000); // Change text every 2 seconds
