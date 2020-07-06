function Add(a) {
  return function (b) {
    return a + b;
  };
}

let res = Add(2)(3); // 5
