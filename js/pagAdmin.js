let form = document.getElementById("form");
let nombreInput = document.getElementById('nombreInput');
let descripcionInput = document.getElementById('descripcionInput');
let categoriaInput = document.getElementById('categoriaInput');
let agregar = document.getElementById('agregar');
let msg = document.getElementById('msg');
let coleccion = document.getElementById('coleccion');

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
    if(nombreInput.value === "" || descripcionInput.value === "" || categoriaInput.value === ""){
        msg.innerHTML = "Completar todos los campos";
    }
    else {
        msg.innerHTML = "";
        aceptarPelicula();
        agregar.setAttribute("data-bs-dismiss","modal");
        agregar.click();
        (() => {
            agregar.setAttribute("data-bs-dismiss","");
        })()
    }
}

// funcion para pushear peliculas

const aceptarPelicula = () => {
    peliculas.push({
        id: idRandom(),
        nombre: nombreInput.value,
        descripcion: descripcionInput.value,
        categoria: categoriaInput.value
    })
    localStorage.setItem('peliculas', JSON.stringify(peliculas))
    ponerPelicula()
}

const resetForm = () => {
    // form.reset()
    nombreInput.value = "";
    descripcionInput.value = "";
    categoriaInput.value = "";
}

const ponerPelicula = () => {
    coleccion.innerHTML = "";
    peliculas.map((pelicula, idx) => {
        return coleccion.innerHTML +=`
        <tr>
                        <th scope="row">${pelicula.id}</th>
                        <td>${pelicula.nombre}</td>
                        <td class="display">${pelicula.descripcion}</td>
                        <td>${pelicula.categoria}</td>
                        <td>
                            <form action="">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            </form>
                        </td>
                        <td>
                            <button type="button" class="btn"><i onclick="editarPelicula(${pelicula.id})" data-bs-toggle="modal" data-bs-target="#form" class="bi bi-pencil-square btn-white"></i></button>
                            <button type="button" class="btn"><i onclick="borrarPelicula(${pelicula.id})" class="bi bi-trash-fill btn-white"></i></button>
                            <button type="button" class="btn"><i class="bi bi-star btn-white"></i></button>
                        </td>
                    </tr>
        `
    })
    resetForm();
}

ponerPelicula()

const borrarPelicula = (id) => {
    const peliculaFiltrada = peliculas.filter((pelicula) => {
        return pelicula.id !== id
    });
    peliculas = peliculaFiltrada
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
    ponerPelicula();

    console.log(peliculaFiltrada)
}

const editarPelicula = (id) => {
    const peliculaFiltrada = peliculas.find((pelicula) => {
        return pelicula.id === id
    })
    nombreInput.value = peliculaFiltrada.nombre;
    descripcionInput.value = peliculaFiltrada.descripcion;
    categoriaInput.value = peliculaFiltrada.categoria;
    const filter = peliculas.filter((pelicula) => {
        return pelicula.id !== id
    })
    peliculas = filter
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
}