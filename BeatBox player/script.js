const songs = [
  { title: "Cool Vibes", file: "assets/ABC.mp3" },
  { title: "Night Beat", file: "assets/song.mp3" },
  { title: "Morning Chill", file: "assets/song3.mp3" }
];

let currentSongIndex = 0 ;
let audio = new Audio(songs[currentSongIndex].file);

const titleEl = document.getElementById('song-title');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const nextBtn = document.getElementById("next");

titleEl.innerText = songs [currentSongIndex].title;

playBtn.addEventListener('click', () => {
    audio.play();
});

pauseBtn.addEventListener('click', () => {
audio.pause();
});

nextBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;

    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio = new Audio(songs[currentSongIndex].file);
    titleEl.innerText = songs[currentSongIndex].title;
    audio.play();
});