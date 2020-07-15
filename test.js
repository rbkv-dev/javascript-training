function Add(a) {
  return function (b) {
    return a + b;
  };
}
console.log("Add", Add(2)(3)); // 5

function pow(num, i) {
  if (i == 1) return num;
  return num * pow(num, --i);
}
console.log("pow", pow(2, 3)); // 8

function newPow(num) {
  return function newPow(i) {
    if (i == 1) return num;
    return num * pow(num, --i);
  };
}
console.log("newPow", newPow(2)(3)); // 8
