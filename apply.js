let myObj1 = {
    firstName: 'Jithin',
    lastName: 'Biju',
    printFullname: function(...args) {
        console.log(`${this.firstName} ${this.lastName} district ${args[0]} state ${args[1]}`)
    }
}

let myObj2 = {
    firstName: 'Abhijith',
    lastName: 'V',
}

Object.prototype.myApply = function(context, args) {
    this.call(context, ...args);
}