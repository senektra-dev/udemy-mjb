const time = {
	second : 1000,
	minute : this.second * 60
};

const annoyer = {
	timerId    : null,
	phrases    : [
		'literally',
		'cray cray',
		"I can't even",
		'totes!',
		'YOLO',
		"Can't stop, won't stop"
	],
	pickPhrase() {
		const idx = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[idx];
	},
	start() {
		// Arrow functions keep the previous defined this.
		this.timerId = setInterval(() => console.log(this.pickPhrase()), time.second * 3);
	},
	stop() {
		clearInterval(this.timerId);
	}
};

annoyer.start();
setTimeout(annoyer.stop.bind(annoyer), time.second * 9.2);
