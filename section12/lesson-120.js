// Computed object properties.

const role = 'vtuber';
const person = 'mumei';
// const team = {}
// team[role] = person;

const team = {
	[role]  : person,
	[1 + 5]: 'six'
};

console.log(team);

// Create new object with added key.
const addProp = (obj, k, v) => {
	return {
		...obj,
		[k] : v
	};
};

console.log(addProp(team, 'cool', true));
console.log(team);
