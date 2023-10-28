<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePokemonColor } from '../composables/usePokemonColor';
import { type IPokemon } from '../types';
import { getAverageColorFromImage, getPokemonImageUrl } from '../utils';

const backgroundColor = ref<string>('');
const pokemonData = ref<IPokemon>();
const route = useRoute()
const { pokemonColors, addColor } = usePokemonColor()

const pokemonName = typeof route.params.pokemon === 'string' ? route.params.pokemon : route.params.pokemon[0]
const imageUrl = getPokemonImageUrl(pokemonName)
if (!pokemonColors[pokemonName]) {
  const averageColor = await getAverageColorFromImage(imageUrl)
  const computedColor = averageColor.join(', ');
  addColor(pokemonName, `rgba(${computedColor}, 0.4)`)
}
const computedColor = pokemonColors[pokemonName];
backgroundColor.value = `linear-gradient(180deg, ${computedColor} 75%, rgba(255, 255, 255, 1) 100%) `;

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(res => res.json())
  .then(res => pokemonData.value = res)

const pokemonIndex = computed(() => pokemonData.value?.id.toString().padStart(3, '0'))
const pokemonType = computed(() => pokemonData.value?.types.map(type => type.type.name).join(', '))

</script>

<template>
  <div class="wrapper" :style="{ background: backgroundColor }">
    <p>#{{ pokemonIndex }}</p>
    <img width="200" :src="imageUrl" :alt="pokemonName">
    <h1>{{ pokemonName }}</h1>
    <p>{{ pokemonType }}</p>
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
