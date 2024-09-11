
    // console.log("Masai School \n A Transforamtion in Education");
 


    // print the leap year from the range
    function leapYear(M,N){
        let M = 2000;
        let N = 2005;
        let leapYears = [];
    
        for (let year = M; year <= N; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                leapYears.push(year);
            }
        }
    
        console.log(leapYears.join(" "));
    }

    // if else, else if condition application
    function fizzBuzz(num){
  
        function fizzBuzz(num) {
      for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }
    }
    
      }

    //   print the range
    function loop1toN(num) {
        // Write code here
        for(let i = 1; i<=num; i++){
          console.log(i)
        }
    }

// print with loop
function printMasaiSchool(num) {
    // Write code here
  for (let i = 1; i <=num; i++){
    console.log("Masai School");
  }
}

// divisible number check using js
function divisibleBy4(N) {
    // Write code here
    if (N % 4 ===0){
      console.log("Yes");
      
      
    }
    else{
        console.log("No");
      }
}

// comparision operator
function sumAndCompare(one, two, three, four, five) {
    // Write code here
    
    let sum1 = one + two + three;
    let sum2 = four + five;
    if (sum1 > sum2){
      console.log("true");
    }
    else{
      console.log("false");
    }
}

// if else. conditional statment
function updateAndCompare(num1, num2, num3) {
    // Write code here 
    if (num1 > num2){
      console.log("true");
    }
    else{
      consoele.log("false");
    }
    
    num1 = num1 + num3;
    
    if (num1 > num2){
      console.log("true")
    }
    else {
      console.log("false")
    }
}

// power of the numbers
function productOfSix(one, two, three, four, five, six) {
    // Write code here
   console.log(one*two*three*four*five*six);
}

// multiply of the number
function multiplyBy50(number) {
    // Write code here
    console.log(number*50);
}

    