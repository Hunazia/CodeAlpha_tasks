const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const songTitle = document.querySelector('.info h2');

let isPlaying = false;

function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.textContent = '||';
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.textContent = '▶';
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});

audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener('ended', playSong);

// Assuming there are no other songs to play, so next/prev buttons won't be functional
prevBtn.addEventListener('click', () => {});
nextBtn.addEventListener('click', () => {});
