/**
 * Esta función crea una carta en el HTML
 * @param {Array<String>} puntosJugadores
 * @returns {void}
*/

export const determinarGanador = (puntosJugadores) => {

    if (!puntosJugadores) {
        throw 'Se necesita los puntos de los jugadores';
    }

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert('Empate');
      } else if (puntosMinimos > 21) {
        alert('Computadora gana');
      } else if (puntosComputadora > 21) {
        alert('Jugador gana');
      } else {
        alert('Computadora gana');
      }
    }, 100);
  }