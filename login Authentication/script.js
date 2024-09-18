let users = JSON.parse(localStorage.getItem("users")) || [];

// Register user
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let regName = document.getElementById("regName").value;
    let regEmail = document.getElementById("regEmail").value;
    let regPassword = document.getElementById("regPassword").value;
    let regDob = document.getElementById("regDob").value;
    let regTerms = document.getElementById("regTerms").checked;

    // Validate terms
    if (!regTerms) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    // Check if user already exists
    let userExists = users.some(user => user.email === regEmail);
    if (userExists) {
        alert("User already exists!");
    } else {
        users.push({ name: regName, email: regEmail, password: regPassword, dob: regDob });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
    }
});

// Login user
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let user = users.find(user => user.email === loginEmail && user.password === loginPassword);
    if (user) {
        alert("Login successful!");
        document.getElementById("login-box").style.display = "none";
        document.getElementById("registration-box").style.display = "none";
        document.getElementById("securedPage").style.display = "block";
    } else {
        alert("Invalid credentials!");
    }
});

// Logout
document.getElementById("logout-btn").addEventListener("click", function() {
    document.getElementById("securedPage").style.display = "none";
    document.getElementById("login-box").style.display = "block";
    document.getElementById("registration-box").style.display = "block";
});