//What is a prototype chain
// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.
// The prototype on object instance is available through Object.getPrototypeOf(object) or __proto__ property whereas prototype on constructors function is available through Object.prototype.

// A prototype chain in JavaScript is essentially the mechanism by which objects can 'inherit' properties from other objects. When you access a property on an object, JavaScript will try to find that property on the object itself. If it can't find it, it will then look up the prototype chain, checking the object's prototype, the prototype's prototype, and so on, until it either finds the property or reaches an object with a null prototype.

// Here's an example:
let animal = {
    eats: true,
    sleeps: true
};

// Create a new object with animal as a prototype
let rabbit = Object.create(animal);

rabbit.hops = true;

console.log(rabbit.eats); // true
console.log(rabbit.hops); // true
console.log(rabbit.sleeps); // true
// In this example, animal is a prototype of rabbit. When we try to access the eats and sleeps properties on rabbit, JavaScript doesn't find them on rabbit itself, so it looks up the prototype chain and finds them on animal.

// Similarly, when accessing the hops property, it finds it directly on the rabbit object.

// For a prototype chain with multiple levels, JavaScript will continue to go up the chain until it either finds the property or hits the end of the chain, which is null.

// It's important to note that Object.create(animal) creates a new object with the animal object as its prototype, and Object.getPrototypeOf(rabbit) or rabbit.__proto__ would return the animal object.

// Remember that the __proto__ property is not recommended to be used directly, as it is not supported in all environments. The Object.getPrototypeOf(object) method is the standard way of accessing an object's prototype.