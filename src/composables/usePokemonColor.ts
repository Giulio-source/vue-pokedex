const pokemonColors: {
  [key: string]: string
} = {}

export const usePokemonColor = () => {
  function addColor(pokemon: string, color: string) {
    pokemonColors[pokemon] = color
  }

  return { pokemonColors, addColor }
}
