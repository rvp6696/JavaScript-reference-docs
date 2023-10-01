
// Alternate way to declare a string

let gameName = new String("Welcome to new world")
console.log(gameName)


// There are two ways in which we can combine a string value

// string concatenation

let List1 = "Hello World, "
let List2 = "Welcome to coding community"

console.log(List1 + List2)

// string interpolation (modern way of syntax)-- this refers to template literals.... and also called string interpolation

console.log(`\n${List1} ${List2} and hope you would like to proceed.....`)   //   ` is a back ticks 
console.log(`Welcome to the world of "community"`)


// Escape character (\)

let newseg = 'this is a \'banana\''  
console.log(newseg)

// String Slicing (using various methods)

let newData = "Welcome to javascript"
console.log(newData[0])

console.log(newData.slice(0, ))   // it shall print till end of the index from left to right
console.log(newData.slice(0, newData.length))
console.log(newData.slice(2))  // // it shall print till end of the index starting from 2



// Upper and lower case in strings

 let newName="sigmamale"
 let alternateName="SIGMAFEMALE"

 console.log(newName.toUpperCase())
 console.log(alternateName.toLowerCase())

 // other string method

 let sentence = "Hello world, how are you ?"
 let word ="world"

 console.log(sentence.includes(word))  // returns a true value if the word is present in the sentence, else false

let ch1 = newData.replace("Welcome","Go")  // replace the word in a string
console.log(ch1)

let ch2 = ", again"
console.log(newData + ch2)   // used to concatenate two strings

console.log(newData.trim()) // used to remove whitespaces

// Extracting String characters
 
let result = sentence.charAt(0)      // returns character at specified index in a string
console.log(result) 

// Convert String to an Array 

let dataone = "1,2,3,4,5"
console.log(dataone.split(","))       // Split on commas


let datatwo = "1 2 3 4 5"
console.log(dataone.split(" "))   // Split on spaces