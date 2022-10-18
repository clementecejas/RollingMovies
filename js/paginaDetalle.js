let paginaDetalle = document.getElementById('paginaDetalle');

let Peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

const traerPelicula = (id) => {

    const peliculaFiltrada = Peliculas.filter((pelicula) => {
        return pelicula.id === id
    })

    console.log(peliculaFiltrada);
    //location.href = "/html/detallePelicula.html";
}