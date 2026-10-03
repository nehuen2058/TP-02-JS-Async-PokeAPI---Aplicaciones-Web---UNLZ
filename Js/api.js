
const urlBase = "https://pokeapi.co/api/v2";


const pedirPokemon = async (pedido) => {
  
    const res = await fetch(`${urlBase}/${pedido}`);
    if (!res.ok) throw new Error("Error en la red");
    return await res.json();
};



export const pedirListaPokemon = async () => {
  
    const res = await pedirPokemon("pokemon?limit=20");
    return await Promise.all(res.results.map((p) => pedirPokemonPorNombre(p.name)));
}


export const pedirPokemonPorNombre = async (nombre) => {
    const nombreLimpio = nombre.trim().toLowerCase();
    return await pedirPokemon(`pokemon/${nombreLimpio}`);
}