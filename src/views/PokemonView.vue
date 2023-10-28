<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemonColor } from '../composables/usePokemonColor';
import { getPokemonImageUrl } from '../utils';

const route = useRoute()

const pokemonName = typeof route.params.pokemon === 'string' ? route.params.pokemon : route.params.pokemon[0]
const imageUrl = getPokemonImageUrl(pokemonName)
const { pokemonColors } = usePokemonColor()

const computedColor = pokemonColors[pokemonName];
const backgroundGradient = `linear-gradient(180deg, ${computedColor} 75%, rgba(255, 255, 255, 1) 100%) `;
</script>

<template>
  <div class="wrapper" :style="{ background: backgroundGradient }">
    <img width="200" :src="imageUrl" :alt="pokemonName">
    <h1>{{ pokemonName }}</h1>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;

  img {
    mix-blend-mode: multiply;
    filter: brightness(1);
  }
}

h1 {
  text-transform: capitalize;
}
</style>
