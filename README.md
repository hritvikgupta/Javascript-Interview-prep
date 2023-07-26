## Java ES6 Project Repository
This repository contains a series of JavaScript ES6 (ECMAScript 6) concept files. JavaScript ES6, also known as ECMAScript 2015, is the version of JavaScript that introduces new features and concepts that are fundamental to modern JavaScript development.

Each file in this repository is designed to provide a clear understanding of different JavaScript concepts.

## Files in the Repository
Here are the files available in this repository along with a brief description:

1. `CallApplyBind.js`: This file demonstrates the usage and differences of the call, apply and bind methods in JavaScript, which are all used to change the context of 'this'.

2. `Clousers.js`: The file explains JavaScript closures, a concept that allows an inner function to access the scope of an outer function.

3. `Currying.js`: Demonstrates currying, a technique of transforming a function with multiple arguments into a sequence of functions each with a single argument.

4. `Function.js`: Contains examples and explanations of function definitions and scopes in JavaScript.

5. `Generators.js`: This file demonstrates the use of JavaScript Generators, a special type of function that works as a factory for iterators.

6. `IteratorIterables.js`: This file illustrates JavaScript iterators and iterables, demonstrating how to create custom iterations over objects.

7. `JsonObject.js`: Provides examples and explanations on handling JSON (JavaScript Object Notation) in JavaScript.

8. `objects.js`: This file covers object creation, manipulation, and traversal in JavaScript.

9. `Prototype.js`: Demonstrates the use of JavaScript prototypes, an object from which other objects inherit properties.

10. `PrototypeClassInheritance.js`: This file provides an overview of class-based inheritance as implemented in JavaScript through prototypes.

11. `PrototypeInheritance.js`: It offers detailed insights into Prototype-based inheritance, a form of object-oriented code organization in JavaScript that doesn't involve classes.

12. `ProtoypeChain.js`: Demonstrates the prototype chain, which is the basis for JavaScript's prototype-based inheritance model.

13. `Scopes.js`: This file covers the concept of Scopes in JavaScript including block scope, function scope and lexical scope.

14. `ThisKeyword.js`: Provides a detailed understanding of 'this' keyword in JavaScript, an important concept that refers to the context in which a function is called.

## Concepts
1. Scopes 

let a = 10
function outer(){
let b =20
function inner(){
let c = 30
console.log(a, b, c)
}
inner()
}
outer()

Output: 10,20, 30

1. Clousres  : *A function bundled together with its lexical environment forms a closure. Clouseres creates everytime  a function is created , at function creation time. Or in simpler words when we return a function and its scope from another function we call it as a clousers.* 

```
const greet = () =>  {
    const prefix = 'Mr'
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}

console.log(greet()('Jack'))
//more better  example 
function outer(){
    let counter = 0
    function inner () {
        counter++
        console.log(counter)
    }
    inner()
}
outer()
outer()

//both of the above output 1 and 1 as counter is initalize everytime 
//Now using a clouser, which means
function outer(){
    let counter = 0
    function inner () {
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer()
fn()
fn()
//Above will output 1 and 2 as outer is initialize by one and inner by 2.
```

### **Advantages of Closures in JavaScript 😎**

- Currying: when we transform a function with multiple arguments into a sequence of nesting function that takes one argument at a time. F(a, b, c) ⇒ F(a)(b)(c). Currying does not call a function but simple transforms it.

```
let add = function (x) {
  return function (y) {
    console.log(x + y)
  }
}

let addByTwo = add(2)
addByTwo(3)

//Another simple example x`
function sum(x, y, z){
    return x+y+z
}
console.log(sum(2, 3, 4))

//Below using currying we can resuse the function
function currying(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}
const res=currying(sum)
console.log(res(2)(3)(4))
const a = res(2)
const b = a(3)
const c= b(4)
console.log(c)
```

# This Keyword: order of precedence in bindings are”

new binding > explicit binding > implicit binding>default binding

1. i*mplicit Binding*

const person = {

name:"hritvik",

sayname:function(){

console.log(`this is my name ${this.name}`)

}

}

person.sayname()

1. *explicit binding*

function saymyname (){

console.log(`this is my name ${this.name}`)

}

*//below is the inbuilt call method of any function in javascript*

*//which specifies the context in which the function is being called.*

saymyname.call(person)

1. *New Binding keyword*

function Person(name){

*//this = {}*

this.name = name

}

*// Whenever, A new keyword is used this object inside the called function*

*//invokes a new object.* 

A function which is called using a new keyword is called a constructor function.

const p1 = new Person("hritvik")

const p2 = new Person("Gupta")

1.  *Default Binding*

*//If i call the sayname function without any binding*

*//then it will output my name is undefined*

*//javascript tries to find the name var in global scope*

*//but as it couldn't find it so it make it undefined*

saymyname()

*//but if we do this*

globalThis.name ="superman"

saymyname()

- Data Hiding/Encapsulation

Suppose you want to create a counter application. Every time you call it, the count increases by 1. But you don't want to expose the variable outside the function. How to do it?

You guessed it – closures!

```
function Counter() {
  var count = 0
  this.incrementCount = function () {
    count++
    console.log(count)
  }
}

console.log(count) // Error: count is not defined
var adder = new Counter()
adder.incrementCount() // 1
```

## Proptypes

*//consider the below example*

function Person(fname, lname){

this.fname = fname

this.lname = lname

}

const p1 = new Person("hritvik", "gupta")

const p2 = new Person("someone", "else")

p1.getFullname = function(){

return this.fname + " " + this.lname

}

*//In above case getfullname is a new property of person*

*//function that is assigned only to p1 and not to p2*

*//for the function p2 to get that value we use prototype*

*//in prototype we add prop to Person using inbuild property prototyp*

*//which points to an object*

Person.prototype.getFullname = function(){

return this.fname + " " + this.lname

}

console.log(p1.getFullname())

console.log(p2.getFullname())

## Prototype Inheritance.

*//consider the below example*

function Person(fname, lname){

this.fname = fname

this.lname = lname

}

Person.prototype.getFullname = function(){

return this.fname + " " + this.lname

}

*//Now we create a another function superhero which inherits the*

*//Person function*

function Superhero(fname, lname){

*//In below we use call to pass the context in which the Person*

*//will be called which is "this of superman" and args it accepts*

Person.call(this, fname, lname)

this.fightCrime = true

}

Superhero.prototype = function(){

console.log("Fighting Crime")

}

*//Now to inherit the prototype property of Person we use Chain method*

*//In chain method we use Object.create(Person.Prootype)*

Superhero.prototype = Object.create(Person.prototype)

*//When called first, Above Javascript first checks if prototype object*

*//of superhero has property getfull name. If not then it checks the property of Prototype*

*//of person*

*//create the instance of Superhero using new keyword*

const batman = new Superhero("bruce","wayne")

Superhero.prototype.constructor = Superhero

*//above line ensures javascript that Superhero is not*

*//created from Person but a different function that inherit Person Function.*

console.log(batman.getFullname())

## Prototype Class Inheritance

class Person {

constructor(fname, lname){

this.fname = fname,

this.lname = lname

}

sayMyName(){

return this.fname + " " + this.lname

}

}

const P1 = new Person("Bruce", "Wayne")

console.log(P1.sayMyName())

class Superhero extends Person{

constructor(fname, lname){

super(fname, lname) //This super is used to reinitialise the constructor of extended class Person 

this.isSuperHero = true

}

flightCrime(){

console.log("Fighting Crime")

}

}

const batman  = new Superhero("Bruce", "Wayne")

console.log(batman.sayMyName())

## Generators

*// In normal function we return the value after the last line is executed*

*// Or either we use try catch to catch and throw the error.*

function normalFunction(){

console.log("Hello")

console.log("world")

}

*//But When we use a generator function, two main things occurs*

*//First it first stop midway and continue execution from where it stops*

*//Or we can say it pause the execution*

*// To do that we use yield keyword which pause the execution.*

*//Everytime JS Encounters Yeild it pause the execution*

function* generatorFunction(){

yield("Hello")

yield("world")

}

*// a generator function returns the generator object which*

*// itself a iterator*

const generatorObject = generatorFunction()

*//iterating the generator object*

for(const obj of generatorObject){

console.log(obj)

}

### **Disadvantages of Closures in JavaScript 😅**

- Overconsumption of memory or memory leaks can happen.

### **Hoisting in JavaScript 🚩**

This is JavaScript's default behavior of moving declarations to the top of the program.

- `var` declaration is hoisted up and initialized with `undefined`.
- `let` and `const` declarations are hoisted up but not initialized.
- `function` definitions are also hoisted up and stored as they are.

```
function consoleNum() {
  console.log(num)
  var num = 10
}

consoleNum() // undefined

// Why no error?

// This is how runtime sees this
{
  var num
  console.log(num)
  num = 9
}

// If instead of var -> let, it will give an error as let values are not initialized
```

1.  `this` as something which provides context

```
function myFunc() {
    console.log(this)
  }

const obj = {
  bool: true,
  myFunc: myFunc,
}

obj.myFunc()

```

Now, `this` will point to the object. So what's happening here?

In the first example, we had nothing left of the `.` so it defaulted to the `window` object. But in this example, we have the object `obj`.

If you do:

```
myFunc() // window

```

We again get the `window` object. So, we can see that the value of `this` depends on how and where are we doing the calling.

What we just did above is called **Implicit Binding**. The value of `this` got bound to the object.

There is another way to use `this`. **Explicit binding** is when you force a function to use a certain object as its `this`.

Let's understand why we need explicit binding through an example.

```
const student_1 =  {
    name: 'Randall',
    displayName_1: function displayName() {
        console.log(this.name)
    }
}
const student_2 =  {
    name: 'Raj',
    displayName_2: function displayName() {
        console.log(this.name)
    }
}

student_1.displayName_1()
student_2.displayName_2()

```

We are using `this` properly, but can you see the problem with the above code?

We are repeating code. And one of the principles of good programming is keep your code DRY! (Don't Repeat Yourself)

So, let's get rid of `displayName_2` and simply do:

```

student_1.displayName_1.call(student_2) // Raj

```

`call` forced `displayName_1` to use the second object as its `this`.

There are a lot of other ways we can do this.

1. The concept you're referring to here is how 'this' keyword works differently in arrow functions and regular functions. Here's an example to illustrate:

Let's consider an object with a method where we use a regular function:

```
javascriptCopy code
let user = { firstName: "John", sayHi() { console.log("Hello, " + this.firstName); } }; user.sayHi(); // This would output "Hello, John"

```

Here, **`this`** refers to the **`user`** object where the **`sayHi`** method was called, so "Hello, John" is printed.

Now, let's try to rewrite **`sayHi`** with an arrow function:

```
javascriptCopy code
let user = { firstName: "John", sayHi: () => { console.log("Hello, " + this.firstName); } }; user.sayHi(); // This would output "Hello, undefined"

```

In this case, **`this`** no longer refers to the **`user`** object. That's because arrow functions don't have their own **`this`** context, they inherit it from the parent scope at the time they are created. In a browser, the parent scope would be the **`window`** object if the function is not inside any other object or function. In a Node.js environment, it would be the **`global`** object.

Therefore, you'd get "Hello, undefined", because there is no **`firstName`** property in the global or window scope. That's the main difference in how **`this`** is handled between arrow functions and regular functions.

javascriptCopy code

`let user = { firstName: "John", sayHi: function() { let arrowFunction = () => {console.log("Hello, " + this.firstName); } arrowFunction(); } }; user.sayHi(); // Outputs "Hello, John"`

1. Clousres : *A function bundled together with its lexical environment forms a closure.*

```
const greet = () =>  {
    const prefix = 'Mr'
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}

console.log(greet()('Jack'))

```

### **Advantages of Closures in JavaScript 😎**

- Currying

```
let add = function (x) {
  return function (y) {
    console.log(x + y)
  }
}

let addByTwo = add(2)
addByTwo(3)

```

- Data Hiding/Encapsulation

Suppose you want to create a counter application. Every time you call it, the count increases by 1. But you don't want to expose the variable outside the function. How to do it?

You guessed it – closures!

```
function Counter() {
  var count = 0
  this.incrementCount = function () {
    count++
    console.log(count)
  }
}

console.log(count) // Error: count is not defined
var adder = new Counter()
adder.incrementCount() // 1

```

### **Disadvantages of Closures in JavaScript 😅**

- Overconsumption of memory or memory leaks can happen.

### **Hoisting in JavaScript 🚩**

This is JavaScript's default behavior of moving declarations to the top of the program.

- `var` declaration is hoisted up and initialized with `undefined`.
- `let` and `const` declarations are hoisted up but not initialized.
- `function` definitions are also hoisted up and stored as they are.

```
function consoleNum() {
  console.log(num)
  var num = 10
}

consoleNum() // undefined

// Why no error?

// This is how runtime sees this
{
  var num
  console.log(num)
  num = 9
}

// If instead of var -> let, it will give an error as let values are not initialized

```

1. `this` as something which provides context

```
function myFunc() {
    console.log(this)
  }

const obj = {
  bool: true,
  myFunc: myFunc,
}

obj.myFunc()

```

Now, `this` will point to the object. So what's happening here?

In the first example, we had nothing left of the `.` so it defaulted to the `window` object. But in this example, we have the object `obj`.

If you do:

```
myFunc() // window

```

We again get the `window` object. So, we can see that the value of `this` depends on how and where are we doing the calling.

What we just did above is called **Implicit Binding**. The value of `this` got bound to the object.

There is another way to use `this`. **Explicit binding** is when you force a function to use a certain object as its `this`.

Let's understand why we need explicit binding through an example.

```
const student_1 =  {
    name: 'Randall',
    displayName_1: function displayName() {
        console.log(this.name)
    }
}
const student_2 =  {
    name: 'Raj',
    displayName_2: function displayName() {
        console.log(this.name)
    }
}

student_1.displayName_1()
student_2.displayName_2()

```

We are using `this` properly, but can you see the problem with the above code?

We are repeating code. And one of the principles of good programming is keep your code DRY! (Don't Repeat Yourself)

So, let's get rid of `displayName_2` and simply do:

```

student_1.displayName_1.call(student_2) // Raj

```

`call` forced `displayName_1` to use the second object as its `this`.

There are a lot of other ways we can do this.

1. The concept you're referring to here is how 'this' keyword works differently in arrow functions and regular functions. Here's an example to illustrate:

Let's consider an object with a method where we use a regular function:

```
javascriptCopy code
let user = { firstName: "John", sayHi() { console.log("Hello, " + this.firstName); } }; user.sayHi(); // This would output "Hello, John"

```

Here, **`this`** refers to the **`user`** object where the **`sayHi`** method was called, so "Hello, John" is printed.

Now, let's try to rewrite **`sayHi`** with an arrow function:

```
javascriptCopy code
let user = { firstName: "John", sayHi: () => { console.log("Hello, " + this.firstName); } }; user.sayHi(); // This would output "Hello, undefined"

```

In this case, **`this`** no longer refers to the **`user`** object. That's because arrow functions don't have their own **`this`** context, they inherit it from the parent scope at the time they are created. In a browser, the parent scope would be the **`window`** object if the function is not inside any other object or function. In a Node.js environment, it would be the **`global`** object.

Therefore, you'd get "Hello, undefined", because there is no **`firstName`** property in the global or window scope. That's the main difference in how **`this`** is handled between arrow functions and regular functions.

javascriptCopy code

`let user = { firstName: "John", sayHi: function() { let arrowFunction = () => {console.log("Hello, " + this.firstName); } arrowFunction(); } }; user.sayHi(); // Outputs "Hello, John"`

1. Event Loops in Javascripst: Uses Stack ⇒ LetSay Function or API ⇒ EventQueue ⇒ Again Stack once its empty

### [Queue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#queue)

A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.

At some point during the [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#event_loop), the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).

In web browsers, messages are added anytime an event occurs and there is an event listener attached to it. If there is no listener, the event is lost. So a click on an element with a click event handler will add a message — likewise with any other event.

The first two arguments to the function `[setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)` are a message to add to the queue and a time value (optional; defaults to `0`). The *time value* represents the (minimum) delay after which the message will be pushed into the queue. If there is no other message in the queue, and the stack is empty, the message is processed right after the delay. However, if there are messages, the `setTimeout` message will have to wait for other messages to be processed. For this reason, the second argument indicates a *minimum* time — not a *guaranteed* time.

Let's dive into an example to illustrate how messages are added to the web browser's queue and how they are processed using the **`setTimeout`** function.

Consider the following JavaScript code:

```
javascriptCopy code
console.log("Start"); setTimeout(function() { console.log("Timeout 1"); }, 2000);setTimeout(function() { console.log("Timeout 2"); }, 0); console.log("End");

```

In this example, "Start" will be logged to the console immediately. Next, two messages are added to the message queue via **`setTimeout`**. The first **`setTimeout`** has a delay of 2000 milliseconds (or 2 seconds), and the second **`setTimeout`** has a delay of 0 milliseconds.

However, even though the second **`setTimeout`** has a delay of 0 milliseconds, the message it adds ("Timeout 2") isn't processed immediately. It must wait until the current execution context is finished and the JavaScript runtime has checked for any other messages in the queue.

So, "End" is logged next because **`console.log("End")`** is the next line of code that gets executed after setting up the timeouts. Only after all the initial synchronous code is executed, JavaScript runtime starts processing the messages from the queue.

Hence, the actual output will be:

```
sqlCopy code
Start End Timeout 2 Timeout 1

```

Despite **`setTimeout`** with "Timeout 1" being queued first, it's executed after "Timeout 2" because of its longer delay. Even with a delay of 0 milliseconds, "Timeout 2" doesn't execute until after all the initial code has completed, demonstrating that the delay parameter in **`setTimeout`** represents a minimum delay, not a guaranteed one.

1. **Promises in JavaScript (❗important) 🤝**

Promises are at the heart of Asynchronous JS.

> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
> 

A promise can be in one of these three states:

- Pending: initial state, neither fulfilled nor rejected
- Fulfilled: operation was completed successfully
- Rejected: operation failed

```jsx
const promise = new Promise((resolve, reject) => {
  let value = true
  if (value) {
    resolve('hey value is true')
  } else {
    reject('there was an error, value is false')
  }
})

promise
  .then((x) => {
    console.log(x)
  })
  .catch((err) => console.log(err))

```

**Note:** `resolve` and `reject` are just conventional names. Call it pizza🍕 if you like.

- Calling **`resolve(value)`** fulfills the promise with the given value.
- Calling **`reject(error)`** rejects the promise with the given error.

nstead of `then/catch`, we can also use `async/await`:

```jsx
async function asyncCall() {
  const result = await promise
  console.log(result)
}

asyncCall()
```

# Do this one again

### **📚 Polyfills in JavaScript**

> A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. MDN
> 
- Let's implement it for `map`:

```jsx
// this - array
// this[i] - current value
Array.prototype.myMap = function (cb) {
  var arr = []
  for (var i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this))
  }
  return arr
}

const arr = [1, 2, 3]
console.log(arr.myMap((a) => a * 2)) // [2, 4, 6]

```

Notice how we use `this`. Here, we have basically created a new array and are adding values to it.

# Most Important Interview Concept Async and Defer

When loading a webpage, the browser reads and executes the HTML from top to bottom. When it encounters a script tag, particularly one that links to an external JavaScript file, it stops building the DOM, fetches, and executes the script before resuming. This can lead to slower page load times if there are large scripts to load and execute. The **`async`** and **`defer`** attributes change this behavior.

Here's a brief summary of **`async`** and **`defer`**:

- **`async`**: The script is fetched asynchronously while the HTML document is parsing. Once the script is available, HTML parsing is paused to execute the script, then resumes.
- **`defer`**: The script is fetched asynchronously while the HTML document is parsing and is only executed after the HTML document has finished parsing (but before the **`DOMContentLoaded`** event).

Here's an example:

```html
htmlCopy code
<!DOCTYPE html> <html> <head> <script src="script1.js" defer></script> <scriptsrc="script2.js" async></script> </head> <body> <!-- Page content here --> </body></html>

```

In this example, **`script1.js`** has the **`defer`** attribute. The browser fetches it during HTML parsing but waits until after parsing is complete to execute it.

**`script2.js`** has the **`async`** attribute. The browser fetches it during HTML parsing and executes it as soon as it's available, which may be during HTML parsing if the script is fetched quickly. This could lead to a pause in the parsing of HTML, which is why **`async`** scripts should be independent of the document content.

Note: In the real-world application, it's a good practice to link all the scripts just before the closing **`</body>`** tag rather than in the **`<head>`** tag. This approach allows the visible parts of your HTML document to load and render first, making the site appear faster to your users. But the **`async`** and **`defer`** attributes allow for more flexibility by providing different options for when and how scripts are loaded and executed.

## Lambda and arrow functions:

1. What are lambda or arrow functions
    
    An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These functions are best suited for non-method functions, and they cannot be used as constructors.
    
    **[⬆ Back to Top](https://github.com/sudheerj/javascript-interview-questions#table-of-contents)**
    

## Currying Functions:

1. What is the currying function
    
    Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician **Haskell Curry**. By applying currying, a n-ary function turns it into a unary function.
    
    Let's take an example of n-ary function and how it turns into a currying function,
    
    `const multiArgFunction = (a, b, c) => a + b + c;
    console.log(multiArgFunction(1, 2, 3)); // 6
    
    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
    curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
    curryUnaryFunction(1)(2); // returns a function: c => 3 + c
    curryUnaryFunction(1)(2)(3); // returns the number 6`
    
    Curried functions are great to improve **code reusability** and **functional composition**.
    
    **[⬆ Back to Top](https://github.com/sudheerj/javascript-interview-questions#table-of-contents)**
    

## Pure Function

A **Pure function** is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.

Let's take an example to see the difference between pure and impure functions,

`//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]`

to console pureAddNumber we need to receive it as it returns whole new array we need to receive it somewhere therefore, we use let result = pureAddNumber(7)(numberArray)

tAs per the above code snippets, the **Push** function is impure itself by altering the array and returning a push number index independent of the parameter value. . Whereas **Concat** on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of the previous array.

Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and make it harder to break your application by not having any side effects. These principles are coming together with **Immutability** concept of ES6 by giving preference to **const** over **let** usage.

## Hoisting LET AND VAR

In JavaScript, "hoisting" is a behavior in which variable and function declarations are moved to the top of their containing scope during the compile phase, before the code has been executed. It's important to note that only the declarations are hoisted, not initializations. This means you can use variables and functions before they have been declared in the code.

For example:

```
javascriptCopy code
console.log(myVar); // Output: undefined var myVar = 5; console.log(myVar); // Output: 5

```

In the first line, **`myVar`** is **`undefined`** because only the declaration (**`var myVar`**) was hoisted, not the initialization (**`= 5`**). By the time the second **`console.log`** is run, **`myVar`** has been initialized with the value **`5`**.

For functions:

```
javascriptCopy code
console.log(myFunction()); // Output: "Hello, World!" function myFunction() { return"Hello, World!"; }

```

Even though **`myFunction()`** is called before the function is defined, it still works because the function declaration (and its body) was hoisted to the top of the scope.

It's important to know that the hoisting is handled differently for **`var`**, **`let`**, and **`const`**. While **`var`** is fully hoisted, **`let`** and **`const`** are semi-hoisted - they are hoisted to the top of the block, but you can't access them before the declaration as they are in a "temporal dead zone" from the start of the block until the declaration is processed.

For example:

```
javascriptCopy code
console.log(myLetVar); // Output: ReferenceError: myLetVar is not defined let myLetVar = 5;

```

### What is the difference between let and var

You can list out the differences in a tabular format

| var | let |
| --- | --- |
| It is been available from the beginning of JavaScript | Introduced as part of ES6 |
| It has function scope | It has block scope |
| Variables will be hoisted | Hoisted but not initialized |

## How will you declare switch block without any error?

1. How do you redeclare variables in switch block without an error
    
    If you try to redeclare variables in a `switch block` then it will cause errors because there is only one block. For example, the below code block throws a syntax error as below,
    
    `let counter = 1;
    switch (x) {
      case 0:
        let name;
        break;
    
      case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }`
    
    To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.
    
    `let counter = 1;
    switch (x) {
      case 0: {
        let name;
        break;
      }
      case 1: {
        let name; // No SyntaxError for redeclaration.
        break;
      }
    }`
    
    **[⬆ Back to Top](https://github.com/sudheerj/javascript-interview-questions#table-of-contents)**

## How to use these files?
Each file can be executed separately using Node.js. Ensure you have Node.js installed on your machine, then use the command node filename.js to run the file.

## Contribution
Contributions are welcomed. If you see an error or room for improvement, fork the repository and make the changes in your forked repository. Then create a pull request to this repository.
