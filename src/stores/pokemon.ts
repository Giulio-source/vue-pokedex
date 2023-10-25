import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ApiRes, PokemonRes } from '../types'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemon = ref<PokemonRes[]>([])

  function fetchAllPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((res: ApiRes) => {
        pokemon.value = res.results
      })
  }

  return { pokemon, fetchAllPokemon }
})

