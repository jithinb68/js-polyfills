let myArr = ['j', 'i', 't', 'h', 'i', 'n'];

function joinPolyfill(arr, param) {
  let str = '';
  for (const item in arr) {
    str += `${arr[item]}${param}`;
  }
  return str;
}

let result = joinPolyfill(myArr, '$');
console.log(result);
