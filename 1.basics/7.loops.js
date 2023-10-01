/*
    1. for loop
        i. for in loop
        ii. for of loop 
    2. while loop
    3. do-while loop
*/

// for loop 

/*  
    Structure of for loop:

    Note: ++ is increment by 1
          -- is decrement by 1

    for (init; condition; ++/--)
    {
        Statement
    }
*/ 

console.log("Ascending Order")
for (let i=10; i<=20; i++)
{
    console.log("The For Say :", i)
}

console.log("Descending Order")
for (let j=20; j>=10; j--)
{
    console.log("The For Say :", j)
}

console.log("Ascending Order increasing gap by 2")

for (let i=1; i<=20; i=i+2)
{
    console.log("The For Say :", i)
}

console.log("Even Numbers upto 20")
for (let i=2; i<=20; i=i+2)
{
    console.log("The For Say :", i)
}

// Nested for for loop

let count = 0
for ( let i=1; i<=10; i++)
{   
    count++;
    console.log(i,"From Outer For loop")

    for (let j=1; j<=i; j++)
    {
        console.log(j,"From inner For loop")
        count++;
    }
    console.log("\n--------------------------------------------\n")
}

console.log("The total count is",count)

// for in loop 

let data = {
    name : "Alex",
    age: "28",
    edu: "MCA",
    dob: "2000",
}
for (let a in data){
    console.log("details of users " + a + " is " + data[a])
    }


// for of loop

let newdata = ["rohith","alex","rajat","nitin"]
for (let b of newdata){
    console.log(b)
    }

for (let b of newdata[0]){
    console.log(b)
    }


// for in loops in arrays

for (let b in newdata){
    console.log(b)
    }    

for (let b in newdata[0]){
    console.log(b)
    }   



// while loop

let n = 5
let i =0
while (i<n) {
    console.log(i)
    i+=1
}

// do while

let a = 5
let b =0

do {
    console.log(b)
    b+=1
}
while (b<a) // here in do block runs first and then while condition is checked