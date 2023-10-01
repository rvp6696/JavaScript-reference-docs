//------------------------------Conditional Statement-------------------------------

/*
    1. if statement
    2. if else statement
    3. if...else if..else if...else statement
    4. switch case statement
*/


// 1. if statement

let ageLimit = 40

if (ageLimit > 21) {
    console.log("You are eligible to drive")
}


// 2. if else statement

let Limit = 1

if (Limit > 21) {
    console.log("You are eligible to drive")
}
else {
    console.log("You are not eligible to drive")
}


// 3.if...else if..else if...else statement

let marks = 70

if (marks>=80) 
    {
        console.log("1 : Result is 1st Grade");
    }
else if (marks>=70 && marks<80 ) 
    {
        console.log("2 : Result is 2nd Grade");
    }
else if (marks>=60 && marks<70)
    {
        console.log("3 : Result is 3rd Grade");
    }
else 
    {
        console.log("4 : Result if Fail, try again next year");
    }

// Nested if-else :

let age = 25
let gender = "female"

if ( isNaN(age)) {
    console.log(age,"is a string type");
}
else {
    console.log(age,"is a number type");
    if (gender == "female")                     // checks the equality
    console.log("person is a female candidate")
    else
    console.log("person is a male candidate")
    if (age>=50)
    console.log("Old age person")
    else
    console.log("Young age person")
}

// 4. switch case statement  (Switch case is used to check 100% matching condition.)

let newData = "home.html"
switch (newData) {
    case "home.html":
        console.log("Welcome to Home")
        break

    case "study.html":
        console.log("Welcome to Home")
        break

    case "work.html":
        console.log("Welcome to Home")
        break

    case "document.html":
        console.log("Welcome to Home")
        break
}

// Ternary Operator 

let mark = 10
console.log(mark >= 20 ? "Pass" : "Fail")
