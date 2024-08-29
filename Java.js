

//Each variable & calculation operator

//Each equals code combination


//Assign three variables
let firstNum = 5 * 8;
console.log("firstNum--->", firstNum);
const secondNum = (10 + 10);
console.log("secondNum--->", secondNum);
const thirdNum = (80 / 2 - 1);
console.log("thirdNum--->", thirdNum);

//Create dialog box displaying the vault code
//You have received this message because you have been chosen to open an important vault. Here is the secret combination:
//Create a string for the user 
const string = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${firstNum} - ${secondNum} - ${thirdNum}`;
console.log(string);

//Add script tag or create a popup dialog
alert(string)