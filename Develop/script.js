 // Selecting the html ID "generate" and storing it in the generateBtn variable
 var generateBtn = document.querySelector("#generate");

  // Prompt: enter password length
 function getPasswordCriteria() {
  var length = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

  // Check if 'length' is valid and within the range
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length.");
    return getPasswordCriteria(); // Recursively call until valid input is received
  }

  // Ask what kind of characters the user wants in thier password
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  
  // Ensure at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return getPasswordCriteria(); // call until valid input is received
  }
  
  // return an object with selected criteria
  return {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
}

// Function to generate a password based on criteria
function generatePassword() {
  var criteria = getPasswordCriteria();
  var characterSet = "";
  var password = "";

  if (criteria.includeLowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (criteria.includeUppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (criteria.includeNumeric) {
    characterSet += "0123456789";
  }
  if (criteria.includeSpecial) {
    characterSet += "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";
  }

  for (var i = 0; i < criteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}



 // Write password to the #password input
 function writePassword() {
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

 }

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
