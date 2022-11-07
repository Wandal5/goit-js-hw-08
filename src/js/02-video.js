import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimedUpdate, 1000));

function onTimedUpdate(e) {
    
    localStorage.setItem('videoplayer-current-time', e.seconds);
};

const getTimeSum = (localStorage.getItem('videoplayer-current-time'));
if (getTimeSum !== null) {
    player.setCurrentTime(getTimeSum)

}
