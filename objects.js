//ways to create new object in java script
var object = new Object() // This approach is not recommended
var object = Object.create(null)

var object = {
    name:"something", 
    phone:"000000"
}
//Singleton: A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.
var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
 
console.log(instance1 === instance2);  // this will output 'true'
// Prototype Property

// Your Person function is a constructor function. When you create a new instance of Person using the new keyword, the new object gets linked to Person.prototype. All the properties and methods defined on Person.prototype become available to instances of Person.
// javascript
// Copy code
function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();
console.log(object.name); // Output: "Sudheer"
// In the above code, the Person constructor doesn't define a name property on the instance (this.name). Instead, it's on the Person.prototype. So, when you try to access name on the instance, it isn't found. Then JavaScript, through the prototype chain, looks for name on Person.prototype and finds it there.

// The second part of your question involves applying the constructor function with parameters and using Object.create. Object.create creates a new object with its prototype set to the argument passed to it. Here's how it works:

// javascript
// Copy code
function MyFunc(x, y, z) {
    this.sum = x + y + z;
};

var newInstance = Object.create(MyFunc.prototype);
// Now newInstance is an instance of MyFunc but MyFunc has not been called yet.
// So we need to call it manually.
var result = MyFunc.call(newInstance, 1, 2, 3);
console.log(newInstance.sum); // Output: 6
// In this code, you're creating a new instance newInstance of MyFunc. This instance has its prototype set to MyFunc.prototype. Then you're manually calling the function MyFunc with newInstance as its context and passing the arguments 1, 2, 3 for x, y, z. The result is that newInstance.sum is 6 (1+2+3).

// If MyFunc was a function that returned an object, then you'd use the result object. But in this case, MyFunc doesn't return anything so result is undefined and you use newInstance instead.

// The point of this more complicated process is to demonstrate how the new keyword operates behind the scenes in JavaScript.