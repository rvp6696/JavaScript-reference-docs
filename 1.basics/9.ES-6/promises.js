
// below is example of promises with sync behavior
// to create promise object, we use promise constructor


let ticket = new Promise((resolve, reject) => {      // here promise is a constructor, here it takes function as an arguement

    let isBoarded = false
    if (isBoarded == true) {
        resolve('Your flight is ready to departure')
    } else {
        reject("Oh no, we missed the flight !")
    }
})

ticket.then((data) => {      // .then method is used with the callback when promise is fulfilled.
    console.log(data)
}).catch((error) => {        // .catch method is used with the callback when promise is rejected.
    console.log(error);
}).finally(()=> {
    console.log("Will be executed even if promise works or fails");
})




