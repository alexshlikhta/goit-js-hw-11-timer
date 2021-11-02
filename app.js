import refs from './src/js/ref.js';

const { timer } = refs;

class CountdownTimer {
	constructor(timer, targetDate) {
		this.targetDate = targetDate;
		this.intID = null;
		this.time = 0;
		this.timer = timer;
	}
	start() {
		this.intID = setInterval(() => {
			let currentTime = Date.now();
			this.time = this.targetDate - currentTime;
			const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
			const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
			const secs = Math.floor((this.time % (1000 * 60)) / 1000);
			this.timer.querySelector('[data-value="days"]').textContent = days;
			this.timer.querySelector('[data-value="hours"]').textContent = hours;
			this.timer.querySelector('[data-value="mins"]').textContent = mins;
			this.timer.querySelector('[data-value="secs"]').textContent = secs;
		}, 1000);
	}
	stop() {
		clearInterval(this.intID);
	}
}

const myTimer = new CountdownTimer(timer, new Date('Jan 01, 2022 00:00:00'));
myTimer.start();
