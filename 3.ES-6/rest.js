
/* Example of rest operator*/
let dataSet = (a,b,c, ...d) => {    // here ...d performs the rest operation and extra values of an array are stored in parameter d
    console.log(a,b,c,d)
}

dataSet(1,2,3,4,5,6,7)


/* Example of Spread operator*/

let values = [1,2,3,4,5,6,6,7]
let data =[...values]
console.log(data)
