
// Lexical Scoping in JS

/*
    1. All inner functions can access data from the outer function(parent)
    2. If  two seperate functions wriiten inside a function, then these both cannot access each others data.
    3. Outer functions cannot access data from child/inner functions

*/

// Closure in JS


let data = (a) => {
    console.log(`Your number is ${a}`)
    let c = 10
    return function (b) {
        return a+b+c
    }
}


let result = data(5)    // here the enitre Lexical scope moves to "result"
console.log(result(5))