let carruselDestacadas = document.getElementById('carruselDestacadas');
let primeraDestacad = document.getElementById('primeraDestacad');
let corruselDestacadas = document.getElementById('corruselDestacadas');
let peliculaPrincipal = document.getElementById("pelicula-principal");

let arrayDePeliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

//Traer todas las peliculas que estén publicadas - publicada === true
const peliculaPublicada = arrayDePeliculas.filter((pelicula) => {
    return pelicula.publicado;
});

// Extrae la información de una pelicula seleccionada para mostrarla en su pagina de detalle

const traerPelicula = (id) => {
    const peliculaFiltrada = arrayDePeliculas.find((pelicula) => {
        return pelicula.id === id
    });
    localStorage.setItem("peliculaSeleccionada", JSON.stringify(peliculaFiltrada));
    location.href = '/html/detalle.html';
}

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
    <button role="button" class="boton" onclick="traerPelicula(${primeraPeliculaFiltrada.id})"><i class="fas fa-info-circle"></i>Más información</button>
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
                <a onclick="traerPelicula(${pelicula.id})"><img src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
            </div>
        `
    });
}
mostrarTodasLasDestacadas();


// ===================== Mostrar segun las categorias ===================== 


let peliculasDeAccionId = document.getElementById('peliculasDeAcción');

const MostrarPeliculasDeAccion = () => {
    const peliculasDeAccion = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Acción"
    });
    peliculasDeAccion.map((pelicula) => {
        peliculasDeAccionId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${pelicula.id})"><img class="img-categorias my-3" src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
        </div>
        `
    })
}
MostrarPeliculasDeAccion();

let peliculasDeMarvelId = document.getElementById('peliculasDeMarvel');

const MostrarPeliculasDeMarvel = () => {
    const peliculasDeMarvel = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Marvel"
    });
    peliculasDeMarvel.map((pelicula) => {
        peliculasDeMarvelId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${pelicula.id})"><img class="img-categorias my-3" src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
        </div>
        `
    })
}
MostrarPeliculasDeMarvel();

let seriesId = document.getElementById('series');

const MostrarSeries = () => {
    const series = peliculaPublicada.filter((serie) => {
        return serie.categoria === "Series"
    });
    series.map((serie) => {
        seriesId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${serie.id})"><img class="img-categorias my-3" src="${serie.imagen}" alt="${serie.nombre}"></a>
        </div>
        `
    })
}
MostrarSeries();

let peliculasComediaId = document.getElementById('peliculasComedia');

const MostrarpeliculasComedia = () => {
    const peliculasComedia = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Comedia"
    });
    peliculasComedia.map((pelicula) => {
        peliculasComediaId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${pelicula.id})"><img class="img-categorias my-3" src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
        </div>
        `
    })
}
MostrarpeliculasComedia();

let peliculasCSFId = document.getElementById('peliculasCienciaFiccion');

const MostrarpeliculasCSF = () => {
    const peliculasCSF = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Ciencia Ficción"
    });
    peliculasCSF.map((pelicula) => {
        peliculasCSFId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${pelicula.id})"><img class="img-categorias my-3" src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
        </div>
        `
    })
}
MostrarpeliculasCSF();

let peliculasTerrorId = document.getElementById('peliculasTerror');

const MostrarpeliculasTerror = () => {
    const peliculasTerror = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Terror"
    });
    peliculasTerror.map((pelicula) => {
        peliculasTerrorId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${pelicula.id})"><img class="img-categorias my-3" src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
        </div>
        `
    })
}
MostrarpeliculasTerror();

let peliculasAventuraId = document.getElementById('peliculasAventura');

const MostrarpeliculasAventura = () => {
    const peliculasAventura = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Aventura"
    });
    peliculasAventura.map((pelicula) => {
        peliculasAventuraId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${pelicula.id})"><img class="img-categorias my-3" src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
        </div>
        `
    })
}
MostrarpeliculasAventura();

let peliculasRomanceId = document.getElementById('peliculasRomanticas');

const MostrarpeliculasRomance = () => {
    const peliculasRomance = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "Romance"
    });
    peliculasRomance.map((pelicula) => {
        peliculasRomanceId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${pelicula.id})"><img class="img-categorias my-3" src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
        </div>
        `
    })
}
MostrarpeliculasRomance();

let documentalesId = document.getElementById('documentales');

const Mostrardocumentales = () => {
    const documentales = peliculaPublicada.filter((documental) => {
        return documental.categoria === "Documentales"
    });
    documentales.map((documental) => {
        documentalesId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${documental.id})"><img class="img-categorias my-3" src="${documental.imagen}" alt="${documental.nombre}"></a>
        </div>
        `
    })
}
Mostrardocumentales();

let peliculasDCId = document.getElementById('peliculasDC');

const MostrarpeliculasDC = () => {
    const peliculasDC = peliculaPublicada.filter((pelicula) => {
        return pelicula.categoria === "DC"
    });
    peliculasDC.map((pelicula) => {
        peliculasDCId.innerHTML += `
        <div class="col-4 col-md-3">
            <a onclick="traerPelicula(${pelicula.id})"><img class="img-categorias my-3" src="${pelicula.imagen}" alt="${pelicula.nombre}"></a>
        </div>
        `
    })
}
MostrarpeliculasDC();









