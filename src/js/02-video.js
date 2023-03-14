import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// time saved in local storage
let savedTimeInLocalStorage = localStorage.getItem('videoplayer-current-time') || 0;

// handler time in local Storage 
const handleCurrentTimeLocalStorage = (data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}
// function follow up time and his save in local storage 
player.on('timeupdate', throttle(handleCurrentTimeLocalStorage, 1000));

// function restart video the time saved in local storage
player.setCurrentTime(savedTimeInLocalStorage);

