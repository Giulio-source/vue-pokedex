/* eslint-env node */
const https = require('https')
const fs = require('fs')
const { default: axios } = require('axios')

async function getPokemonImages() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  const pokemonNames = response.data.results.map((res) => res.name)

  pokemonNames.forEach((pokemon) => {
    const imageUrl = `https://img.pokemondb.net/artwork/large/${pokemon}.jpg`
    const imageName = `${pokemon}.jpg`
    const file = fs.createWriteStream(`${__dirname}/public/images/${imageName}`)

    https
      .get(imageUrl, (response) => {
        response.pipe(file)

        file.on('finish', () => {
          file.close()
          console.log(`Image downloaded as ${imageName}`)
        })
      })
      .on('error', (err) => {
        fs.unlink(imageName, () => {
          console.error(`Error downloading image: ${err.message}`)
        })
      })
  })
}

getPokemonImages()
