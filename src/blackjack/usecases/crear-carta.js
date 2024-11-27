/**
 * Esta función crea una carta en el HTML
 * @param {String} carta 
 * @param {Number} turno
 * @param {NodeList} divCartasJugadores
 * @returns {void}
*/

export const crearCarta = (carta, turno, divCartasJugadores) => {

    if (!carta) {
        throw 'Se necesita la carta';
    }

    if (turno === undefined || turno === null) {
        throw 'Se necesita el turno';
    }

    if (!divCartasJugadores) {
        throw 'Se necesita divCartasJugadores';
    }

    const imgCarta = document.createElement('img');
    imgCarta.src = `/assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}