/**
 * Esta función me permite tomar el valor de la carta
 * @param {String} carta 
 * @returns {Number} valor numerico de la carta
*/

export const valorCarta = (carta) => {

    if (!carta) {
        throw 'Se necesita la carta';
    }

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
      (valor === 'A') ? 11 : 10 // Todas las letras valen 10, excepto el As que vale 11
      : valor * 1; // El * 1 convierte el string a número

}