// Destructuring Parameters.

const member = {
	name    : 'baelz',
	species : 'rat',
	log     : 'acasia'
};

const members = [ 'gura', 'mumei', 'fauna' ];

function whoThis({ name }) {
	console.log(name);
}

function whoThese([ member1, member2, member3 ]) {
	console.log(member1);
	console.log(member2);
	console.log(member3);
}

whoThis(member);
whoThese(members);
