let myArray = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function(callback) {
    for(var i=0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

// Does not wait for promise

let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b)
{
  return a + b
}

ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating)
})

console.log(sum)
// Naively expected output: 14
// Actual output: 0