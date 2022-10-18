let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const formLogin = document.querySelector("#login");


formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email-login").value;
  const password = document.querySelector("#password-login").value;
  const errorLogin = document.querySelector(".error-login");

  errorLogin.innerHTML = "";
  if (email === "" || password === "") {
    errorLogin.innerHTML = "Debes ingresar un email y una contraseña";
    errorLogin.style.display = "block";
    errorLogin.style.padding = "8px";
    errorLogin.style.marginTop = "0px";
    errorLogin.style.color = "white";
    errorLogin.style.borderRadius = "10px";
    errorLogin.style.backgroundColor = "red";
    return;
  };

  const validarEmail = usuarios.find((usuario) => {
    return usuario.email === email && usuario.password === password
  });
  if (validarEmail === undefined) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Usuario o contraseña son incorrectos",
      showConfirmButton: false,
      timer: 1500,
    });
    document.querySelector("#login").reset();
    document.querySelector("#email-login").focus();
    return;
  }
  validarEmail.isLogged = true;
  localStorage.setItem("usuarioLogueado", JSON.stringify(validarEmail));
  formLogin.reset();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Bienvenido!",
    showConfirmButton: false,
    timer: 1500,
  });
  setTimeout(() => {
    window.location.href="../index.html"
  }, 2300);
});