 const passwordEl = document.getElementById("password");
const generateButton = document.getElementById("generate");

generateButton.addEventListener("click", generatePassword);

function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()";
    const passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    passwordEl.value = password;
}
