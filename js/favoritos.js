//Marcar como favorito
const marcarFavorito = (id) => {
    const peliculaFiltrada = peliculas.find((pelicula) => {
        return pelicula.id === id
    });
    peliculaFiltrada.favorito = !peliculaFiltrada.favorito;
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    location.reload();
}