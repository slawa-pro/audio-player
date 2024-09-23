const audioPlayer = {
  currentTrackIndex: 0,
  tracks: [
      {
          title: "Don't Start Now",
          artist: "Dua Lipa",
          src: "./assets/audio/dontstartnow.mp3",
          cover: "./assets/img/dontstartnow.png"
      },
      {
          title: "Lemonade",
          artist: "Beyoncé",
          src: "./assets/audio/beyonce.mp3",
          cover: "./assets/img/lemonade.png"
      }
  ]
};

const audio = new Audio();
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const coverImage = document.getElementById("cover-image");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");

function loadTrack(index) {
  const track = audioPlayer.tracks[index];
  audio.src = track.src;
  coverImage.src = track.cover;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
}

function togglePlayPause() {
  if (audio.paused) {
      audio.play();
      playButton.querySelector('img').src = "./assets/svg/pause.png";
  } else {
      audio.pause();
      playButton.querySelector('img').src = "./assets/svg/play.png";
  }
}

function nextTrack() {
  audioPlayer.currentTrackIndex = (audioPlayer.currentTrackIndex + 1) % audioPlayer.tracks.length;
  loadTrack(audioPlayer.currentTrackIndex);
  audio.play();
}

function prevTrack() {
  audioPlayer.currentTrackIndex = (audioPlayer.currentTrackIndex - 1 + audioPlayer.tracks.length) % audioPlayer.tracks.length;
  loadTrack(audioPlayer.currentTrackIndex);
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", nextTrack);
prevButton.addEventListener("click", prevTrack);

loadTrack(audioPlayer.currentTrackIndex);
