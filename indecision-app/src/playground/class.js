class Person {
	constructor(name = 'anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hi I am ${this.name}`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old`;
	}
}
class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();
		this.hasMajor ? (description += ` THeir major is ${this.major}`) : '';
		return description;
	}
}
const me = new Person('Rohan Ganguly', 29, 'IT');
