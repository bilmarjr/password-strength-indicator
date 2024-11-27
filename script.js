var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    let value = pass.value;
    let score = 0;

    // Criteria for password strength
    let hasLowercase = /[a-z]/.test(value);
    let hasUppercase = /[A-Z]/.test(value);
    let hasNumber = /[0-9]/.test(value);
    let hasSpecialChar = /[^a-zA-Z0-9]/.test(value);
    let isLongEnough = value.length >= 8;

    // Scoring
    if (hasLowercase) score++;
    if (hasUppercase) score++;
    if (hasNumber) score++;
    if (hasSpecialChar) score++;
    if (isLongEnough) score++;

    // Evaluate strength based on score
    if (score <= 2) {
        str.innerHTML = "Weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if (score === 3 || score === 4) {
        str.innerHTML = "Medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if (score === 5) {
        str.innerHTML = "Strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});
