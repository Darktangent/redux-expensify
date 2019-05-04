// const person = {
// 	name: 'Rohan',
// 	age: 30,
// 	location: {
// 		city: 'Houston',
// 		state: 'TX',
// 		temp: 88
// 	}
// };
// const { name, age } = person;
// const { city, state, temp } = person.location;
// console.log(`${person.name} is ${person.age}`);
// console.log(`${city}, ${state}-> ${temp}`);

// array destructuing

const address = ['1299 south juniper st', 'houston', 'Texas', '77043'];
const [street, city, state, zipcode] = address;
console.log(`you are in ${street} ${city}`);
