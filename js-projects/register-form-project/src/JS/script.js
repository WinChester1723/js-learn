document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateInputs();
  });

function validateInputs() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  if (name.value.trim() === "") {
    setError(name, "Name is required");
  } else {
    setSuccess(name);
  }

  if (email.value.trim() === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(email.value.trim())) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (password.value.trim() === "") {
    setError(password, "Password is required");
  } else if (password.value.trim().length < 8) {
    setError(password, "Password must be at least 8 characters.");
  } else {
    setSuccess(password);
  }

  if (confirmPassword.value.trim() === "") {
    setError(confirmPassword, "Please confirm your password");
  } else if (confirmPassword.value.trim() !== password.value.trim()) {
    setError(confirmPassword, "Passwords doesn't match");
  } else {
    setSuccess(confirmPassword);
  }
}

function setError(element, message) {
  const formField = element.parentElement;
  const errorDisplay = formField.querySelector(".error");

  errorDisplay.innerText = message;
  formField.classList.add("error");
  formField.classList.remove("success");
}

function setSuccess(element) {
  const formField = element.parentElement;
  const errorDisplay = formField.querySelector(".error");

  errorDisplay.innerText = "";
  formField.classList.remove("error");
  formField.classList.add("success");
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function testRegistration() {
  console.log("push");
}
