class Vuelo {
    constructor(numeroVuelo, destino, numeroAsiento, letraAsiento, tipoTicket, precio, nombreCliente) {
        this.numeroVuelo = numeroVuelo;
        this.destino = destino;
        this.numeroAsiento = this.validarNumeroAsiento(numeroAsiento);
        this.letraAsiento = letraAsiento;
        this.tipoTicket = this.validarTipoTicket(tipoTicket);
        this.precio = this.validarPrecio(precio);
        this.nombreCliente = this.validarNombreCliente(nombreCliente);
    }

    validarTipoTicket(tipo) {
        return tipo === 'E' || tipo === 'T' ? tipo : 'T';
    }

    validarPrecio(precio) {
        return precio > 0 ? precio : 0;
    }

    validarNombreCliente(nombre) {
        return nombre.length >= 6 ? nombre : "NO ASIGNADO";
    }

    validarNumeroAsiento(asiento) {
        if (asiento < 1 || asiento > 853) {
            console.error("ERROR: El número de asiento es inválido.");
            return "NO ASIGNADO"; // Reemplaza con un mensaje en caso de número inválido
        }
        return asiento;
    }

    imprimirTicket() {
        return `
        <div class="ticket">
            <h2>✈️ TICKET AÉREO</h2>
            <p><strong>Cliente:</strong> ${this.nombreCliente}</p>
            <p><strong>Tipo de Ticket:</strong> ${this.tipoTicket}</p>
            <p><strong>Asiento:</strong> ${this.numeroAsiento}-${this.letraAsiento}</p>
            <p><strong>Destino:</strong> ${this.destino}</p>
            <p><strong>Precio:</strong> $${this.precio}</p>
        </div>
        `;
    }
}

function generarTicket() {
    const nombre = document.getElementById("nombre").value;
    const destino = document.getElementById("destino").value;
    const numeroAsiento = parseInt(document.getElementById("asiento").value);
    const letraAsiento = document.getElementById("letra").value;
    const tipoTicket = document.getElementById("tipo").value;
    const precio = parseFloat(document.getElementById("precio").value);

    if (nombre.length >= 6) {
        alert("ERROR: Nombre muy corto.");
        return;
    }

    if (numeroAsiento < 1 || numeroAsiento > 853) {
        alert("ERROR: El número de asiento debe estar entre 1 y 853.");
        return;
    }

    const vuelo = new Vuelo(101, destino, numeroAsiento, letraAsiento, tipoTicket, precio, nombre);
    document.getElementById("resultado").innerHTML = vuelo.imprimirTicket();
}
