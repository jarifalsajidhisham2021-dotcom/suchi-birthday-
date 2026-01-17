const sections = document.querySelectorAll(".section");

function show(id) {
  sections.forEach(s => s.style.display = "none");
  document.getElementById(id).style.display = "flex";
}

show("countdown");

// Countdown
const target = new Date("January 18, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  document.getElementById("timer").innerText = days + " days to go 💛";
}, 1000);

// Navigation
function showGallery() { show("gallery"); }
function showLetter() { show("letter"); }
function showCake() {
  show("cake");
  document.getElementById("birthdayMusic").play();
}
