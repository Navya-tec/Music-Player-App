const song_img = document.getElementById("song-img");
const song_title = document.getElementById("song-title");
const song_artist = document.getElementById("song-artist");

const prev_btn = document.getElementById("prev-btn");
const play_btn = document.getElementById("play");
const next_btn = document.getElementById("next-btn");
const song_next_up = document.getElementById("song-next-up");

const play_icon = document.getElementById("play-icon");
const audio_player = document.getElementById("music-player");

let current_song_index;
let next_song_index;

let songs = [
  {
    title: "song-1",
    artist: "Artist 1",
    song_path: "music/music1.mp3",
    img_path: "images/music.jpeg",
  },
  {
    title: "song-2",
    artist: "Artist 2",
    song_path: "music/music2.mp3",
    img_path: "images/music2.jpg",
  },
  {
    title: "song-3",
    artist: "Artist 3",
    song_path: "music/music3.mp3",
    img_path: "images/music3.jpg",
  },
  {
    title: "song-4",
    artist: "Artist 4",
    song_path: "music/music4.mp3",
    img_path: "images/music4.jpg",
  },
];

intitPlayer();

function intitPlayer() {
  current_song_index = 0;
  next_song_index = current_song_index + 1;
  updatePlayer();
  song_img.classList.remove('anime');
}

play_btn.addEventListener("click", togglePlaySong);

function updatePlayer() {
  let song = songs[current_song_index];
  song_img.style = `background-image: url(${song.img_path})`;
  song_title.innerText = song.title;
  song_artist.innerText = song.artist;
  song_next_up.innerText =
    songs[next_song_index].title + " by " + songs[next_song_index].artist;
  audio_player.src = song.song_path;
}

function togglePlaySong() {
  if (audio_player.paused) {
    audio_player.play();
    play_icon.classList.remove("fa-play");
    play_icon.classList.add("fa-pause");
    song_img.classList.add('anime');
  } else {
    audio_player.pause();
    play_icon.classList.remove("fa-pause");
    play_icon.classList.add("fa-play");
    song_img.classList.remove('anime');
  }
}

function changeSong(next = true) {
  if (next) {
    current_song_index++;
    next_song_index = current_song_index + 1;

    if (current_song_index > songs.length - 1) {
      current_song_index = 0;
      next_song_index = current_song_index + 1;
    }

    if (next_song_index > songs.length - 1) {
      next_song_index = 0;
    }
  } else {
    current_song_index--;
    next_song_index = current_song_index + 1;
    if (current_song_index < 0) {
      current_song_index = songs.length - 1;
      next_song_index = 0;
    }
  }

  updatePlayer();
  togglePlaySong();
}

next_btn.addEventListener("click", changeSong);
prev_btn.addEventListener("click", () => {
  changeSong(false);
});
