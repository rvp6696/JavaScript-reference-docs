// Multi Dimensional Array

const myArr = ["laptop","mobile","earphone"]
const myArr2 = ["sky","planet","universe"]

myArr.push(myArr2)

console.log(myArr)

// Indexing in Multi Dimensional Array

console.log(myArr[3][1]) 

// Concatenation of two arrays (merging)

const myArr3 = ["laptop","mobile","earphone"]
const myArr4 = ["sky","planet","universe"]

let result = myArr3.concat(myArr4)
console.log(result)


// Spread method to merge arrays

   let n1 = ["laptop","mobile","earphone"]
   let n2 = ["sky","planet","universe"]

   let final = [...n1, ...n2]  // using this method we can merge multiple array at once
   console.log(final)


// segregate the elements of multi dimensional array into 1D array: 

let anotherArray = [1,2,3,[4,5,6],7,[8,9]]

let last = anotherArray.flat(2)
console.log(last)


console.log(Array.isArray("Rohith"))  // check whether the array is an array or not 
console.log(Array.from("Rohith"))  // convert into an array

// converting list of numbers into an array

let num1 =10
let num2=20
let num3=30

let total = Array.of(num1,num2,num3)
console.log(total)







