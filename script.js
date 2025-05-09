// Register logic
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Registration successful. Please login.");
    window.location.href = "login.html";
  });
}

// Login logic
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials");
    }
  });
}

// Home page logic
const welcomeUser = document.getElementById("welcomeUser");
if (welcomeUser) {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    window.location.href = "login.html";
  } else {
    welcomeUser.textContent = `Hello, ${user}`;
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
