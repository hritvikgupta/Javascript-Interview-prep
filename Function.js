let numberarray = []
const impureNumber = (number)=> numberarray.push(number)
const pureAddNumber = (number)=>(argNumber)=>argNumber.concat([number])
console.log(impureNumber(6))
console.log(numberarray)
console.log(pureAddNumber(7)(numberarray))
let result = pureAddNumber(7)(numberarray) // You need to use this to store results from pura add number 
console.log(numberarray)
console.log(result)
