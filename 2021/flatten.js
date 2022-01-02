
Array.prototype.myflat = function() {
    let myArray = [...this];
    let flattenedArr = []
    while(myArray.length) {
        let poppedVal = myArray.pop();
        if(Array.isArray(poppedVal)) {
            myArray.push(...poppedVal);
        } else {
            flattenedArr.push(poppedVal);
        }
    }
    return flattenedArr.reverse();
}


function myFlatten(arr) {
    let newArr = [];
    arr.forEach(element => {
        if(Array.isArray(element)) {
            newArr.push(...myFlatten(element));
        } else {
            newArr.push(element);
        }
    });
    return newArr
}

const nested = [1, 2, 3, [4, 5, [6, 7, [10, 11], 8, 9]]]

// Method 1
let flattenedArr1 = nested.myflat();
console.log(flattenedArr1);

// Method 2
let flattenedArr2 = myFlatten(nested);
console.log(flattenedArr2);