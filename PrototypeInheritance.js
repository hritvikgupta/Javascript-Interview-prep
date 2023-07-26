//consider the below example
function Person(fname, lname){
    this.fname = fname
    this.lname = lname
}

Person.prototype.getFullname = function(){
    return this.fname + " " + this.lname
}

//Now we create a another function superhero which inherits the 
//Person function
function Superhero(fname, lname){
    //In below we use call to pass the context in which the Person
    //will be called which is "this of superman" and args it accepts
    Person.call(this, fname, lname)
    this.fightCrime = true
}
Superhero.prototype = function(){
    console.log("Fighting Crime")
}

//Now to inherit the prototype property of Person we use Chain method
//In chain method we use Object.create(Person.Prootype)
Superhero.prototype = Object.create(Person.prototype)
//When called first, Above Javascript first checks if prototype object
//of superhero has property getfull name. If not then it checks the property of Prototype
//of person

//create the instance of Superhero using new keyword
const batman = new Superhero("bruce","wayne")
Superhero.prototype.constructor = Superhero
//above line ensures javascript that Superhero is not 
//created from Person but a different function that inherit Person Function.
console.log(batman.getFullname())