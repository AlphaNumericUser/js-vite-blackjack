/**
 * Esta función permite tomar una carta
 * @param {Array<String>} deck
 * @returns {String} carta
*/

export const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  console.log('Carta pedida:', carta); // Verificar que la carta se pida correctamente
  return carta;
}