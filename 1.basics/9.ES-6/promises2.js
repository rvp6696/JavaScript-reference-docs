
// below is example of promises with async behavior

let flightStatus = (status) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let details = status
            if (details == "ontime") {
                resolve("Hurry, your flight is on time")
            } else {
                reject("Your flight has been delayed !")
            }
        }, 3000)
    })
}


let boarding = (userdata) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = userdata
            if (data == "onboarded") {
                resolve("Please have a seat, you will be directed to the flight soon")
            } else {
                reject("Sorry, you cannot proceed with your journey as borading process in not completed")
            }
        }, 4000)
    })
}

let user = (journey) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let userstatus = journey
            if (userstatus == "inflight"){
                resolve("Have a safe journey !")
            } else {
                reject("Warning : You have not entered  the flight yet !")
            }
        },5000)

    })
}


flightStatus("ontime").then((data) => {                 // chaining
    console.log(data)
    return boarding("onboarded")
}).then((data) => {
    console.log(data)
    return user("inflight")
}).then((data)=> {
    console.log(data)
}).catch((error) => {
    console.log(error)
}).finally(()=>{
    console.log("Process ends here, Thank you !")
})

