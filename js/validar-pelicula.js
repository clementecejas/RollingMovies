let pelicula = JSON.parse(localStorage.getItem("pelicula")) || [];
const formPelicula = document.getElementById("formEditAddMovie");

formEditAddMovie.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombrePelicula").value;
    const imagen = document.getElementById("imagenPelicula")
    const descripcion = document.getElementById("descripcionPelicula").value;
    const categoria = document.getElementById("categoriaPelicula").value;
    const errorInput = document.querySelector(".error");

    errorInput.innerHTML = "";
    if(nombre === "" || imagen === "" || descripcion === "" || categoria === "" ){
        errorInput.innerHTML = "Debes completar todos los campos"
        errorInput.style.display = "block";
        errorInput.style.padding = "8px";
        errorInput.style.marginTop = "10px";
        errorInput.style.marginBottom = "10px";
        errorInput.style.color = "white";
        errorInput.style.borderRadius = "10px";
        errorInput.style.backgroundColor = "red";
        return;
    }
});