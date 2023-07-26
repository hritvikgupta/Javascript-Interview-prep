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