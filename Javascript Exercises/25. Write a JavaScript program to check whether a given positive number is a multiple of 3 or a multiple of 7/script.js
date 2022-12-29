checkNumber = (a) => {
  if (a % 3 == 0 || a % 7 == 0)
  {
    return true;
  } 
    else {
      return false;
    }
}

console.log(checkNumber(15));
console.log(checkNumber(22));
console.log(checkNumber(29));
console.log(checkNumber(30));
console.log(checkNumber(14));

