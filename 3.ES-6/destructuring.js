
// destructuring an array

let values = [1,2,3,4,5,6,7]
let [a,b,c] = values

let [x,,y] = values

console.log(a,b,c)
console.log(x,y)



// destructuring an object

let dataSet = {name:"Alex", age:"40", country:"India"}

let {name,age} = dataSet

console.log(name,age)


