export const mostrarCards = (pokemons) => {

    document.getElementById("cards").innerHTML = pokemons.map(crearCard).join("");

};


export const mostrarSpinner = (visible) => {

    document.getElementById('spinner').classList.toggle('d-none', !visible)

};

const crearCard = (pokemon) => 
  `
<div class="col-6 col-md-3">
    <div class="card text-center h-100">
      <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
      <div class="card-body">
        <h5 class="card-title text-capitalize">${pokemon.name}</h5>
        <p class="card-text">#${pokemon.id}</p>
      </div>
    </div>
  </div>
  
  `;