
// Datatypes in Javascript:

// Examples of Primitive Datatypes:

// Numbers Data type:
let length = 16;
let age = 22

// Strings Data type:
let color = "Yellow";
let lastName = "Johnson";

// Booleans Data type:
let x = true;
let isloggedin = false;


// Undefined Data type:
let accountstate;          // If we declare a variable and do not assign a value to it, 
console.log(accountstate)  // then it shall print "undefined" as an output


// Null Datatype:
let state = null // Standalone value (It's a representation of an empty value)

// Examples of Non-Primitive (Reference) Datatypes:

// Object:
const person = {firstName:"John", lastName:"Doe"};

person[age] = "20Years"  // here "age" is the new key and "20years" is the new value, it gets added to the beginning of the object

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");



// Check the type of Datatype:

console.log(typeof (name))  // "typeof" is used to identify the datatype of a variable

console.log(typeof (accountstate))  // Output of this statement is undefined
console.log(typeof (state))         // Output of this statement is object



// If a data type is mutable, that means that you can change it. Mutability allows you to modify existing values without creating new ones.

// In Javascript only array and object are mutable.

// Unique example below:

console.log("rohith"-"patil")    // output will be NaN