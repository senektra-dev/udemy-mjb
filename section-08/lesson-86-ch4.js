// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----A,2,3,4,5,6,7,8,9,10,J,Q,K
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard() {
	const value = Math.floor(Math.random() * 13) + 1;
	const suit = Math.floor(Math.random() * 4) + 1;

	card = {
		value : undefined,
		suit  : undefined
	};

	switch (value) {
		case 1:
			card.value = 'A';
			break;
		case 11:
			card.value = 'J';
			break;
		case 12:
			card.value = 'Q';
			break;
		case 13:
			card.value = 'K';
			break;
		default:
			card.value = value.toString();
	}

	switch (suit) {
		case 1:
			card.suit = 'clubs';
			break;
		case 2:
			card.suit = 'spades';
			break;
		case 3:
			card.suit = 'hearts';
			break;
		case 4:
			card.suit = 'diamonds';
			break;
	}

	return card;
}

console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
