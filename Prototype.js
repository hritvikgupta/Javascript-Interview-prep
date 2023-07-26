//consider the below example
function Person(fname, lname){
    this.fname = fname
    this.lname = lname
}

const p1 = new Person("hritvik", "gupta")
const p2 = new Person("someone", "else")

p1.getFullname = function(){
    return this.fname + " " + this.lname
}
//In above case getfullname is a new property of person
//function that is assigned only to p1 and not to p2
//for the function p2 to get that value we use prototype
//in prototype we add prop to Person using inbuild property prototyp
//which points to an object
Person.prototype.getFullname = function(){
    return this.fname + " " + this.lname
}
console.log(p1.getFullname())
console.log(p2.getFullname())