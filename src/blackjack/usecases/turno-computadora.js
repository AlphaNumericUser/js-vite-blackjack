import { pedirCarta, crearCarta, acumularPuntos, determinarGanador } from "./index";

/**
 * Esta función realiza el turno de la computadora
 * @param {Number} puntosMinimos
 * @param {Array<Number>} puntosJugadores
 * @param {Array<String>} deck
 * @param {NodeList} puntosHTML
 * @param {NodeList} divCartasJugadores
 * @returns {void}
*/

export const turnoComputadora = (puntosMinimos, puntosJugadores, deck, puntosHTML, divCartasJugadores) => {

    if (puntosMinimos === undefined || puntosMinimos === null) {
        throw 'Se necesita los puntos mínimos para la computadora';
    }

    if (!puntosJugadores) {
        throw 'Se necesita los puntos de los jugadores';
    }

    if (!deck) {
        throw 'Se necesita el deck de cartas';
    }

    if (!puntosHTML) {
        throw 'Se necesita los puntos de los jugadores en el HTML';
    }

    if (!divCartasJugadores) {
        throw 'Se necesita divCartasJugadores';
    }

    let puntosComputadora = 0;
    do {
      const carta = pedirCarta(deck);
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
      crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
  
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
  
    determinarGanador(puntosJugadores);
}