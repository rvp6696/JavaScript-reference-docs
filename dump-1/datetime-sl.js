
//-------------------Date---------------------------------

let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())


// Setting a date on own 

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let newDate = new Date("2023-01-14")  // yyyy-mm-dd
console.log(newDate.toDateString())

let newDate2 = new Date("12-02-2023")  // mm-dd-yyyy
console.log(newDate2.toDateString())


// Setting a date and time

let myCreatedDate2 = new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString())


//----------------------Time---------------------------------

let myTime = Date.now()
console.log(myTime)    // time will be in milli-seconds

let curDate = new Date(2023,7,27)
console.log(curDate.getTime())  // time will be in milli-seconds