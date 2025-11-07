const backendURL = "http://localhost:5000/api/auth";

// ✅ Register Function
async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch(`${backendURL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  document.getElementById("registerMessage").innerText = data.message;
}

// ✅ Login Function
async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const response = await fetch(`${backendURL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  document.getElementById("loginMessage").innerText = data.message;

  if (data.token) {
    localStorage.setItem("token", data.token);
    alert("Login Successful!");
  }
}
