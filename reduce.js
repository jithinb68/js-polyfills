let myArray = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function(fn, initial) {
    let values = this;
    values.forEach((item) => {
        initial = initial !== undefined ? fn(initial, item) : item
    })
    return initial
}

const result = myArray.myReduce((curr, acc) => {
    return curr + acc;
})

console.log(result);