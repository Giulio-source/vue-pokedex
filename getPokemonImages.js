// @ts-nocheck
/* eslint-env node */
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const downloadDirectory = "./public/images";

async function getPokemonNames() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    return response.data.results.map((res) => res.name);
  } catch (error) {
    console.error(
      "Could not fetch pokemon from https://pokeapi.co/api/v2/pokemon?limit=151"
    );
  }
}

async function downloadImage(imageUrl, filename) {
  try {
    const response = await axios.get(imageUrl, { responseType: "stream" });
    response.data.pipe(
      fs.createWriteStream(path.join(downloadDirectory, filename))
    );
    console.log("\x1b[32m", filename);
    return true;
  } catch (error) {
    console.error(`Failed to download ${filename}: ${error.message}`);
    return false;
  }
}

async function downloadImages(imageUrls) {
  const successfulDownloads = [];
  for (const imageUrl of imageUrls) {
    const filename = path.basename(imageUrl);
    const downloaded = await downloadImage(imageUrl, filename);
    if (downloaded) {
      successfulDownloads.push(filename);
    }
  }
  return successfulDownloads;
}

if (!fs.existsSync(downloadDirectory)) {
  fs.mkdirSync(downloadDirectory);
}

(async () => {
  const pokemon = await getPokemonNames();
  const imageUrls = pokemon.map(
    (pokemon) => `https://img.pokemondb.net/artwork/large/${pokemon}.jpg`
  );
  const successfulDownloads = await downloadImages(imageUrls);
  console.log("\x1b[42m\x1b[30m",  `Successfully downloaded ${successfulDownloads.length} images `);
})();
