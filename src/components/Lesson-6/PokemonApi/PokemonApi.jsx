function fetchPokemon(newName) {
  const URL_ADDR = 'https://pokeapi.co/api/v2/pokemon/';
  return fetch(`${URL_ADDR}${newName}`);
}
const api = { fetchPokemon };
export default api;

// const URL_ADDR = 'https://pokeapi.co/api/v2/pokemon/';
// const fetchPokemon = (newName) => fetch(`${URL_ADDR}${newName}`);
// export default fetchPokemon
