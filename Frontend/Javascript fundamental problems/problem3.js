function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } 
  else {
    return false;
  }
}
let limit = 10;
for (let i = 0; i <= limit; i++)
  {
  let result  = isOdd(i);
  if (result === true) 
  {
    console.log(i, "is a odd number");
  }
}