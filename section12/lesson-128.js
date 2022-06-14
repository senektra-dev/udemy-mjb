// Deck Factory

const deck = {
	suits          : [ 'clubs', 'diamonds', 'hearts', 'spades' ],
	values         : [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ],
	cards          : [],
	drawn          : [],

	initializeDeck(shuffle = false) {
		this.drawn = [];
		this.cards = [];

		for (let suit of this.suits) {
			for (let value of this.values) {
				this.cards.push({ suit, value });
			}
		}

		if (shuffle) this.shuffle();
	},

	drawCard() {
		if (this.cards.length == 0) return null;
		this.drawn.push(this.cards.pop());
		return this.drawn[this.drawn.length - 1];
	},

	drawCards(amount) {
		for (let pull = amount; this.cards.length > 0 && pull > 0; pull--) {
			this.drawCard();
		}

		return this.drawn.slice(-amount);
	},

	insertCard(idx) {
		if (this.drawn.length == 0) return;
		this.cards.splice(idx, 0, this.drawn.pop());
	},

	shuffle() {
		for (let i = this.cards.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[ this.cards[i], this.cards[j] ] = [ this.cards[j], this.cards[i] ];
		}
	}
};

// Not the best way to do it.
// Udemy video shows solution by encapsulating previous object in function and
// returning it.
function makeDeck(shuffle) {
	const newDeck = deck;
	newDeck.initializeDeck(shuffle);
	return { ...newDeck };
}

const deck1 = makeDeck(true);
const deck2 = makeDeck();

console.log('done');
