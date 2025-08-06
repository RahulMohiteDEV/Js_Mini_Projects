const emojis = ['🍎', '🍕', '🎲', '🎧', '🚀', '🎈', '🍩', '🎮'];
let cards = [...emojis, ...emojis];
cards.sort(() => 0.5 - Math.random());

const board = document.getElementById('game-board');
let flippedCards = [];
let lockBoard = false;
let matchedCount = 0; // 🆕 Count matched pairs

// 🆕 Create congrats message
const congratsMsg = document.createElement('h2');
congratsMsg.style.color = 'green';
congratsMsg.style.marginTop = '20px';
congratsMsg.innerText = '';
document.body.appendChild(congratsMsg);

cards.forEach((emoji, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-emoji', emoji);
  card.setAttribute('data-index', index);
  card.innerText = '';
  board.appendChild(card);

  card.addEventListener('click', () => flipCard(card));
});

function flipCard(card) {
  if (lockBoard || card.classList.contains('flipped') || card.classList.contains('matched')) return;

  card.classList.add('flipped');
  card.innerText = card.dataset.emoji;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    flippedCards = [];
    matchedCount++; 

    // 🏁 Check win
    if (matchedCount === emojis.length) {
      congratsMsg.innerText = '🎉 Congratulations! You won!';
    }

  } else {
    lockBoard = true;
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      card1.innerText = '';
      card2.innerText = '';
      flippedCards = [];
      lockBoard = false;
    }, 1000);
  }
}
