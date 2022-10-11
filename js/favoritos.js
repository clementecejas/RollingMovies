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
favoritos = JSON.stringify(favoritos);

let ul = document.createElement('ul');
for(let x = 0; x < favoritos.length; x++){
    let li = document.createElement("li");
    var a = document.createElement("a");
    a.href= favoritos[x].nombre;
    a.textContent = favoritos[x].nombre;
    li.appendChild(a);
    ul.appendChild(li);
}

document.getElementById("favoritos").appendChild(ul);
