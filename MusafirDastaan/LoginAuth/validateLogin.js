function validateForm() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Reset previous errors
    emailError.innerText = "";
    passwordError.innerText = "";

    let isValid = true;

    // Email Validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Password Validation (min 6 chars, 1 uppercase, 1 lowercase, 1 number)
    // let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (password.length < 6) {
        passwordError.innerText = "Password should be at least 6 characters.";
        isValid = false;
    }

    return isValid; // Prevent form submission if invalid
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈"; // eye-slash emoji
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁️"; // eye emoji
    }
}