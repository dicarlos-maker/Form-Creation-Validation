document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("registration-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      let isValid = true;
      let messages = [];
  
      let username = document.getElementById("username").value.trim();
      let password = document.getElementById("password").value.trim();
      let email = document.getElementById("email").value.trim();
      let feedbackDiv = document.getElementById("form-feedback");
  
      // Username validation
      if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
      }
  
      // Password validation
      if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
      }
  
      // Email validation
      if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Email format is incorrect.");
      }
  
      feedbackDiv.style.display = "block";
      if (isValid) {
        feedbackDiv.textContent = "Registration successful";
        feedbackDiv.style.color = "#28a745";
      } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545";
      }
    });
  });
  