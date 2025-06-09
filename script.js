const texto = "Ticket de Avión";
const titulo = document.getElementById("titulo");
let index = 0;
let velocidad = 100; // Velocidad en ms

function escribirTexto() {
    if (index < texto.length) {
        titulo.textContent += texto.charAt(index);
        index++;
        setTimeout(escribirTexto, velocidad);
    } else {
        setTimeout(borrarTexto, 1000); // Espera antes de borrar
    }
}

function borrarTexto() {
    if (index > 0) {
        titulo.textContent = texto.substring(0, index - 1);
        index--;
        setTimeout(borrarTexto, velocidad / 2); // Borra más rápido
    } else {
        setTimeout(escribirTexto, 500); // Espera antes de repetir
    }
}

escribirTexto(); // Iniciar animación



