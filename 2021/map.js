let myArray = [1, 2, 3, 4, 5];

Array.prototype.myMap = function(callback) {
    let newArray = []
    for(var i=0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

let myNew = myArray.myMap((item) => {
    return item * 2;
});

console.log(myNew);