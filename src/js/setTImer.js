import refs from './ref.js';
import CountdownTimer from './timer.js';

const { timer } = refs;

const myTimer = new CountdownTimer(timer, new Date('Jan 01, 2022 00:00:00'));
myTimer.start();
