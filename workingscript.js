var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specials = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userChoice = [];

var howLong = prompt("Please choose a length between 8 and 128 characters for your password");
var hasNums = confirm("Would you like to include numbers?");
var hasLower = confirm("Would you like your password to include lowercase letters?");
var hasUpper = confirm("Would you like your password to include uppercase letters?");
var hasChars = confirm("Would you like your password to include special characters?");
console.log(howLong);


if (howLong >= 8 || howLong <= 128) {
    if (hasNums || hasLower || hasUpper || hasChars) {
        makeArr();
    } else {
        alert("Password cannot be empty, you jerk!");
    }
} else {
    alert("must be number between 8 and 128");
} 

// else if (!hasNums && !hasLower && !hasUpper && !hasChars) {
//     alert("Password must include at least one character type.");
//     // probably just restart the function here
// }


// I tried a few different ways to get the userChoice array. Doing a slice with no argument each time through the iteration worked okay, but what I did below makes the most sense to me... 

function makeArr() {

if (hasNums) {
    for (let i = 0; i < numbers.length; i++) {
        userChoice[userChoice.length] = numbers[i];
    }
}

if (hasLower) {
    for (let j = 0; j < letters.length; j++) {
        // userChoice.push(letters[j].slice());
        userChoice[userChoice.length] = letters[j];
    }
}

if (hasUpper) {
    for (let k = 0; k < letters.length; k++) {
        // userChoice.push((letters[k].slice()).toUpperCase());
        userChoice[userChoice.length] = letters[k].toUpperCase();

    }   
}

if (hasChars) {
    for (let l = 0; l < specials.length; l++) {
        // userChoice.push(specials[l].slice());
        userChoice[userChoice.length] = specials[l];

    }
}
console.log(userChoice);
return userChoice
}
