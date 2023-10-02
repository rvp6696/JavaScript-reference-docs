// Prototype in JS


let obj1 = {
    name : "Rohith",
    getName : function () {
        return this.name
    }
}

let obj2 = {
    age: 29
}

let obj3 = {
    rollno : 27,
    __proto__ : obj1
}

console.log(obj3.getName())


// with the help of prototype we can create our own methods 

/* Ex: Array.prototype.nameshowing=function () {
    return this
}

*/