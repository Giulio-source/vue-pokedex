export type ApiRes = {
  count: number
  next: string | null
  previous: string | null
  results: PokemonRes[]
}

export type PokemonRes = {
  name: string
  url: string
}
