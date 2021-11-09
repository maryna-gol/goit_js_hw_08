import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const storage_Key = "videoplayer-current-time"
const currentTime = localStorage.getItem(storage_Key);

if (currentTime) {
    player.setCurrentTime(currentTime);
}

const onPlay = function() {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem(storage_Key,seconds)
    }).catch(function(error) {
        console.error(error);
    });
     
};

player.on('timeupdate', throttle(onPlay, 1000));

