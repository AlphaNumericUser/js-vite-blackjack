import _ from "underscore";
import { crearDeck, pedirCarta, valorCarta, crearCarta, acumularPuntos, determinarGanador, turnoComputadora } from "./usecases";

// Variables del programa
let deck = []; // Esta es la baraja de cartas
const tipos = ['C', 'D', 'H', 'S'],
  especiales = ['A', 'J', 'Q', 'K'];
let puntosJugadores = [];

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'),
  btnNuevo = document.querySelector('#btnNuevo'),
  divCartasJugadores = document.querySelectorAll('.divCartas'),
  puntosHTML = document.querySelectorAll('small');

const iniciarJuego = (numJugadores = 2) => {
  deck = crearDeck( tipos, especiales );
  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }
  puntosHTML.forEach(elem => elem.innerText = 0);
  divCartasJugadores.forEach(elem => elem.innerHTML = '');
  btnPedir.disabled = false;
  btnDetener.disabled = false;
}

const preCargarImagenes = () => {
  const cartas = crearDeck(tipos, especiales);
  cartas.forEach(carta => {
    const img = new Image();
    img.src = `/assets/cartas/${carta}.png`;
  });
};

iniciarJuego();
preCargarImagenes();

// Eventos ----------------------------------------------------------------------------------------------------------------------------------
btnPedir.addEventListener('click', () => {

  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

  crearCarta(carta, 0, divCartasJugadores);

  if (puntosJugador > 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosJugadores, deck, puntosHTML, divCartasJugadores);
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosJugadores, deck, puntosHTML, divCartasJugadores);
  }

});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugadores[0], puntosJugadores, deck, puntosHTML, divCartasJugadores);
});

btnNuevo.addEventListener('click', () => {
  iniciarJuego();
});



