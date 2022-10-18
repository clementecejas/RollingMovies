let carruselDestacadas = document.getElementById('carruselDestacadas');
let primeraDestacad = document.getElementById('primeraDestacad');
let corruselDestacadas = document.getElementById('corruselDestacadas');
let peliculaPrincipal = document.getElementById("pelicula-principal");

let arrayDePeliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

//Traer todas las peliculas que estén publicadas - publicada === true
const peliculaPublicada = arrayDePeliculas.filter((pelicula) => {
    return pelicula.publicado;
});

//Traer la primera pelicula destacada y mostrarla
const primeraDestacada = () => {
    const peliculasFiltrada = peliculaPublicada.filter((pelicula) => {
        return pelicula.portada;
    });
    const primeraPeliculaFiltrada = peliculasFiltrada[0];
    
    primeraDestacad.innerHTML = `
    <h3 class="titulo">${primeraPeliculaFiltrada.nombre}</h3>
    <p class="descripcion">
        ${primeraPeliculaFiltrada.descripcion}
    </p>
    <a class="boton" href="${primeraPeliculaFiltrada.trailer}" target="_blank"><i class="fas fa-play"></i>Reproducir</a>
    <button role="button" class="boton"><i class="fas fa-info-circle"></i>Más información</button>
    `
    peliculaPrincipal.style.backgroundImage = `url(${primeraPeliculaFiltrada.imagenPortada ? primeraPeliculaFiltrada.imagenPortada : primeraPeliculaFiltrada.imagen})`;
}
primeraDestacada();

//Traer todas las peliculas destacadas y mostrarlas
const mostrarTodasLasDestacadas = () => {
    const peliculasFiltradas = peliculaPublicada.filter((pelicula) => {
        return pelicula.favorito;
    });

    peliculasFiltradas.map((pelicula) =>{
        return corruselDestacadas.innerHTML += `
            <div class="pelicula">
                <a href=""><img src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
            </div>
        `
    });
}
mostrarTodasLasDestacadas();


//Mostrar segun las categorias

const MostrarPeliculasDeAccion = () => {
    const peliculasDeAccion = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Acción"
    });
    peliculasDeAccion.map((pelicula) => {
        console.log(pelicula);
    })
}
MostrarPeliculasDeAccion();


const MostrarPeliculasDeCSFiccion = () => {
    const peliculasDeAccion = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Ciencia Ficción"
    });
    peliculasDeAccion.map((pelicula) => {
        console.log(pelicula)
    })
}
MostrarPeliculasDeCSFiccion();


const MostrarSeries = () => {
    const peliculasDeAccion = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Series"
    });
    peliculasDeAccion.map((pelicula) => {
        console.log(pelicula)
    })
}
MostrarSeries();




