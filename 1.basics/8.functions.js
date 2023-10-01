// ------------------------functions in JS -------------------------

// Creating function

//1st method (normal function)
function one(){                                                   
    console.log("The one is working...")                  
}      // function definition


// 2nd method (first class function)
var two = function(){                            // (function without name is called anonymous function)
    console.log("The two is working...")
}      // function definition

// 3rd method  (fat arrow function) -- widely used

let three = () => {
    console.log("The three is working...")
}     // function definition


one()
two()
three()



// Static method to create and use a function:


const year = () => {
    console.log("The Year list")

    for(let i=2015; i<=2023; i++){
        console.log(i)
    }
    console.log("----END----")
}
   
year()    // using the defined function many times is called "function reusability"


// Dynamic method to create and use a function:

const yearData = (start,end) => {
    console.log("The Year list")

    for(let i=start; i<=end; i++){
        console.log(i)
    }
    console.log("----END----")
}



yearData(2019,2023)  // here we pass both the attributes through the parameters start & end into the function one
yearData(2020,2023)



// Function without a return value (function with optional parameter)

const sum = (n1 = 0, n2 = 0, n3 = 0) => {                 // function with optional parameter i,e, we can pass values or all 3 shall be 0.
    let result = n1 + n2 + n3
    console.log(result)
}

sum(10)
sum(10, 20)
sum(0,20,30)
sum(10, 20, 30)    // the fault values of n1,n2,n3 will be replaced with these values as they are passed through parameter
sum()              // incase if we do not pass any parameter in such cases n1,n2,n3 will proceed with default values


// Function with a return value

const data = (n1 = 0, n2 = 0) => {                 // function with optional parameter 
    let n3=n1+n2
    return n3                                     // function will return value of n3
}

console.log(data(10,20))  //method 1 to print the value returned by a function

let total=data(10,40)   // method 2 to print the value returned by a function
console.log(total)