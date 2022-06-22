// Deck of Cards

const deck = {
	suits          : [ 'clubs', 'diamonds', 'hearts', 'spades' ],
	values         : [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ],
	cards          : [],
	drawn          : [],

	initializeDeck(shuffle) {
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

const myDeck = deck;
myDeck.initializeDeck(true);

console.log(`myDeck's cards: ${myDeck.cards}`);

const pulledCards = myDeck.drawCards(53);

for (let pulled of pulledCards) {
	console.log(`My pulled cards: ${pulled.value} ${pulled.suit}`);
}

for (let drawn of myDeck.drawn) {
	console.log(`myDeck's drawn cards: ${drawn.value} ${drawn.suit}`);
}

console.log(`myDeck's cards length: ${myDeck.cards.length}`);
console.log(`myDeck's drawn length: ${myDeck.drawn.length}`);
