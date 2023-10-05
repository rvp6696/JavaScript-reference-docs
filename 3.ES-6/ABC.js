
// ABC of JS:  (used to switch the context of "this")

/*
    1. Appply 
    2. Bind 
    3. Call 

   holds the reference after execution

    > 
*/

// Call function :   passess the current execution context to another function
// Example 1
let userDetails = {
    name:"Rohith",
    age: 27,
    designation:"Developer",
    printDetails : function () {
        console.log(this.age)
    }
}

userDetails.printDetails()

let userDetails2 = {
    name:"Rajat",
    age: 2,
    designation:"Devops Engineer",
}

userDetails.printDetails.call(userDetails2)  // call function

// Example 2

let userone = {
    name:"Rohith",
    age: 27,
    designation:"Developer"  
}

let printDetails = function () {
    console.log(this.name)
}

printDetails.call(userone)

let usertwo = {
    name:"Rajat",
    age: 2,
    designation:"Devops Engineer",
}

printDetails.call(usertwo)

// Example 3

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// Apply function :


let printDetailsnew = function (city) {
    console.log(`${this.name} ${city}`)
}

printDetailsnew.call(userone,"Bangalore")   // comparision of call and apply

printDetailsnew.apply(usertwo, ["Chennai"]) // apply function

// Bind function:

let newdetails = printDetailsnew.bind(userone, "Kolkata")
console.log(newdetails())     // bind function