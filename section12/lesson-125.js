// THIS: invocation context.

const vtuber = {
	brand      : 'hololive',
	talent     : 'gura',
	is         : 'shark',
	height     : 'smol',
	present() {
		console.log(this);
		console.log(`Your favorite ${this.is} from ${this.brand}, ${this.talent}!`);
	},
	// Arrow functions don't bind THIS.
	showHeight : () => {
		// THIS is not binded to parent here.
		console.log(this.height); // undefined.
	}
};

const present = vtuber.present;

// present now belongs to a different scope, or global invocation here.
// And thus, THIS is set to global outside of vtuber.
present();

vtuber.showHeight();
