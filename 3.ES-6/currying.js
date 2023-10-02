
// Currying in JS

let data = (a) => {
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}

let result = data(2)(4)(10)    // this is called currying
console.log(result)