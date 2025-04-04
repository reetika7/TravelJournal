function validateSignupForm() {
    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPass").value.trim();

    let emailError = document.getElementById("signupEmailError");
    let passwordError = document.getElementById("signupPasswordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    let isValid = true;

    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password should be at least 6 characters.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}
