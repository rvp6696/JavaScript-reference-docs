
// Array loop methods

// Array.from concept

let data = "rohith"
let result = Array.from(data)   // converts the string to an array of element
console.log(result)   // used to create an array from object


// for in 

for (let i in data) {
    console.log(i)
}   // easy way to access the index's inside an array 


// for of 

for (let i of data) {
    console.log(i)
}   // easy way to access the values inside an array 


// Modern JS methods : map, filter and reduce

// forEach

let num = [1,2,3,4,5,6,7]

num.forEach((value,index) => {     // forEach is used when we want to perform some operations on existing element in an array
    console.log(value)
})

// example 2 (forEach)
num.forEach((value,index,array) => {     // value, index and array are some additional arguements we use in map and forEach
    console.log(value, index, array)
})

// map

let finalarr = num.map((value,index) => {     // map is used when we want to create a new array by performing operation on each element
    return value
})

console.log(finalarr)


// filter

let numarr = [10,2,48,96,45,83,82,11]
let resnum = numarr.filter((data) =>{       // used to filter array of values that satisfy a condition 
    return data > 50
})
console.log(resnum)


// Reduce method:

// it executes a reducer function on each element of array, resulting in single output value.

// it takes 4 arguements: accumulator, current value, current index, source array

let numarr2 = [5,6,2]
let finalnumar = numarr2.reduce((accumulator,value,index,array)=> {   // reduce to a single value by running this function
    return accumulator += value
})
console.log(finalnumar)


// map() VS forEach():

// map() : returns a new array without mutating the original array


// map() does not edit original array like forEach();

let dataValues = [40,24,35,64,10,7,69,43]

let newData = dataValues.filter((data,index) => {
    return data < 50
})

let finalData = newData.map ((details,index) => {
    return details
})

console.log(finalData)



