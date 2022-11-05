let form = document.getElementById("form");
let nombreInput = document.getElementById('nombreInput');
let descripcionInput = document.getElementById('descripcionInput');
let categoriaInput = document.getElementById('categoriaInput');
let imagenInput = document.getElementById('imagenInput');
let imagenPortada = document.getElementById('imagenPortada')
let trailerInput = document.getElementById('trailerInput');
let agregar = document.getElementById('agregar');
let msg = document.getElementById('msg');
let editAddMovie = document.getElementById('editAddMovie');
let coleccion = document.getElementById('coleccion');
let numeroPeliculas = document.querySelector('.numero-peliculas');

let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

function idRandom() {
    if (peliculas.length > 0) {
        return peliculas[peliculas.length - 1].id + Math.round(Math.random() * 10000);
    } else {
        return Math.round(Math.random() * 10000);
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
        imagenPortada: imagenPortada.value,
        trailer: trailerInput.value,
        descripcion: descripcionInput.value,
        categoria: categoriaInput.value,
        publicado: true,
        favorito: false,
        portada: false
    })
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
    ponerPelicula();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Pelicula CREADA con éxito",
        showConfirmButton: true,
        timer: 1500,
    });
}

// funcion para poner el form en blanco despues de enviar

const resetForm = () => {
    // form.reset()
    nombreInput.value = "";
    descripcionInput.value = "";
    categoriaInput.value = "";
    imagenInput.value = "";
    imagenPortada.value = "";
    trailerInput.value = "";
}

const ponerPelicula = () => {
    coleccion.innerHTML = "";
    peliculas.map((pelicula, idx) => {
        return coleccion.innerHTML += `
            <tr>
                <th scope="row">${pelicula.id}</th>
                <td>${pelicula.nombre}</td>
                <td class="display desc">${pelicula.descripcion}</td>
                <td>${pelicula.categoria}</td>
                <td>
                    <input type="checkbox" ${pelicula.publicado ? "checked" : ""} class="form-check-input" id="publicadoInput" onclick="publicadoONo(${pelicula.id})">
                </td>
                <td>
                    <button type="button" class="btn"><i onclick="editarPelicula(${pelicula.id})" data-bs-toggle="modal" data-bs-target="#form" class="bi bi-pencil-square btn-white"></i></button>
                    <button type="button" class="btn"><i onclick="borrarPelicula(${pelicula.id})" class="bi bi-trash-fill btn-white"></i></button>
                    <button type="button" class="btn"><i onclick="marcarFavorito(${pelicula.id})" class="bi ${pelicula.favorito ? "bi-star-fill" : "bi-star"} btn-white"></i></button>
                </td>
                <td>
                    <input type="checkbox" ${pelicula.portada ? "checked" : ""} class="form-check-input" id="portadaInput" onclick="estaEnPortada(${pelicula.id})">
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

//Cambiar estado si está en portada o no.
const estaEnPortada = (id) => {
    const peliculaFiltrada = peliculas.find((pelicula) => {
        return pelicula.id === id
    });

    const peliculaPortada = peliculas.find((pelicula) => {
        return pelicula.portada === true
    });

    if(peliculaPortada){
        Swal.fire({
            title: `${peliculaPortada.nombre} ya está en portada`,
            text: "Deseas reemplazarla??",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Se reemplazó la Portada',
                '',
                'success'
              );
              peliculaPortada.portada = !peliculaPortada.portada;
              localStorage.setItem("peliculas", JSON.stringify(peliculas));
              setTimeout(() => {
                location.reload();
              }, 1000);
            }
        })
    }
    peliculaFiltrada.portada = !peliculaFiltrada.portada;
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
}


const borrarPelicula = (id) => {
    const peliculaFiltrada = peliculas.filter((pelicula) => {
        return pelicula.id !== id
    });
    peliculas = peliculaFiltrada
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
    ponerPelicula();

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Pelicula BORRADA con éxito",
        showConfirmButton: true,
        timer: 1500,
    });
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
    imagenPortada.value = peliculaFiltrada.imagenPortada;
    trailerInput.value = peliculaFiltrada.trailer;
    const filter = peliculas.filter((pelicula) => {
        return pelicula.id !== id
    })
    peliculas = filter
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
}

