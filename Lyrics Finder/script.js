window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const lyricsBox = document.getElementById("lyrics");

  button.addEventListener("click", async () => {
    const artistInput = document.getElementById("artist");
    const songInput = document.getElementById("song");

    if (!artistInput || !songInput) {
      lyricsBox.innerText = "❗ Required inputs not found.";
      return;
    }

    const artist = artistInput.value.trim();
    const song = songInput.value.trim();

    if (!artist || !song) {
      lyricsBox.innerText = "❗ Please enter both artist and song.";
      return;
    }

    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    lyricsBox.innerText = "🎵 Fetching lyrics...";

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.lyrics) {
        lyricsBox.innerText = data.lyrics;
      } else {
        lyricsBox.innerText = "❌ Lyrics not found.";
      }
    } catch (err) {
      lyricsBox.innerText = "🚫 Failed to fetch lyrics.";
      console.error(err);
    }
  });
});
