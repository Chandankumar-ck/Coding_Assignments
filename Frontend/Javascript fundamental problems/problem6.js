function swapCase(Data) {
  let Result = "";
  for (let i = 0; i < Data.length; i++) {
    if (Data[i] === Data[i].toUpperCase()) {
      Result = Result + Data[i].toLowerCase();
    } else {
      Result = Result + Data[i].toUpperCase();
    }
  }
  return Result;
}

function printSwappedCase(Data) {
  console.log(swapCase(Data));
}

printSwappedCase("Chandan Kumar \n Student  Of Masai School");
