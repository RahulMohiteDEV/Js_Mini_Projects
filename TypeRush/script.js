const wordDisplay = document.getElementById("word-display");
const wordInput = document.getElementById("word-input");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score-value");
const startBtn = document.getElementById("start-btn");

let time = 30;
let score = 0;
let timer;
let currentWord = "";

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function showWord() {
  currentWord = getRandomWord();
  wordDisplay.innerText = currentWord;
}

function startGame() {
  score = 0;
  time = 30;
  wordInput.value = "";
  scoreEl.textContent = 0;
  showWord();
  wordInput.focus();
  startBtn.disabled = true;

  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;
    if (time === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function endGame() {
  wordDisplay.innerText = "Game Over!";
  startBtn.disabled = false;
}

wordInput.addEventListener("input", () => {
  if (wordInput.value.trim().toLowerCase() === currentWord.toLowerCase()) {
    score++;
    scoreEl.textContent = score;
    wordInput.value = "";
    showWord();
  }
});

startBtn.addEventListener("click", startGame);
