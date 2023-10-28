import { ref } from 'vue'

type PokemonColors = {
  [key: string]: string
}

const pokemonColors = ref<PokemonColors>({})

export const usePokemonColor = () => {
  function addColor(pokemon: string, color: string) {
    pokemonColors.value[pokemon] = color
  }

  return { pokemonColors: pokemonColors.value, addColor }
}
