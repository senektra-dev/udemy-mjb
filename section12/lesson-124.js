// Using this keyword in methods.

const vtuber = {
	brand   : 'hololive',
	talent  : 'gura',
	is      : 'shark',
	present() {
		// console.log(this);
		console.log(`Your favorite ${this.is} from ${this.brand}, ${this.talent}!`);
	}
};

vtuber.present();
