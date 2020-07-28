let input = document.getElementById("input");

input.addEventListener("input", elem => {
  let re = /(^[1-9]$|^0$|^0[1-9]$|^0[1-9]\/$|^0[1-9]\/\d{0,2}$|^1$|^1[0-2]$|^1[0-2]\/$|^1[0-2]\/\d{0,2}$)/;
  let newValue = elem.target.value.replace(/^[1-9]\//, `0${elem.target.value}`);
  elem.target.value = newValue.match(re) ? newValue : newValue.slice(0, -1);
});
