// Creating an Object 

let user = { fullname: "alex", age: "40 years", education: "MCA", city: "Bangalore" }
console.log("The details of an User")
console.log(user)

//Print data individually

console.log(user.fullname)
console.log(user.age);
console.log(user.education);
console.log(user.city);


// Array of Objects

console.log("-------Array of Object-------")

let userList = [
    { fullname: "Alex", age: "40 years", education: "MCA", city: "Bangalore" },
    { fullname: "Amir", age: "32 years", education: "BCA", city: "Pune" },
    { fullname: "Sumit", age: "25 years", education: "BE", city: "Chennai" },
    { fullname: "Ali", age: "49 years", education: "BTech", city: "Mumbai" }
]

console.log(userList);


// Reading data from an Array of Objects

userList.map((myuser, index) => {
    console.log(myuser.fullname, myuser.age, myuser.education, myuser.city)
    console.log("-----------------------")
})

// Nested Array of Objects

let customer = [
    { city: "bangalore", user: ["Manoj", "Prasad", "Suraj", "Alex"] },
    { city: "mumbai", user: ["Santosh", "Sunil"] },
    { city: "chennai", user: ["Aditya", "Sanmukh", "raj"] }
]

customer.map((info, index) => {
    console.log(index, ".", info.city)
    console.log("----------------")

    for (let i = 0; i < info.user.length; i++) {
        console.log("\t",info.user[i])
    }
})
