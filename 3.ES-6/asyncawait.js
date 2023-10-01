

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


const process = async() => {
    try {                                           // try and catch is used to showcase the reject message if promise gets rejected
        const step1 = await flightStatus("ontime")
        console.log(step1)
        const step2 = await boarding("onboarded")
        console.log(step2)
        const step3 = await user("")
        console.log(step3)
    } catch (error) {
        console.log(error)
    }
}


console.log(process())


