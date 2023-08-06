var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Good afternoon, I'm";
} else if (hourNow > 12) {
  greeting = "Good evening, I'm";
} else if (hourNow > 0) {
  greeting = "Good Morning, I'm";
} else {
  greeting = "Hello, I'm";
}

var paragraphElement = document.getElementById("greetingParagraph");

paragraphElement.textContent = greeting;
