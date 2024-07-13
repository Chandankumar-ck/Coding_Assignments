function convertToLowerCase(char) {
    return char.toLowerCase();
}

function convertWordToLowerCase(word) {
    return word.toLowerCase();
}

function convertArrayToLowerCase(arr) {
    return arr.map(word => convertWordToLowerCase(word));
}

let input = ["CHANDAN", "KUMAR", "MALIK"];
let output = convertArrayToLowerCase(input);
console.log(output);
