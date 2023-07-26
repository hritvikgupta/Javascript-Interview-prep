// below is object without inbuilt iterator where we build custome one
// but there are some which has inbuilt iterator, which are map, set, arr, string etc. 
// Two things to remember which are iterables and iterator
//const obj is iterable which contain and iterator,
// an iterator must have a method next which accepts no argument
// and it mush return object containing value:, {done(bool):}
const obj = {
    [Symbol.iterator]:function(){
        let step = 0
        const iterator = {
            next:function(){
                step++
                if (step===1){
                    return {value:"hello", done:false}
                }else if (step===2){
                    return {value:"world", done:false}
                }
                return {value:undefined, done:true}
                
            },
        }
        return iterator
    }
}

for(const word of obj){
    console.log(word)
}