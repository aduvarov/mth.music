const audio = new Audio();
const tracksCard = document.getElementsByClassName('track');
console.log(tracksCard);
const pauseBtn = document.querySelector('.player__controller-pause');
const stopBtn = document.querySelector('.player__controller-stop');
const player = document.querySelector('.player');

const playMusic = (event) => {
    const trackActive = event.currentTarget;
    audio.src = trackActive.dataset.track;
    audio.play();
    player.classList.add('player_active');
    pauseBtn.classList.remove('player__icon_play');
    player.classList.add('player_active');

    for (let i = 0; i < tracksCard.length; i++) {
        tracksCard[i].classList.remove('track_active');
    }

    trackActive.classList.add('track_active');
};

for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].addEventListener('click', playMusic);
}

pauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        pauseBtn.classList.remove('player__icon_play');
    } else {
        audio.pause();
        pauseBtn.classList.add('player__icon_play');
    }
});

stopBtn.addEventListener('click', () => {
    audio.src = '';
    player.classList.remove('player_active');
});
