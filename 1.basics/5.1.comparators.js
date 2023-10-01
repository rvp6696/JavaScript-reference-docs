// Basic Comparisions

console.log(2 > 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)
console.log(2 <= 1)


/* NOTE: Please make sure that before comparing two data, their datatype should be same */

// Please avoid all the below kind of operator comparisions as we need to maintain a clean code

console.log("---------------")
console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)


// === is used for strict check
console.log("---------------")
console.log("2" === 2) // here JS not only check 2, but also checks whether both the datatypes are matching or not

// Datatype Conversion Operations
let score = "33"
console.log(typeof score)
let newscore = Number(score)
console.log(typeof newscore)

// Initially score is String
score ="23abc"
let latestscore = Number(score)
console.log(typeof latestscore)
console.log(latestscore)      // NaN refers to not a number

// Initially score is null
score = null
let score2 = Number(score)
console.log(typeof score2)
console.log(score2)      // Null shows a output value 0


// Initially score is undefined
score = undefined
let score3 = Number(score)
console.log(typeof score3)
console.log(score3)      // undefined shows a output value Nan

/* 
    When we try to convert into Number datatype this is what we observe:
    
    "33" > 33
    "33abc" > NaN
    "true" > 1
    "false" > 0
*/

