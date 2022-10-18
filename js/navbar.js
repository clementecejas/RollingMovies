let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado")) || [];
let isLogged = usuarioLogueado.isLogged;
let isAdmin = usuarioLogueado.isAdmin;

let navbarDinamica = document.querySelector('.navbarDinamica');

const logout = () => {
    let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    console.log(usuarioLogueado);
    usuarioLogueado.isLogged = false;
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado))
    if (usuarioLogueado !== undefined) {
        localStorage.removeItem("usuarioLogueado");
        Swal.fire({
            position: "center",
            title: "Cerraste la sesión",
            showConfirmButton: true,
        });
    }
    setTimeout(() => {
        location.reload();
    }, 1500);
}


const admin = () => {
    const usuario = usuarios.find((usuario) => {
      return usuario.email === "admin1@hotmail.com";
    })
    usuario.isAdmin = true;
    usuario.isLogged = true;
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuario))
    console.log(usuario)
    // setTimeout(() => {
    //   window.location.href="pagAdmin.html"
    // }, 2300);
  }
  admin()

navbarDinamica.innerHTML = `
    <div class="container-navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img class="logo" src="https://res.cloudinary.com/dryiawgds/image/upload/v1665634574/123_oi30iu.png" alt="" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="../index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="${isLogged ? "display:none;" : "display:block;"}" href="${location.href === 'http://127.0.0.1:5500/index.html' ? "./html/login.html" : "./login.html"}">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="${isAdmin ? "display:block;" : "display:none;"}" href="${location.href === 'http://127.0.0.1:5500/index.html' ? "./html/pagAdmin.html" : "./pagAdmin.html"}">Administrar Peliculas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-active" style="${isLogged ? "display:none;" : "display:block;"}" href="${location.href === 'http://127.0.0.1:5500/index.html' ? "./html/registro.html" : "./registro.html"}">Registrarse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-active" role="button" style="${isLogged ? "display:block;" : "display:none;"}" onclick="logout()">Cerrar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    `

