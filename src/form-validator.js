// const form = document.querySelector("form");
// const email = document.getElementById("email");
// const emailError = email.nextElementSibling;
export function checkValid(input, exp) {
  let error = input.nextElementSibling;
  if (isEmpty(input)) {
    input.className = "invalid";
    error.textContent = "You can't leave this input field blank.";
    error.className = "error active";
  } else if (isFormatWrong(input, exp)) {
    input.className = "invalid";
    if (input.name === "email") {
      error.textContent = "Wrong format! Ex: test@test.com";
    } else if (input.name === "country") {
      error.textContent = "Wrong format! Ex: Romania or romania";
    } else if (input.name === "zip") {
      error.textContent = "Wrong format! Ex: 123456";
    } else if (input.name === "password" || input.name === "passwordConfirm") {
      if (input.value.search(/[a-z]/) === -1) {
        error.textContent =
          "Your password needs to include at least 1 lowercase character.";
      } else if (input.value.search(/[A-Z]/) === -1) {
        error.textContent =
          "Your password needs to include at least 1 uppercase character.";
      } else if (input.value.search(/[0-9]/) === -1) {
        error.textContent = "Your password needs to include at least 1 digit.";
      } else if (
        input.value.search(/[\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/) === -1
      ) {
        error.textContent =
          "Your password needs to include at least 1 special character.";
      }
    }
    error.className = "error active";
  } else if (isMinInput(input)) {
    input.className = "invalid";
    error.textContent = `Please input at least ${input.minLength} characters!`;
    error.className = "error active";
  } else if (input.name === "password" || input.name === "passwordConfirm") {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("passwordConfirm");
    if (!confirmPassword(passwordInput, confirmPasswordInput)) {
      passwordInput.className = "invalid";
      error = input.nextElementSibling;
      confirmPasswordInput.className = "invalid";
      error.textContent =
        "Password and confirm password fields must contain same password!";
      error.className = "error active";
    } else {
      passwordInput.className = "valid";
      error = passwordInput.nextElementSibling;
      error.className = "error";
      error.textContent = "";
      confirmPasswordInput.className = "valid";
      error = confirmPasswordInput.nextElementSibling;
      error.className = "error";
      error.textContent = "";
    }
  } else {
    input.className = "valid";
    error.className = "error";
    error.textContent = "";
  }
  return input.className;
}

function isEmpty(input) {
  return input.value.length === 0;
}

function isFormatWrong(input, exp) {
  return !exp.test(input.value);
}

function isMinInput(input) {
  return input.value.length < input.minLength;
}

function confirmPassword(passwordInput, confirmPasswordInput) {
  return passwordInput.value === confirmPasswordInput.value;
}
