import { describe, it, expect } from 'vitest'
import { filterPokemons } from '../src/utils/filter'

describe('filterPokemons', () => {
  it('should return matching Pokémon', () => {
    const sample = [
      { name: 'Pikachu' },
      { name: 'Bulbasaur' },
      { name: 'Charmander' }
    ]

    const result = filterPokemons(sample, 'chu')
    expect(result).toEqual([{ name: 'Pikachu' }])
  })

  it('should return an empty array if no matches', () => {
    const sample = [
      { name: 'Squirtle' },
      { name: 'Eevee' }
    ]

    const result = filterPokemons(sample, 'xyz')
    expect(result).toEqual([])
  })
})
