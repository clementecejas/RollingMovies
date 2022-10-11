const agregarFavoritos = document.getElementById("agregar-favoritos");

agregarFavoritos.addEventListener("click", (event) => {
    event.preventDefault();

    let datos = {
        id: document.getElementById("idPelicula"),
        nombre: document.getElementById("nombrePelicula"),
        descripcion: document.getElementById("descripcionPelicula"),
        imagen: document.getElementById("imagenPelicula")
    }

    let favoritos = localStorage.getItem("favoritos") || [];
    favoritos = JSON.parse(favoritos);

    let listaPeliculas = favoritos.findIndex((event) => {
        return event.id === datos.id;
    })
    if(listaPeliculas > -1){
        favoritos.splice(listaPeliculas, 1);
    }else{
        favoritos.push(datos);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
});


let favoritos = localStorage.getItem("favoritos") || [];
