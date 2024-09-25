import { valorCarta } from "./valor-carta";

/**
 * Esta función acumula puntos para un jugador y actualiza el HTML
 * @param {String} carta 
 * @param {Number} turno
 * @param {Array<Number>} puntosJugadores
 * @param {NodeList} puntosHTML
 * @returns {Number} puntos del jugador correspondiente al turno
*/

export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    
    if (!carta) {
        throw 'Se necesita la carta';
    }

    if (turno === undefined || turno === null) {
        throw 'Se necesita el turno';
    }

    if (!puntosJugadores) {
        throw 'Se necesita los puntos de los jugadores';
    }

    if (!puntosHTML) {
        throw 'Se necesita los puntos de los jugadores en el HTML';
    }

    // console.log('Carta en acumularPuntos:', carta); // Verificar que la carta se reciba correctamente
    // console.log('Turno en acumularPuntos:', turno); // Verificar que el turno se reciba correctamente

    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}