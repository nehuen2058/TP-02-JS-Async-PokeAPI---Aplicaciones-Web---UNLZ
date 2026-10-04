import { pedirPokemonPorNombre, pedirListaPokemon } from './servicios/api.js';

import { mostrarCards, mostrarSpinner } from './ui/ui.js';

const buscador = document.getElementById('buscador');
const buscadorTexto = document.getElementById('buscadorTexto');
const btnVolver = document.getElementById('btnVolver');

buscador.addEventListener('submit', (e) => {
  e.preventDefault();
  buscar();
});

btnVolver.addEventListener('click', () => {
  buscadorTexto.value = '';
  cargarCatalogo();
});



async function cargarCatalogo() {

    mostrarSpinner(true);
  
  try {

    const lista = await pedirListaPokemon();
    mostrarCards(lista);

  } catch (error) {

    Swal.fire({ icon: 'error', title: 'Error', text: error.message });

  } finally {
    mostrarSpinner(false);
  }
}

async function buscar() {
    
    const buscado = buscadorTexto.value.trim();
    
    if (!buscado) {
      Swal.fire({ icon: 'error', title: 'Error', text: "Debe ingresar un nombre de pokemon" });
      return;
    }
    mostrarSpinner(true);
    try {

        const pokemon = await pedirPokemonPorNombre(buscado);
        mostrarCards([pokemon]);

    } catch (error) {

        Swal.fire({ icon: 'error', title: 'Error', text: error.message });

    } finally {
        mostrarSpinner(false);
    }
}


cargarCatalogo();
