<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getAverageColorFromImage, getPokemonImageUrl } from '../utils';

const route = useRoute()
const backgroundColor = ref('rgba( 237, 238, 241, 0.4)')
const pokemonName = typeof route.params.pokemon === 'string' ? route.params.pokemon : route.params.pokemon[0]
const imageUrl = getPokemonImageUrl(pokemonName)
const averageColor = await getAverageColorFromImage(imageUrl)
const computedColor = averageColor.join(',');
backgroundColor.value = `rgba(${computedColor},0.5)`;
</script>

<template>
  <div class="wrapper">
    <img width="200" :src="`/images/${pokemonName}.jpg`" alt="">
    <h1>{{ pokemonName }}</h1>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  background: linear-gradient(180deg, v-bind(backgroundColor) 75%, rgba(255, 255, 255, 1) 100%);
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
