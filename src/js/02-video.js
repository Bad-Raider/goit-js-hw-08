import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// time saved in local storage
let savedTimeInLocalStorage = parseInt(localStorage.getItem('videoplayer-current-time'));

// handler time in local Storage 
const handleCurrentTimeLocalStorage = (data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}
// function follow up time and his save in local storage 
player.on('timeupdate', throttle(handleCurrentTimeLocalStorage, 1000));

// function restart video time saved in local storage
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

