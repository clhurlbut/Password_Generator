// Assignment code here

// Defining variables here 

// I made this global so I could use it in everything
var choices;

var confirmLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacters;

// Defining arrays
abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// to make a new UPPERCASE array 
var toUpper = function (up) {
  return up.toUpperCase(); 
};

abc2 = abc.map(toUpper);

// The generatePassword function 
function generatePassword() {

  // I started with a parseInt(prompt()) because this seems to be the best way to collect user input for a mathematical string
  confirmLength = parseInt(prompt("How many characters should be in your password? Choose between 8 and 128."));
// If user cancels or enters an invalid response this requires the user to input this 
  if (!confirmLength) {
    alert("This needs a value!");
  } else if (confirmLength < 8 || confirmLength > 128) {
    confirmLength = parseInt(prompt("Please choose a value between 8 and 128 only."));
  } else {
    // Using the confirm function to check user input for password
    confirmLowercase = confirm("Will your password include Lowercase letters?");
    confirmUppercase = confirm("Will your password include Uppercase letters?");
    confirmNumber = confirm("Will your password include numbers?");
    confirmCharacters = confirm("Will your password include special characters?");
  };
// If they say no to everything they are prompted to choose one
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmCharacters) {
    choices = alert("Your password must include at least one choice!");
  }
//If they say yes to all options 
  else if (confirmLowercase && confirmUppercase && confirmNumber && confirmCharacters) {
    choices = abc.concat(numbers, characters, abc2);
  }
//If they say yes to 3 options 
  else if (confirmLowercase && confirmUppercase && confirmNumber) {
    choices = abc.concat(abc2, numbers);
  }

  else if (confirmLowercase && confirmUppercase && confirmCharacters) {
    choices = abc.concat(abc2, characters);
  }

  else if (confirmLowercase && confirmCharacters && confirmNumber) {
    choices = abc.concat(characters, numbers);
  }

  else if (confirmUppercase && confirmCharacters && confirmNumber) {
    choices = abc2.concat(characters, numbers);
  }
// If they say yes to 2 options 
  else if (confirmLowercase && confirmUppercase) {
    choices = abc.concat(abc2);
  }

  else if (confirmLowercase && confirmNumber) {
    choices = abc.concat(numbers);
  }

  else if (confirmLowercase && confirmCharacters) {
    choices = abc.concat(characters);
  }

  else if (confirmCharacters && confirmUppercase) {
    choices = characters.concat(abc2);
  }

  else if (confirmNumber && confirmUppercase) {
    choices = numbers.concat(abc2);
  }

  else if (confirmNumber && confirmCharacters) {
    choices = numbers.concat(characters);
  }
// If they say yes to 1 option 
  else if (confirmLowercase) {
    choices = abc;
  }

  else if (confirmUppercase) {
    choices = abc2;
  }

  else if (confirmNumber) {
    choices = numbers;
  }

  else if (confirmCharacters) {
    choices = characters;
  };
/* Ran into some trouble here because I kept returning just a single digit instead of the user input from the 
 parseInt function but after consulting google gods I found that I could work around like this with my for loop 
 by creating a new variable as a placeholder for the length the user will input and then using the push and join
 methods to recall everything after the loop and retain the user input from the parseInt function and convert it
 back to a string with the correct number of */

var ps = [];
for (var i = 0; i < confirmLength; i++) {
  var userChoices = choices[Math.floor(Math.random() * choices.length)];
  ps.push(userChoices);

}

var password = ps.join("");
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

