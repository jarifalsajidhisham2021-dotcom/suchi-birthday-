const sections = document.querySelectorAll(".section");

function showSection(id) {
  sections.forEach(s => s.style.display = "none");
  document.getElementById(id).style.display = "flex";
}

showSection("countdown-section");

/* COUNTDOWN */
const target = new Date("January 18, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;
  document.getElementById("countdown").innerText =
    Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))) + " days left 💛";
}, 1000);

/* NAVIGATION */
function showGallery() { showSection("gallery-section"); }
function showLetter() { showSection("letter-section"); }
function showPuzzle() { showSection("puzzle-section"); initPuzzle(); }
function showCake() {
  showSection("cake-section");
  document.getElementById("birthdayMusic").play();
}

/* PUZZLE */
const puzzle = document.getElementById("puzzle");
const unlockBtn = document.getElementById("unlockBtn");
const msg = document.getElementById("puzzleMsg");

let order = [...Array(9).keys()];
let first = null;

function initPuzzle() {
  puzzle.innerHTML = "";
  order.sort(() => Math.random() - 0.5);

  order.forEach((pos, i) => {
    const piece = document.createElement("div");
    piece.className = "puzzle-piece";
    piece.style.backgroundPosition =
      `${-(pos % 3) * 100}px ${-Math.floor(pos / 3) * 100}px`;
    piece.onclick = () => swap(i);
    puzzle.appendChild(piece);
  });
}

function swap(i) {
  if (first === null) first = i;
  else {
    [order[first], order[i]] = [order[i], order[first]];
    first = null;
    initPuzzle();
    checkSolved();
  }
}

function checkSolved() {
  if (order.every((v, i) => v === i)) {
    document.getElementById("successSound").play();
    msg.style.display = "block";
    unlockBtn.style.display = "inline-block";
  }
      }
