import { pedirPokemonPorNombre, pedirListaPokemon } from './api.js';

import { mostrarCards, mostrarSpinner } from './ui.js';


mostrarCards([await pedirPokemonPorNombre("pikachu")]);
mostrarSpinner(true);