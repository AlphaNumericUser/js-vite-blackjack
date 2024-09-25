import _ from "underscore";

// ! Super util lo de los params

/**
 * Esta función crea un nuevo deck (baraja) de cartas
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} deck
*/

// Esta función crea un nuevo deck (baraja) de cartas
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if (!tiposDeCarta || !tiposEspeciales) {
    throw 'Se necesitan los tipos de carta y los tipos especiales';
  }

  if (tiposDeCarta.length === 0 || tiposEspeciales.length === 0) {
    throw 'Los tipos de carta y los tipos especiales no pueden estar vacíos';
  }

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  return _.shuffle(deck);
  
}