// Closure in JS


let data = (a) => {
    console.log(`Your number is ${a}`)
    let c = 10
    return function (b) {
        return a+b+c
    }
}


let result = data(5)
console.log(result(5))