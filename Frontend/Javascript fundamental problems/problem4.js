function calculateArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function calculateArrayAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return calculateArraySum(arr) / arr.length;
}
let arr=[1,2,3,4,5,6]
console.log(calculateArrayAverage(arr))

