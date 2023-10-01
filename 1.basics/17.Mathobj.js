//----------------------- Numbers in JS----------------------------------





// -----------------Math in JS ---------------------------------------

console.log(Math.abs(-40))   // converts the negative values to positve (does not work the other way around)
console.log(Math.round(4.633)) // round off happens to nearest whole number 
console.log(Math.ceil(4.633))  // rounds off to the next whole number with default
console.log(Math.floor(4.633))  // rounds off to the previous whole number with default
console.log(Math.min(2, 3, 4, 5, 6)) // finds the lowest number in the array of numbers
console.log(Math.max(2, 3, 4, 5, 6)) // finds the highest number in the array of numbers

//Generate Random numbers
console.log(Math.random())  // generates a random value between 0 and 1
console.log((Math.random() * 10) + 1) // generates a random value between 0 and 9

//----------------------------Examples----------------------------------------

let n = Math.random()

// rolling a dice which has 6 sides to it

n=(n*10)+1   // we add one to avoid the occurance of value 0
let state = Math.floor(n)
console.log(state)


// percentage generator

let m= Math.random()*100
let k=Math.floor(m)
console.log(`${k}%`)