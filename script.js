// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hey! You clicked the button!")

  // 1. prompt the user for the password criteria
  //    a. password length: between 8 and 128
  //    b. lowercase, uppercase, numeric, and/or special characters
  prompt("words go here")
  // 2. validate the input
  // 3. Generate the password




  // 4. Display the generated password on the page
  return "Genereated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
