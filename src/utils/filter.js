export function filterPokemons(pokemons, searchTerm) {
  return pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
}
