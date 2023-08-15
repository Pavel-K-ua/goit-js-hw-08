import Player from '@vimeo/player';
import helper from './helper.js';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('timeupdate', _.throttle(({seconds}) => console.log(seconds), 1000));


player.on('timeupdate', _.throttle(({seconds}) => 
helper.save("videoplayer-current-time", seconds), 1000));

(helper.load("videoplayer-current-time")) ? player.setCurrentTime(helper.load("videoplayer-current-time")) : "";

