// Global
let submitButton = document.getElementById("submit-button");
//

const preventSubmit = () => {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
};

// Exectua funções
window.onload = () => {
  preventSubmit();
};
