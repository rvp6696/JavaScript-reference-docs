// Variables in JS

console.log("\nvar is the basic method, no longer used since 2015")
var a = 100;  // declaration of variable a
console.log(a);

a=200;     // value change
console.log(a);

var a=900;   // re-declaration of variable a
console.log(a);  // var is allowing to re-declare the variable with same name, due to which its an issue for developer

console.log("---------Using let---------")

let b=300;          // declaration of variable b
console.log(b);

b=400;
console.log(b); // re-declaring is not allowed in this method but we can change the value of the variable b

console.log("---------Using const---------")

const c=600;
console.log(c); // re-declaring and changing the value of the variable is not allowed in this method (its constant variable)


// Please use Camel case to write variable names EX: myAge
// Variable names are case sensitive