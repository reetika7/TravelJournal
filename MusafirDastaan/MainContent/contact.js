function checkInputs() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const submitBtn = document.getElementById("submitBtn");

    if (name !== "" && email !== "" && message !== "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function showMessage(event){
    event.preventDefault(); // 🔥 Prevent form submission & page reload
    let sentMessage = document.getElementById("sentMessage");

    sentMessage.innerText = "Your digital chitthi has been sent !!";
    sentMessage.style.marginTop = "10px";
    sentMessage.style.color = "#444";

    // document.getElementById("contactForm").reset();
    // document.getElementById("submitBtn").disabled = true;

}
