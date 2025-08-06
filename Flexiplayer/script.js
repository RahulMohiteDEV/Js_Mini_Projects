const video = document.getElementById("video");
const playPause = document.getElementById("playPause");
const mute = document.getElementById("mute");
const volume = document.getElementById("volume");
const speed = document.getElementById("speed");
const progress = document.getElementById("progress");
const time = document.getElementById("time");
const fullscreen = document.getElementById("fullscreen");

// Play/Pause toggle
playPause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPause.textContent = "⏸️";
  } else {
    video.pause();
    playPause.textContent = "▶️";
  }
});

// Mute toggle
mute.addEventListener("click", () => {
  video.muted = !video.muted;
  mute.textContent = video.muted ? "🔈" : "🔇";
});

// Volume control
volume.addEventListener("input", () => {
  video.volume = volume.value;
});

// Playback speed
speed.addEventListener("change", () => {
  video.playbackRate = speed.value;
});

// Update progress bar as video plays
video.addEventListener("timeupdate", () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // Update time text
  const current = formatTime(video.currentTime);
  const total = formatTime(video.duration);
  time.textContent = `${current} / ${total}`;
});

// Seek video
progress.addEventListener("input", () => {
  video.currentTime = (progress.value / 100) * video.duration;
});

// Fullscreen toggle
fullscreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

function formatTime(sec) {
  const minutes = Math.floor(sec / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
