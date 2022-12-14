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
        location.href = '/index.html';
    }, 1500);
}

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
                            <a class="nav-link" href="/html/acerNos.html">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/html/contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="${isLogged ? "display:none;" : "display:block;"}" href="/html/login.html">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="${isAdmin ? "display:block;" : "display:none;"}" href="/html/pagAdmin.html">Administrar Peliculas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-active" style="${isLogged ? "display:none;" : "display:block;"}" href="/html/registro.html">Registrarse</a>
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


