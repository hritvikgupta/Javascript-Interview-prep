// In normal function we return the value after the last line is executed
// Or either we use try catch to catch and throw the error. 
function normalFunction(){
    console.log("Hello")
    console.log("world")
}

//But When we use a generator function, two main things occurs
//First it first stop midway and continue execution from where it stops
//Or we can say it pause the execution
// To do that we use yield keyword which pause the execution. 
//Everytime JS Encounters Yeild it pause the execution

function* generatorFunction(){
    yield("Hello")
    yield("world")
}
// a generator function returns the generator object which 
// itself a iterator
const generatorObject = generatorFunction()
//iterating the generator object
for(const obj of generatorObject){
    console.log(obj)
}