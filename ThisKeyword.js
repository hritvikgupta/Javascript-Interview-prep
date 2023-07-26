//Implicit Binding
const person = {
    name:"hritvik",
    sayname:function(){
        console.log(`this is my name ${this.name}`)
    }
}
person.sayname()

//explicit binding
function saymyname (){
    console.log(`this is my name ${this.name}`)
}
//below is the inbuilt call method of any function in javascript
//which specifies the context in which the function is being called. 
saymyname.call(person)

//New Binding keyword
function Person(name){
    //this = {}
    this.name = name
}
// Whenever, A new keyword is used this object inside the called function
//invokes a new object
const p1 = new Person("hritvik")
const p2 = new Person("Gupta")

// Default Binding
//If i call the sayname function without any binding 
//then it will output my name is undefined
//javascript tries to find the name var in global scope
//but as it couldn't find it so it make it undefined
saymyname()
//but if we do this 
globalThis.name ="superman"
saymyname()