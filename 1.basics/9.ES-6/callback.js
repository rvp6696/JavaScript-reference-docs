
let calc = (a,b, operation) => {
    return (
        operation(a,b)
    )
}

let result = calc(40,20, function(n1,n2) {         // function is passed as an arguement into "operation" parameter
return n1+n2
})

let sub = (n1,n2) => n1-n2

let subresult = calc(50,20,sub)                  // another method to pass a function as arguement

console.log(result)
console.log(subresult)


// examples: map(), forEach() , filter(), find(), findIndex()