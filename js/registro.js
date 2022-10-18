let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


const formSignUp = document.querySelector("#registro");


class Usuario {
    constructor(id, nombre, email, password, isAdmin = false, isLogged = false) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.isLogged = isLogged;
    }
}


function idRandom() {
    if (usuarios.length > 0) {
        return usuarios[usuarios.length - 1].id + Math.round(Math.random() * 100);
    } else {
        return Math.round(Math.random() * 100);
    }
}


formSignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = idRandom();
    let nombre = document.querySelector("#nombre-registro").value;
    let email = document.querySelector("#email-registro").value;
    let password = document.querySelector("#password-registro").value;
    let error = document.querySelector(".error-registro");

    error.innerHTML = "";

    
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailValidado = regex.test(email);


    if (nombre === "" || email === "" || password === "") {
        error.innerHTML = "Todos los campos son obligatorios";
        error.style.display = "block";
        error.style.padding = "8px";
        error.style.marginTop = "8px";
        error.style.color = "white";
        error.style.borderRadius = "10px";
        error.style.backgroundColor = "red";
        return;
    }

    if (!emailValidado) {
        error.innerHTML = "Email no valido";
        error.style.display = "block";
        error.style.padding = "8px";
        error.style.marginTop = "8px";
        error.style.color = "white";
        error.style.borderRadius = "10px";
        error.style.backgroundColor = "red";
        return;
    }


    let validarUser = usuarios.find((user) => {
        return user.email === email;
    });
    if (validarUser !== undefined) {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Usuario Existente",
            showConfirmButton: false,
            timer: 1500,
        });
        formSignUp.reset();
        document.querySelector("#nombre-registro").focus();
        return;
    }
    

    let newUser = new Usuario(id, nombre, email, password);
    usuarios.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    formSignUp.reset();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Registro exitoso!",
        showConfirmButton: false,
        timer: 1500,
    });
    setTimeout(() => {
        window.location.href="login.html"
      }, 2300);
});