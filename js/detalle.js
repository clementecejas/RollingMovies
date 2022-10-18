let peliculaSeleccionada = JSON.parse(localStorage.getItem("peliculaSeleccionada")) || [];

let detallePelicula = document.getElementById('detallePelicula');
let tituloPelicula = document.getElementById('tituloPelicula');
let trailerPelicula = document.getElementById('trailerPelicula');

detallePelicula.innerHTML = `

<div class="box1-pag-inf">
      <img src="${peliculaSeleccionada.imagen}" alt="${peliculaSeleccionada.nombre}">
    </div>
    <div class="box2-pag-inf">
      <div>
        <h2>${peliculaSeleccionada.nombre}</h2>
      </div>
      <div>
        <p>
        ${peliculaSeleccionada.descripcion}
        </p>
      </div>
    </div>

`

tituloPelicula.innerHTML = `
<h1>${peliculaSeleccionada.nombre}</h1>
`

trailerPelicula.innerHTML = `
<iframe width="100%" height="315" src="${peliculaSeleccionada.trailer}" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
`

