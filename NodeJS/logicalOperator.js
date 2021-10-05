var a = 20
var b = 30
var c = 50
var d = 60

var result = !(a<30)
console.log(result)


var result = !!(a<30)
console.log(result)


// true && true = true
// true && false = false
// false && true = false
// false & false = false

if(a<b && c<d){
    console.log("B is greater than a and d is greater than c")
}

if(a>b && c<d){
    console.log("B is greater than a and d is greater than c")
}else{
    console.log("One condition is false")
}

// true || true = true
// true || false = true
// false || true = true
// false  || false = false


if(a>b || c<d){
    console.log(" d is greater than c")
}else{
    console.log("One condition is false")
}
