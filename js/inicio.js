let carruselDestacadas = document.getElementById('carruselDestacadas');
let primeraDestacad = document.getElementById('primeraDestacad');
let corruselDestacadas = document.getElementById('corruselDestacadas');
let peliculaPrincipal = document.getElementById("pelicula-principal");

let arrayDePeliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

const primeraDestacada = () => {
    const peliculasFiltrada = arrayDePeliculas.filter((pelicula) => {
        return pelicula.favorito;
    });
    const primeraPeliculaFiltrada = peliculasFiltrada[0];
    
    primeraDestacad.innerHTML = `
    <h3 class="titulo">${primeraPeliculaFiltrada.nombre}</h3>
    <p class="descripcion">
        ${primeraPeliculaFiltrada.descripcion}
    </p>
    <button role="button" class="boton"><i class="fas fa-play"></i>Reproducir</button>
    <button role="button" class="boton"><i class="fas fa-info-circle"></i>Más información</button>
    `
    peliculaPrincipal.style.backgroundImage = `url(${primeraPeliculaFiltrada.imagen})`;
}
primeraDestacada();

const mostrarTodasLasDestacadas = () => {
    const peliculasFiltradas = arrayDePeliculas.filter((pelicula) => {
        return pelicula.favorito;
    });

    peliculasFiltradas.map((pelicula) =>{
        return corruselDestacadas.innerHTML += `
            <div class="pelicula">
                <a href="#"><img src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
            </div>
        `
    });
}
mostrarTodasLasDestacadas();