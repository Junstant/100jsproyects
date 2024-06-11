// * import elements from DOM
const registerForm = document.querySelector(".registerForm");
const textAlert = document.querySelector(".textAlert");

// * validations
const validations = {
  password: {
    validation: (password) => password.length >= 6,
    error: "Password should be at least 6 characters",
  },
  email: {
    validation: (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email),
    error: "Invalid email",
  },
};

// * functions
//redirect to calculator page after successful
function pageRedirect() {
  window.location.href = "calculator.html";
}
const userCredentials = {}
//obtain values from form
const getValues = (form) => {
  const inputsArray = ["password", "email"];
  const inputsValues = {};
  for (let input of inputsArray) {
    const errorSpan = form.querySelector(`.${input}Input`);
    const value = form[input].value;
    inputsValues[input] = {
      errorSpan: errorSpan,
      validation: validations[input].validation,
      error: validations[input].error,
      value: value,
    };
    userCredentials[input] = value;
  }
  return inputsValues;
};

//prevent default form submit
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const values = getValues(form);
  console.log(values);
  let allValid = true;
  for (const property in values) {
    const objectInput = values[property];
    if (!objectInput.validation(objectInput.value)) {
      objectInput.errorSpan.innerHTML = objectInput.error;
      textAlert.innerHTML = objectInput.error;
      allValid = false;
    } else {
      objectInput.errorSpan.innerHTML = "";
    }
  }
  if (allValid) {
    registerUser();
  }
};

// * events
registerForm.addEventListener("submit", handleSubmit);

//check stored user 
const checkUser = () => {
  const user = localStorage.getItem("currentUser");
  if (user !== null && user !== undefined && user !== "") {
    return true;
  } else {
    return false;
  }
};

//register user
function registerUser() {
  if (checkUser() === false) {
    const email = userCredentials.email;
    const password = userCredentials.password;
    console.log(email, password);
    const user = { email: email, password: password };
    localStorage.setItem("currentUser", JSON.stringify(user));  
    textAlert.innerHTML = "User registered successfully";
    pageRedirect();
  } else {
    textAlert.innerHTML = "Invalid email or password";
  }
}

//auto login
function autoLogin() {
  if (checkUser()) {
    pageRedirect();
  }
}
autoLogin();
