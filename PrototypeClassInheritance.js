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
        super(fname, lname)
        this.isSuperHero = true
    }
    flightCrime(){
        console.log("Fighting Crime")
    }
}
const batman  = new Superhero("Bruce", "Wayne")
console.log(batman.sayMyName())