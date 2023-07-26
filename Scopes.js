var a = 10
function outer(){
    var b =20
    function inner(){
        var c = 30
        console.log(a, b, c)
    }
    inner()
}
outer()