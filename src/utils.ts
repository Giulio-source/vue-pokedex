import { FastAverageColor } from 'fast-average-color'

export async function getAverageColorFromImage(imageUrl: string) {
  const fac = new FastAverageColor()
  const result = await fac
    .getColorAsync(imageUrl)
    .then((color) => {
      return color.value.splice(0, 3)
    })
    .catch((e) => {
      return [0, 0, 0]
    })
  return result
}

export function getPokemonImageUrl(pokemon: string) {
  return `/vue-pokedex/images/${pokemon}.jpg`
}
