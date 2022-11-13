const form = document.querySelector(".login-form");

const formChecker = (event) => {
  event.preventDefault();

  const formEls = event.currentTarget.elements;
  const email = formEls.email.value;
  const password = formEls.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("All the fields must be filled in");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();
};

form.addEventListener("submit", formChecker);
