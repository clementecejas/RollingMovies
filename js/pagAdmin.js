let form = document.getElementById("form");
let nombreInput = document.getElementById('nombreInput');
let descripcionInput = document.getElementById('descripcionInput');
let categoriaInput = document.getElementById('categoriaInput');
let imagenInput = document.getElementById('imagenInput');
let trailerInput = document.getElementById('trailerInput');
let agregar = document.getElementById('agregar');
let msg = document.getElementById('msg');
let editAddMovie = document.getElementById('editAddMovie');
let coleccion = document.getElementById('coleccion');
let numeroPeliculas = document.querySelector('.numero-peliculas');

let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

function idRandom() {
    if (peliculas.length > 0) {
        return peliculas[peliculas.length - 1].id + Math.round(Math.random() * 100);
    } else {
        return Math.round(Math.random() * 100);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})

// crear funcion para validar el form

let formValidation = () => {
    if (nombreInput.value === "" || descripcionInput.value === "" || categoriaInput.value === "" || imagenInput.value === "" || trailerInput.value === "") {
        msg.innerHTML = "Completar todos los campos";
        msg.style.display = "block";
        msg.style.padding = "8px";
        msg.style.margin = "10px";
        msg.style.color = "white";
        msg.style.borderRadius = "10px";
        msg.style.backgroundColor = "red";
    }
    else {
        msg.innerHTML = "";
        aceptarPelicula();
        agregar.setAttribute("data-bs-dismiss", "modal");
        agregar.click();
        (() => {
            agregar.setAttribute("data-bs-dismiss", "");
        })()
    }
}

// Mostrar numero de peliculas

const mostrarCantidadDePeliculas = () => {
    numeroPeliculas.innerHTML = ` <h3 class="my-4">Total de peliculas: ${peliculas.length} </h3>`
}

mostrarCantidadDePeliculas();

// funcion para pushear peliculas

const aceptarPelicula = () => {
    peliculas.push({
        id: idRandom(),
        nombre: nombreInput.value,
        imagen: imagenInput.value,
        trailer: trailerInput.value,
        descripcion: descripcionInput.value,
        categoria: categoriaInput.value,
        publicado: true,
        favorito: false
    })
    localStorage.setItem('peliculas', JSON.stringify(peliculas))
    ponerPelicula();
    location.reload();
}

// funcion para poner el form en blanco despues de enviar

const resetForm = () => {
    // form.reset()
    nombreInput.value = "";
    descripcionInput.value = "";
    categoriaInput.value = "";
    imagenInput.value = "";
    trailerInput.value = "";
}

const ponerPelicula = () => {
    coleccion.innerHTML = "";
    peliculas.map((pelicula, idx) => {
        return coleccion.innerHTML += `
        <tr>
                        <th scope="row">${pelicula.id}</th>
                        <td>${pelicula.nombre}</td>
                        <td class="display">${pelicula.descripcion}</td>
                        <td>${pelicula.categoria}</td>
                        <td>
                            <input type="checkbox" ${pelicula.publicado ? "checked" : ""} class="form-check-input" id="publicadoInput" onclick="publicadoONo(${pelicula.id})">
                        </td>
                        <td>
                            <button type="button" class="btn"><i onclick="editarPelicula(${pelicula.id})" data-bs-toggle="modal" data-bs-target="#form" class="bi bi-pencil-square btn-white"></i></button>
                            <button type="button" class="btn"><i onclick="borrarPelicula(${pelicula.id})" class="bi bi-trash-fill btn-white"></i></button>
                            <button type="button" class="btn"><i onclick="marcarFavorito(${pelicula.id})" class="bi ${pelicula.favorito ? "bi-star-fill" : "bi-star"} btn-white"></i></button>
                        </td>
                    </tr>
        `
    })
    resetForm();
}

ponerPelicula();

//Cambiar estado si está publicado o no.
const publicadoONo = (id) => {
    const peliculaFiltrada = peliculas.find((pelicula) => {
        return pelicula.id === id
    });
    peliculaFiltrada.publicado = !peliculaFiltrada.publicado;
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    location.reload();
}

const borrarPelicula = (id) => {
    const peliculaFiltrada = peliculas.filter((pelicula) => {
        return pelicula.id !== id
    });
    peliculas = peliculaFiltrada
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
    ponerPelicula();

    console.log(peliculaFiltrada)
    location.reload();
}

const editarPelicula = (id) => {
    const peliculaFiltrada = peliculas.find((pelicula) => {
        return pelicula.id === id
    })
    editAddMovie.innerHTML = `Editar pelicula: ${peliculaFiltrada.nombre}`
    nombreInput.value = peliculaFiltrada.nombre;
    descripcionInput.value = peliculaFiltrada.descripcion;
    categoriaInput.value = peliculaFiltrada.categoria;
    imagenInput.value = peliculaFiltrada.imagen;
    trailerInput.value = peliculaFiltrada.trailer;
    const filter = peliculas.filter((pelicula) => {
        return pelicula.id !== id
    })
    peliculas = filter
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
}
