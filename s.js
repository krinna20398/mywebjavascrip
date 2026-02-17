
let attempts = 0;
const bgList = ["./assets/background.png", "./assets/background2.png"];
let bgIndex = 0;

function changeBg() {
    const bg = document.getElementById("bg");
    bg.style.opacity = 0;
    setTimeout(() => {
        bgIndex = (bgIndex + 1) % bgList.length;
        bg.src = bgList[bgIndex];
        bg.style.opacity = 1;
    }, 500);
}

function togglePasswordVisibility(btn) {
    const input = document.getElementById("mypassInput");
    const icon = btn.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function showAlert(message, type = "error") {
    const alertBox = document.getElementById("alertBox");
    const alertText = document.getElementById("alertText");
    const alertIcon = document.getElementById("alertIcon");
    const overlay = document.getElementById("overlay");

    alertText.textContent = message;

    alertBox.className = "custom-alert show " + type;
    if (type === "success") alertIcon.className = "fas fa-check-circle alert-icon";
    else if (type === "warning") alertIcon.className = "fas fa-exclamation-triangle alert-icon";
    else alertIcon.className = "fas fa-times-circle alert-icon";

    overlay.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
        overlay.classList.remove("show");
    }, 3000);
}

function triggerShake() {
    const card = document.getElementById("loginCard");
    card.classList.add("shake");
    setTimeout(() => {
        card.classList.remove("shake");
    }, 500);
}

function FailEventPass(event) {
    event.preventDefault();

    const username = document.getElementById("input_username").value.trim();
    const password = document.getElementById("mypassInput").value;

    if (!password) {
        showAlert("เอ๊ะ! ยังไม่ใส่ข้อมูลเลยนะ", "warning");
        triggerShake();
        return;
    }

    if (attempts >= 5) {
        showAlert("ระงับการใช้งานชั่วคราว", "error");
        triggerShake();
        return;
    }

    if (username === "user_inwza007" && password === "Inwza007") {
        showAlert("ยินดีต้อนรับ! เข้าสู่ระบบสำเร็จ", "success");
        attempts = 0;
    } else {
        attempts++;
        showAlert(`ข้อมูลไม่ถูกต้อง (${attempts}/5)`, "error");
        triggerShake();
    }
}
