// Leap Year Code

let leapYear = (data) => {
    if (data % 4 == 0) {
        if (data%100 != 0){
            if(data%400==0){
                console.log(`${data} is a leap year`)
            }
            else {
                console.log(`${data} is not a leap year`)
            }
        }
        else {
            console.log(`${data} is a leap year`)
        }
        
    }
    else (
        console.log(`${data} is not a leap year`)
    )
    
}

leapYear(2017)



