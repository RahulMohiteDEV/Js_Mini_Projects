const text = document.getElementById('text');
const voicesDropdown = document.getElementById('voices');
const rate = document.getElementById('rate');
const rateValue = document.getElementById('rate-value');
const speakBtn = document.getElementById('speakBtn');

let voices = [];

// Load voices and populate dropdown
function populateVoices() {
  voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices.map((voice) => 
    `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
  ).join('');
}

// Chrome workaround for loading voices
speechSynthesis.onvoiceschanged = populateVoices;

// Speak function
function speak() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel(); // Stop previous
  }

  const utter = new SpeechSynthesisUtterance(text.value);
  const selectedVoice = voices.find(voice => voice.name === voicesDropdown.value);
  utter.voice = selectedVoice;
  utter.rate = parseFloat(rate.value);

  speechSynthesis.speak(utter);
}

// Event listeners
speakBtn.addEventListener('click', speak);
rate.addEventListener('input', () => {
  rateValue.textContent = rate.value;
});
