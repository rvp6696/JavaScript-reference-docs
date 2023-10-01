
// Variables Scope in JS

console.log("The Scope of Variable")

let x=500;
const y=700;

if (100>50) {
    var a = "Bangalore";
    let b = "Mumbai";
    const c = "Chennai";
    console.log(a);             
    console.log(b);
    console.log(c);    
    console.log(x);
    console.log(y);
}
    console.log("Out of Block.....")
    console.log(a);
    console.log(b);

    console.log("Out of Block.....")
    console.log(a);
    console.log(c);
    

    // anything inside {} is called a block
    // in above example, a is global variable and b,c are block level variable (local variable) inside the block
    // x, y variables are global variables which can also be used inside the block