

class Myclass{

    // all three functions are assets of Myclass

    static home = () => {
        console.log("Welcome to home")
    }

    static about = () => {
        console.log("About Us")
    }

    contact = () => {
        console.log("Contact Us")
    }
}

const obj1 = new Myclass()    //object  , new keyword is used to allocate the memory , here myclass will send address of Myclass()

// Static functions
Myclass.home()  // we call with class name
Myclass.about()


// Non-Static functions 
obj1.contact()    // we call with object name