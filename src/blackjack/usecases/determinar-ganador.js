/**
 * Esta función crea una carta en el HTML
 * @param {Array<String>} puntosJugadores
 * @returns {void}
*/

export const determinarGanador = (puntosJugadores) => {

    if (!puntosJugadores) {
        throw 'Se necesitan los puntos de los jugadores';
    }

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        let mensaje = '';
        if (puntosComputadora === puntosMinimos) {
            mensaje = 'Empate';
        } else if (puntosMinimos > 21) {
            mensaje = 'Computadora gana';
        } else if (puntosComputadora > 21) {
            mensaje = 'Jugador gana';
        } else {
            mensaje = 'Computadora gana';
        }
        mostrarModal(mensaje);
    }, 100);
}

const mostrarModal = (mensaje) => {
    const modal = document.getElementById('modal');
    const mensajeModal = document.getElementById('mensaje-modal');
    const spanCerrar = document.getElementById('cerrar');

    mensajeModal.textContent = mensaje;
    modal.style.display = 'block';

    spanCerrar.onclick = () => {
        modal.style.display = 'none';
    }
}