document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario para validar primero
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailError.textContent = "";
    passwordError.textContent = "";


    if (email.trim() === "") {
        emailError.textContent = "Debe completar este campo";
        return;
    }

    if (!regexEmail.test(email)) {
        emailError.textContent = "El formato ingresado es incorrecto";
        return;
    }

    if (password.trim() === "") {
        passwordError.textContent = "Debe completar este campo";
        return;
    }

    alert("El formulario ha sido enviado");
});

