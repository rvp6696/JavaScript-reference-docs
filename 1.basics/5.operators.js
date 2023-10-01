/******************************** Operators in Javascript ***********************************************/

let value = 3
let value2 = -value
let a = 10
let b = 20

console.log(value2)


console.log(a + b)    //Addition
console.log(b - a)    //Subtraction
console.log(a * b)    //Multiply
console.log(b / a)    //Divide
console.log(a % b)    //Modulus (reminder)
console.log(a ** b)   //Power


//String Concatenation

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2

console.log(str1, str2)
console.log(str3)


//String & Number Concatenation

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")


console.log(true)  //Boolean
console.log(Number(true))  // Boolean converted to Number


// Prefix and Postfix increment operator

let i = 100

console.log(i++)  // first the value of i will be printed and then will be incremented by 1.
console.log(++i)  // first the value of i will be incremented by 1 nd then it shall be printed.

console.log(i--)  // first the value of i will be printed and then will be decremented by 1.
console.log(--i)  // first the value of i will be decremented by 1 nd then it shall be printed.

// ternary operator syntax:

// condition ? exp1: exp2