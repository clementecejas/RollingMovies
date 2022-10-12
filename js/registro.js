let usuario = document.getElementById("usuario");
let nombre = document.getElementById("nombre");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let telefono = document.getElementById("telefono");

window.onload = () => {
  document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    const terminos = document.getElementById("terminos");
    if (
      campos.usuario &&
      campos.nombre &&
      campos.password &&
      campos.correo &&
      campos.telefono &&
      terminos.checked
    ) {
        emailjs.sendForm("gmail1", "template_t4l9t8m", "#formulario").then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              document.getElementById("formulario").reset();
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      formulario.reset();

      document
        .getElementById("formulario__mensaje-exito")
        .classList.add("formulario__mensaje-exito-activo");
      setTimeout(() => {
        document
          .getElementById("formulario__mensaje-exito")
          .classList.remove("formulario__mensaje-exito-activo");
      }, 5000);

      document
        .querySelectorAll(".formulario__grupo-correcto")
        .forEach((icono) => {
          icono.classList.remove("formulario__grupo-correcto");
        });
      return;
    } else {
      
      document
        .getElementById("formulario__mensaje")
        .classList.add("formulario__mensaje-activo");
      setTimeout(() => {
        document
          .getElementById("formulario__mensaje")
          .classList.remove("formulario__mensaje-activo");
      }, 5000);
      return;
    }
  });

  const formulario = document.getElementById("formulario");
  const inputs = document.querySelectorAll("#formulario input");

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };
  const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false,
  };
  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "usuario":
        validarCampo(expresiones.usuario, e.target, "usuario");
        break;
      case "nombre":
        validarCampo(expresiones.nombre, e.target, "nombre");
        break;
      case "password":
        validarCampo(expresiones.password, e.target, "password");
        validarPassword2();
        break;
      case "password2":
        validarPassword2();
        break;
      case "correo":
        validarCampo(expresiones.correo, e.target, "correo");
        break;
      case "telefono":
        validarCampo(expresiones.telefono, e.target, "telefono");
        break;
    }
  };

  const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
      document
        .getElementById(`grupo__${campo}`)
        .classList.remove("formulario__grupo-incorrecto");
      document
        .getElementById(`grupo__${campo}`)
        .classList.add("formulario__grupo-correcto");
      document
        .querySelector(`#grupo__${campo} i`)
        .classList.add("fa-check-circle");
      document
        .querySelector(`#grupo__${campo} i`)
        .classList.remove("fa-circle-xmark");
      document
        .querySelector(`#grupo__${campo} .formulario__input-error`)
        .classList.remove("formulario__input-error-activo");
      campos[campo] = true;
    } else {
      document
        .getElementById(`grupo__${campo}`)
        .classList.add("formulario__grupo-incorrecto");
      document
        .getElementById(`grupo__${campo}`)
        .classList.remove("formulario__grupo-correcto");
      document
        .querySelector(`#grupo__${campo} i`)
        .classList.add("fa-circle-xmark");
      document
        .querySelector(`#grupo__${campo} i`)
        .classList.remove("fa-check-circle");
      document
        .querySelector(`#grupo__${campo} .formulario__input-error`)
        .classList.add("formulario__input-error-activo");
      campos[campo] = false;
    }
  };

  const validarPassword2 = () => {
    const inputpassword1 = document.getElementById("password");
    const inputpassword2 = document.getElementById("password2");

    if (inputpassword1.value !== inputpassword2.value) {
      document
        .getElementById(`grupo__password2`)
        .classList.add("formulario__grupo-incorrecto");
      document
        .getElementById(`grupo__password2`)
        .classList.remove("formulario__grupo-correcto");
      document
        .querySelector(`#grupo__password2 i`)
        .classList.add("fa-circle-xmark");
      document
        .querySelector(`#grupo__password2 i`)
        .classList.remove("fa-check-circle");
      document
        .querySelector(`#grupo__password2 .formulario__input-error`)
        .classList.add("formulario__input-error-activo");
      campos["password"] = false;
    } else {
      document
        .getElementById(`grupo__password2`)
        .classList.remove("formulario__grupo-incorrecto");
      document
        .getElementById(`grupo__password2`)
        .classList.add("formulario__grupo-correcto");
      document
        .querySelector(`#grupo__password2 i`)
        .classList.remove("fa-circle-xmark");
      document
        .querySelector(`#grupo__password2 i`)
        .classList.add("fa-check-circle");
      document
        .querySelector(`#grupo__password2 .formulario__input-error`)
        .classList.remove("formulario__input-error-activo");
      campos["password"] = true;
    }
  };

  inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
  });
};