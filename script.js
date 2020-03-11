// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specials = ["!", "@", "#", "$", "%", "&", "*"];
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var userChoice = [];
  var password = [];
  var howLong = parseInt(prompt("Please choose a length between 8 and 128 characters for your password"));
  var hasNums = confirm("Would you like to include numbers?");
  var hasLower = confirm("Would you like your password to include lowercase letters?");
  var hasUpper = confirm("Would you like your password to include uppercase letters?");
  var hasChars = confirm("Would you like your password to include special characters?");


  if (howLong >= 8 && howLong <= 128 && typeof howLong === "number") {
    if (hasNums || hasLower || hasUpper || hasChars) {
      makeArr();
    } else {
      alert("Password must include characters!");
    }
  } else {
    alert("must be number between 8 and 128");
  }


  // I tried a few different ways to get the userChoice array. Doing a slice with no argument each time through the iteration worked okay, but what I did below makes the most sense to me... 

  function makeArr() {

    if (hasNums) {
      for (let i = 0; i < numbers.length; i++) {
        userChoice[userChoice.length] = numbers[i];
      }
    }

    if (hasLower) {
      for (let j = 0; j < letters.length; j++) {
        userChoice[userChoice.length] = letters[j];
      }
    }

    if (hasUpper) {
      for (let k = 0; k < letters.length; k++) {
        userChoice[userChoice.length] = letters[k].toUpperCase();
      }
    }

    if (hasChars) {
      for (let l = 0; l < specials.length; l++) {
        userChoice[userChoice.length] = specials[l];
      }
    }
    return userChoice
  }


  for (let index = 0; index < howLong; index++) {
    password[index] = userChoice[Math.floor(Math.random() * userChoice.length)];

  }
  password = password.join("");

  return password;

}