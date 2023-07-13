
// Get references to the input fields and labels
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordLabel = document.getElementById('password');

// Add event listeners for input validation
usernameInput.addEventListener('blur', validateUsername);
emailInput.addEventListener('blur', validateEmail);
passwordLabel.addEventListener('blur', validatePasswordLength);

// Validate form before submission
function validateForm(event) {
  // Validate individual fields
  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePasswordLength();

  // Check if all fields are valid
  if (isUsernameValid && isEmailValid && isPasswordValid) {
    // Redirect to login.html
    console.log("success")
    window.location.href = '/login.html';
  } else {
    // Prevent form submission
    event.preventDefault();
    console.log("success")
    alert('Please fix the errors before continuing.');
  }
}

// Validate username
function validateUsername() {
  const username = usernameInput.value.trim();

  if (username.length < 3 || username.length > 16) {
    // Display an error message or perform other actions
    alert('Please enter a valid username');
    return false;
  } else {
    console.log('Username is valid');
    return true;
  }
}

// Validate email
function validateEmail() {
  const email = emailInput.value.trim();

  // Simple email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    // Display an error message or perform other actions
    alert('Invalid email format');
    return false;
  } else {
    console.log('Email is valid');
    return true;
  }
}

// Password length validation (using password label)
const passwordMinLength = 8;

function validatePasswordLength() {
  const password = passwordLabel.value.trim();

  if (password.length < passwordMinLength) {
    // Display an error message or perform other actions
    alert('Enter Valid Password ');
    return false;
  } else {
    console.log('Enter Valid Password');
    return true;
  }
}

