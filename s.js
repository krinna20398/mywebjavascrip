var attemptsFailEventPass = 0;

let bgList = [
  "/assets/background.png",
  "/assets/background2.png"
];

let index = 0;

function changeBg() {
  const bg = document.getElementById("bg");

  // fade out
  bg.style.opacity = 0;

  setTimeout(() => {
    index++;
    if (index >= bgList.length) index = 0;

    bg.src = bgList[index];
    bg.style.opacity = 1;
  }, 300); // time
}



function togglePasswordVisibility(event) {
    var inputField = document.getElementById("mypassInput");
    var toggleButton = event.target;

    if (inputField.type === "password") {
        inputField.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        inputField.type = "password";
        toggleButton.textContent = "Show ";
    }
}

function showAlert(message, type = "error") {
    const alertBox = document.getElementById("alertBox");

    alertBox.textContent = message;
    alertBox.className = "custom-alert show " + type;

    setTimeout(() => {
        alertBox.className = "custom-alert";
    }, 5000);
}

function FailEventPass(event) {
    event.preventDefault();

    var username = document.getElementById("input_username").value;
    var password = document.getElementById("mypassInput").value;

    if (password === "") {
        showAlert("ยังไม่ได้ใส่รหัสผ่าน", "warning");
        return;
    }
    if (attemptsFailEventPass >= 5) {
        showAlert("ไม่มีครั้งต่อไปแล้ว", "error");
        return;
    }
    if (password === "password" || password === "Password") {
        attemptsFailEventPass++;
        showAlert("แน่ใจหรอว่านั่นรหัสผ่าน? อย่าให้มีครั้งที่ " + attemptsFailEventPass, "error");
        return;
    }

    if (password !== "Inwza007") {
        attemptsFailEventPass++;
        showAlert("รหัสผ่านไม่ถูกต้อง อย่าให้มีครั้งที่ " + attemptsFailEventPass, "error");
        return;
    }
    if (password === "Inwza007" && username === "user_inwza007") {
        showAlert("นี่แหละรหัสผ่าo!", "success");
    }
}

