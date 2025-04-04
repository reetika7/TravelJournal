function validateForgetForm(){
    let email = document.getElementById("forgetEmail").value.trim();
    let reset = document.getElementById("reset");

    reset.addEventListener("click", function (e) {
        e.preventDefault(); // prevent form submission if you're using a form
    
        let email = document.getElementById("forgetEmail").value.trim();
        let emailError = document.getElementById("forgetEmailError");
    
        let isValid = true;
        emailError.innerText = "";
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailRegex.test(email)) {
            emailError.innerText = "Please enter a valid email address.";
            isValid = false;
        }
    
        if (isValid) {
            emailError.style.color = "green";
            emailError.innerText = "A reset link has been sent to your email. Please use it to reset your password.";
        }
    });
}
