<script setup lang="ts">
import PokemonCard from '../components/PokemonCard.vue';
import { usePokemonStore } from '../stores/pokemon';

const pokemonStore = usePokemonStore()

pokemonStore.fetchAllPokemon()

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1>Pokédex</h1>
    <p>Use the advanced search to find Pokémon by type, weakness, ability and more!</p>
    <div class="grid">
      <PokemonCard v-for="(pokemon, index) in pokemonStore.pokemon" :key="pokemon.name" :pokemon="pokemon"
        :number="index + 1" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 16px;
}
</style>