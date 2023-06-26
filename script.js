const glowingText = document.querySelector('.glowing-text');

glowingText.addEventListener('mouseover', function() {
  this.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00';
});

glowingText.addEventListener('mouseout', function() {
  this.style.textShadow = 'none';
});
var element = document.getElementById("brighten-on-hover");

element.addEventListener("mouseenter", function() {
  element.classList.add("bright");
});

element.addEventListener("mouseleave", function() {
  element.classList.remove("bright");
});

var element = document.querySelector(".color-change");

element.addEventListener("mouseenter", function() {
  element.style.color = "blue";
});

element.addEventListener("mouseleave", function() {
  element.style.color = "initial";
});
function zoomIn() {
  var btn = document.querySelector(".btn");
  btn.classList.add("zoom");
  
  setTimeout(function() {
    btn.classList.remove("zoom");
  }, 300);
}

const button = document.querySelector('.glow-button');
let intervalId;

button.addEventListener('mouseenter', function() {
  intervalId = setInterval(function() {
    button.classList.toggle('glow');
  }, 10000); // Thay đổi thời gian tại đây (miligiây)
});

button.addEventListener('mouseleave', function() {
  clearInterval(intervalId);
  button.classList.remove('glow');
});
