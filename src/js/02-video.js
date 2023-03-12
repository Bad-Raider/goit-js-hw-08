import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let savedTimeInLocalStorage = parseInt(localStorage.getItem('videoplayer-current-time'));
console.log(savedTimeInLocalStorage);

player.on('timeupdate', function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
});

player.setCurrentTime(savedTimeInLocalStorage).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

