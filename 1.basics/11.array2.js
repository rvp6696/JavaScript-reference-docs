// Display elements of an array using for loop

let itemList= ["mouse", "keyboard", "scanner", "printer","mobile","laptop"]

console.log("----Using for loop----")
for (let i=0; i<itemList.length; i++)
{
    console.log(i,itemList[i])
}

// Display elements of an array using while loop
console.log("----Using while loop-----")
let j=0
while(j<itemList.length)
{
    console.log(j,itemList[j])
    j++
}

// Display elements of an array using map() as listing function

// 1st method:

console.log("----Using map function-----")    // function within is called a call back function as inside a function it calls another function

itemList.map( function(value,index) {
    console.log(value,"=======",index)
} )  

// 2nd method (most widely used) IMP*
console.log("-----The map() most used method\n")   // this method is using fat arrow which is this "=>"

itemList.map((value,index)=>{
    console.log(index,"------",value)
})

// Display elements of an array using forEach() as listing function

// 1st Method

console.log("------Using forEach() -------")

itemList.forEach((value,index,array)=>{                             // array is the third parameter used in both map and forEach function but its not mandatory
    console.log(index,"-------",value)
})

//2nd Method

console.log("------Using forEach() call back function-------")

itemList.forEach(function(value,index){
    console.log(index,"----",value)
})