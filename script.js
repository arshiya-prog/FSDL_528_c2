/* SECTION SWITCHING */
function showSection(sectionId) {
    document.getElementById("registration").style.display = "none";
    document.getElementById("dom").style.display = "none";
    document.getElementById(sectionId).style.display = "flex";
}

/* FORM SUBMIT VALIDATION */
document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let form = this;
    let msg = document.getElementById("message");

    if (document.getElementById("submitBtn").disabled) {
        form.classList.add("shake");
        setTimeout(() => form.classList.remove("shake"), 400);
        msg.style.color = "red";
        msg.innerHTML = "Please correct the errors above.";
        return;
    }

    msg.style.color = "green";
    msg.innerHTML = "Registration Successful!";
});

/* LIVE VALIDATION HELPERS */
function checkFormValidity() {
    let ok =
        document.getElementById("emailMsg").classList.contains("success") &&
        document.getElementById("phoneMsg").classList.contains("success") &&
        document.getElementById("passwordMsg").classList.contains("success") &&
        document.getElementById("confirmMsg").classList.contains("success");

    document.getElementById("submitBtn").disabled = !ok;
}

/* EMAIL */
email.addEventListener("input", function () {
    let msg = emailMsg;
    let r = /^[a-zA-Z0-9._]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,3}$/;

    if (!this.value) msg.innerHTML = "";
    else if (!r.test(this.value)) {
        msg.innerHTML = "Invalid email format";
        msg.className = "liveMsg error";
    } else {
        msg.innerHTML = "Valid email ✓";
        msg.className = "liveMsg success";
    }
    checkFormValidity();
});

/* PHONE */
phone.addEventListener("input", function () {
    let msg = phoneMsg;

    if (!this.value) msg.innerHTML = "";
    else if (!/^[0-9]*$/.test(this.value)) {
        msg.innerHTML = "Only digits allowed";
        msg.className = "liveMsg error";
    } else if (this.value.length !== 10) {
        msg.innerHTML = "Must be 10 digits";
        msg.className = "liveMsg error";
    } else {
        msg.innerHTML = "Valid phone ✓";
        msg.className = "liveMsg success";
    }
    checkFormValidity();
});

/* PASSWORD + STRENGTH */
password.addEventListener("input", function () {
    let p = this.value;
    let msg = passwordMsg;
    let fill = strengthFill;

    let score =
        (p.length >= 7) +
        /[A-Z]/.test(p) +
        /[0-9]/.test(p) +
        /[&$#@]/.test(p);

    if (!p) {
        msg.innerHTML = "";
        fill.style.width = "0%";
    } else if (score <= 2) {
        msg.innerHTML = "Weak password";
        msg.className = "liveMsg error";
        fill.style.width = "33%";
        fill.style.background = "red";
    } else if (score === 3) {
        msg.innerHTML = "Medium password";
        fill.style.width = "66%";
        fill.style.background = "orange";
    } else {
        msg.innerHTML = "Strong password ✓";
        msg.className = "liveMsg success";
        fill.style.width = "100%";
        fill.style.background = "green";
    }
    checkFormValidity();
});

/* CONFIRM PASSWORD */
confirmPassword.addEventListener("input", function () {
    if (!this.value) confirmMsg.innerHTML = "";
    else if (this.value !== password.value) {
        confirmMsg.innerHTML = "Passwords do not match";
        confirmMsg.className = "liveMsg error";
    } else {
        confirmMsg.innerHTML = "Passwords match ✓";
        confirmMsg.className = "liveMsg success";
    }
    checkFormValidity();
});

/* DOM DEMO */
/* IMAGE LOOP USING DOM */

let images = ["dom1.jpg", "dom2.jpg", "dom3.jpg"];
let currentIndex = 0;

function changeImage() {
    const img = document.getElementById("myImage");
    img.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        img.src = images[currentIndex];
        img.style.opacity = 1;
    }, 200);
}

function addTextNode() {
    textContainer.appendChild(document.createTextNode(" Text added "));
}
function deleteTextNode() {
    if (textContainer.firstChild)
        textContainer.removeChild(textContainer.firstChild);
}

/* jQuery */
$(function () {

    // Change jQuery button text
    $("#jqueryBtn").click(function () {
        $(this).text("Text Changed using jQuery");
    });

    // ADD PLACEHOLDERS USING jQuery (for ALL fields)
    $("#username").attr("placeholder", "Enter your username");
    $("#email").attr("placeholder", "Enter your email address");
    $("#phone").attr("placeholder", "Enter 10-digit phone number");
    $("#password").attr("placeholder", "Enter strong password");
    $("#confirmPassword").attr("placeholder", "Re-enter your password");

});