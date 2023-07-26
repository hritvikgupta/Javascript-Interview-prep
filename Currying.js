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

