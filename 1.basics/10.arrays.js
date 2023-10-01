
// Array is a collection of multiple elements of same or different datatypes inside [] brackets.

// Below Two methods to create an array in JS

let item = ["Apple","Potato","Milk","Water","Rice","Orange"]
let product = new Array("Mouse", "keyboard", "scanner", "printer")

console.log(item.length)
console.log(product.length)

/*
Structure of an array:

arrayname[index]=>Element

item[0] > Apple
item[1] > Potato
item[2] > Milk
item[3] > Water
item[4] > Rice

*/

// How to print last element of an array (Static method)

console.log(item[3])     // traversal in an array

// How to print last element of an array (Dynamic method)

console.log(item[item.length-1])


// CRUD in array (create, read, update and delete)

// Adding an element to an array

item.push(6)
console.log(myArr2)

// Removing an element to an array

item.pop()
console.log(myArr3)

// Adding an element in the starting of an array

item.unshift(9)
console.log(myArr3)

// Removing an element in the starting of an array

item.shift(9)
console.log(myArr3)

// search whether a number exists in an array

console.log(item.includes(5))  // ouput shall be boolean

// display index value of a number exists in an array

console.log(item.indexOf(3)) // shows the index value whether the number exists

// convert datatype from array to string

let newArray = item.join()
console.log(item)
console.log(newArray)  // output is a string

// Slice VS Splice

// Slice

let myn1 = item.slice(0,4)
let myn5 = item.slice(2)

console.log(myn1)
console.log(myn5)
console.log(item)


//Splice


let myn2 = item.splice(1,2,50,60)  // can be used to add new element to array and remove selected element
console.log(myn2)
console.log(item)

// Array converted to string

let newtext = [1,7,0]
let result = newtext.toString()
console.log(result)
console.log(typeof(result))


// Array element seperator

let num1 = [2,3,2023]
let resultnew = num1.join("-") // joins all array elements using seperator
console.log(typeof(resultnew)) 
console.log(resultnew) 


// Deleting a specific element in an array

let arr2 = [1,2,33,45,92,84,67]
delete arr2[3]     // but here array length will not be affected using this method
console.log(arr2)

// Array Concatination

let array1 = [1,2,3,4]
let array2 = [5,6,7,8]
let final = array1.concat(array2)
console.log(final)

// Array sort alphabatically

let numstack = [7,3,9,6,1,8,112,761,542,156]
let finalnum = numstack.sort()  // it only sorts alphabatically 
console.log(finalnum)


// Array sort numerically 

let compare = (a,b) => {
    return a - b   // return b - a for descending order
}

let numstack2 = [7,3,9,6,1,8,112,761,542,156]
let finalnum2 = numstack2.sort(compare)  
console.log(finalnum2)


// Array reverse


let numstack1 = [7,3,9,6,1,8]
let finalnum1 = numstack1.sort().reverse()  // numbers and alphabets will be sorted in ascensing order, reverse will reverse the elements in an array
console.log(finalnum1)


// Reverse an array 

let itemList= ["Mouse", "Keyboard","Printer", "Scanner", "Mobile","Laptop"]

itemList.reverse().map((itemname,index)=>{
    console.log(index,".",itemname)
})

// Reverse an array alphabatically Ascending order

console.log("-------------------");

itemList.sort().map((itemname,index)=>{
    console.log(index,".",itemname)
})

// Reverse an array alphabatically Descending order
console.log("-------------------");

itemList.sort().reverse().map((itemname,index)=>{
    console.log(index,".",itemname)
})