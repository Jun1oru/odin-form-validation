import { checkValid } from "./form-validator";

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const countryRegExp = /^[a-zA-Z]+$/;
const zipRegExp = /^[0-9]+$/;
const passwordRegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z\d\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/;

let formValid = false;

export function createForm() {
  const form = document.createElement("form");
  form.id = "myForm";
  form.noValidate = true;
  form.addEventListener("submit", (e) => {
    if (!formValid) {
      e.preventDefault();
    } else {
      window.alert("Account created!");
    }
  });

  form.appendChild(createEmailInput());
  form.appendChild(createCountryInput());
  form.appendChild(createZipInput());
  form.appendChild(createPasswordInput());
  form.appendChild(createPasswordConfirmInput());
  form.appendChild(createSubmitButton());

  return form;
}

function createEmailInput() {
  const emailDiv = document.createElement("div");
  emailDiv.id = "emailDiv";

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");

  const emailSpan = document.createElement("span");
  emailSpan.textContent = "Enter your email address:";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.required = true;
  emailInput.minLength = "3";
  emailInput.placeholder = "test@test.com";
  emailInput.addEventListener("input", () => {
    checkValid(emailInput, emailRegExp);
  });

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");
  errorSpan.ariaLive = "polite";
  errorSpan.textContent = "Test Error!";

  emailLabel.appendChild(emailSpan);
  emailLabel.appendChild(emailInput);
  emailLabel.appendChild(errorSpan);

  emailDiv.appendChild(emailLabel);

  return emailDiv;
}

function createCountryInput() {
  const countryDiv = document.createElement("div");
  countryDiv.id = "countryDiv";

  const countryLabel = document.createElement("label");
  countryLabel.setAttribute("for", "country");

  const countrySpan = document.createElement("span");
  countrySpan.textContent = "Enter your country:";

  const countryInput = document.createElement("input");
  countryInput.type = "text";
  countryInput.id = "country";
  countryInput.name = "country";
  countryInput.required = true;
  countryInput.minLength = "3";
  countryInput.placeholder = "Romania";
  countryInput.autocomplete = "country";
  countryInput.addEventListener("input", () => {
    checkValid(countryInput, countryRegExp);
  });

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");
  errorSpan.ariaLive = "polite";

  countryLabel.appendChild(countrySpan);
  countryLabel.appendChild(countryInput);
  countryLabel.appendChild(errorSpan);

  countryDiv.appendChild(countryLabel);

  return countryDiv;
}

function createZipInput() {
  const zipDiv = document.createElement("div");
  zipDiv.id = "zipDiv";

  const zipLabel = document.createElement("label");
  zipLabel.setAttribute("for", "zip");

  const zipSpan = document.createElement("span");
  zipSpan.textContent = "Enter your zip code:";

  const zipInput = document.createElement("input");
  zipInput.type = "text";
  zipInput.id = "zip";
  zipInput.name = "zip";
  zipInput.required = true;
  zipInput.placeholder = "021415610";
  zipInput.addEventListener("input", () => {
    checkValid(zipInput, zipRegExp);
  });

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");
  errorSpan.ariaLive = "polite";

  zipLabel.appendChild(zipSpan);
  zipLabel.appendChild(zipInput);
  zipLabel.appendChild(errorSpan);

  zipDiv.appendChild(zipLabel);

  return zipDiv;
}

function createPasswordInput() {
  const passwordDiv = document.createElement("div");
  passwordDiv.id = "passwordDiv";

  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "password");

  const passwordSpan = document.createElement("span");
  passwordSpan.textContent = "Enter your password:";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  passwordInput.name = "password";
  passwordInput.required = true;
  passwordInput.minLength = 8;
  passwordInput.placeholder = "vErYsEcurePa$$w0rd";
  passwordInput.addEventListener("input", () => {
    checkValid(passwordInput, passwordRegExp);
  });

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");
  errorSpan.ariaLive = "polite";

  passwordLabel.appendChild(passwordSpan);
  passwordLabel.appendChild(passwordInput);
  passwordLabel.appendChild(errorSpan);

  passwordDiv.appendChild(passwordLabel);

  return passwordDiv;
}

function createPasswordConfirmInput() {
  const passwordConfirmDiv = document.createElement("div");
  passwordConfirmDiv.id = "passwordConfirmDiv";

  const passwordConfirmLabel = document.createElement("label");
  passwordConfirmLabel.setAttribute("for", "passwordConfirm");

  const passwordConfirmSpan = document.createElement("span");
  passwordConfirmSpan.textContent = "Confirm your password:";

  const passwordConfirmInput = document.createElement("input");
  passwordConfirmInput.type = "password";
  passwordConfirmInput.id = "passwordConfirm";
  passwordConfirmInput.name = "passwordConfirm";
  passwordConfirmInput.required = true;
  passwordConfirmInput.placeholder = "vErYsEcurePa$$w0rd";
  passwordConfirmInput.addEventListener("input", () => {
    checkValid(passwordConfirmInput, passwordRegExp);
  });

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");
  errorSpan.ariaLive = "polite";

  passwordConfirmLabel.appendChild(passwordConfirmSpan);
  passwordConfirmLabel.appendChild(passwordConfirmInput);
  passwordConfirmLabel.appendChild(errorSpan);

  passwordConfirmDiv.appendChild(passwordConfirmLabel);

  return passwordConfirmDiv;
}

function createSubmitButton() {
  const submitButtonDiv = document.createElement("div");
  submitButtonDiv.id = "submitButtonDiv";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "submitButton";
  submitButton.name = "submitButton";
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", (e) => {
    let count = 0;
    const inputs = document.getElementsByTagName("input");
    const inputsArr = Array.from(inputs);
    const regExpArr = [
      emailRegExp,
      countryRegExp,
      zipRegExp,
      passwordRegExp,
      passwordRegExp,
    ];
    inputsArr.forEach((input, index) => {
      if (checkValid(input, regExpArr[index]) === "valid") {
        count++;
      }
    });
    if (count === 5) {
      formValid = true;
    } else {
      formValid = false;
    }
  });

  submitButtonDiv.appendChild(submitButton);

  return submitButtonDiv;
}
