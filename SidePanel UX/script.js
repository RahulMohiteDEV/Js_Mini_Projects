const openBtn = document.getElementById('openPane');
const closeBtn = document.getElementById('closePane');
const sidePane = document.getElementById('sidePane');
const overlay = document.getElementById('overlay');

// Open pane
openBtn.addEventListener('click', () => {
  sidePane.classList.add('show');
  overlay.classList.add('show');
});

// Close pane
const closePane = () => {
  sidePane.classList.remove('show');
  overlay.classList.remove('show');
};

closeBtn.addEventListener('click', closePane);
overlay.addEventListener('click', closePane);
