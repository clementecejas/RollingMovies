let opciones = ["PIEDRA", "PAPEL", "TIJERA"];
let jugador = null;
let bot = null;

function playGame () {
    seleccionBot()
    seleccionJugador()
};

// crear funcion para que el bot elija una opcion
function seleccionBot() {
    return bot = Math.round(Math.random() * 2);
};

// crear funcion para que el jugador eliga una opción
function seleccionJugador() {
    jugador = parseInt(
        prompt("Ingrese su Opción")
    );
    if (!isNaN(jugador)) {
        if (jugador >= 0 && jugador <= 2) {
            switch (true) {
                case jugador === bot:
                    mensajeAlert("EMPATE");
                    break;
                case jugador === 0 && bot === 2:
                    mensajeAlert("GANASTE")
                    break;
                case jugador === 1 && bot === 0:
                    mensajeAlert("GANASTE");
                    break;
                case jugador === 2 && bot === 1:
                    mensajeAlert("GANASTE");
                    break;
                default:
                    mensajeAlert("PERDISTE")
                    break;
            }
        } else {
            mensajeAlert("noOpcion")
        }

    } else {
        mensajeAlert("noNumero")
    }
}

// funcion que crea mensajes con sweetalert dependiendo las opciones recibidas por parametro
const mensajeAlert = (resultado) => {
    if(resultado === "noOpcion"){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Error",
            text: 'No existe la opción elegida',
            showConfirmButton: false,
            timer: 5500
          })
    }
    if(resultado === "noNumero"){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Error",
            text: 'Debe ingresar un número entre 0 y 2',
            showConfirmButton: false,
            timer: 5500
          })
    }
    if(resultado === "GANASTE") {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "GANASTE",
            text: `Elegiste ${opciones[jugador]} y el Bot eligio ${opciones[bot]}`,
            showConfirmButton: false,
            timer: 5500
          })
    }
    if(resultado === "EMPATE"){
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: "EMPATASTE",
            text: `Elegiste ${opciones[jugador]} y el Bot eligio ${opciones[bot]}`,
            showConfirmButton: false,
            timer: 5500
          })
    }
    if(resultado === "PERDISTE"){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: "PERDISTE",
            text: `Elegiste ${opciones[jugador]} y el Bot eligio ${opciones[bot]}`,
            showConfirmButton: false,
            timer: 5500
          })
    }
}
