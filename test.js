function Add(a) {
  return function (b) {
    return a + b;
  };
}
// console.log("Add", Add(2)(3)); // 5

function pow(num, i) {
  if (i == 1) return num;
  return num * pow(num, --i);
}
// console.log("pow", pow(2, 3)); // 8

// function map(array, func) {
//   let tmpArr = [];
//   for (let i = 0; i < array.length; i++) {
//     tmpArr.push(func(array[i], i, array));
//   }
//   return tmpArr;
// }

// let new1 = map([1, 2, 3, 4, 5], (elem, index, array) => {
//   console.log("elem", elem);
//   return elem * 2;
// });
// console.log(new1);

function pow(num) {
  return function (i) {
    if (i == 1) return num;
    return num * pow(num)(--i);
  };
}

console.log(pow(2)(3));
