<script setup lang="ts">
import { FastAverageColor } from 'fast-average-color';
import { ref } from 'vue';
import type { PokemonRes } from '../types';

const props = defineProps<{ pokemon: PokemonRes, number: number }>()
const imageUrl = `https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`
const backgroundColor = ref('rgba( 237, 238, 241, 0.4)')

const fac = new FastAverageColor();
fac.getColorAsync(imageUrl)
    .then(color => {
        backgroundColor.value = `rgba(
            ${color.value[0]},
            ${color.value[1]},
            ${color.value[2]},
            0.4)`
    })
    .catch(e => {
        console.log(e);
    });


</script>

<template>
    <div class="pokemon-cell">
        <p class="name">{{ pokemon.name }} <span>#{{ number }}</span></p>
        <img :src="imageUrl" :alt="pokemon.name">
    </div>
</template>

<style scoped lang="scss">
.pokemon-cell {
    overflow: hidden;
    padding: 32px 16px;
    border-radius: 16px;
    background: v-bind(backgroundColor);
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;

    &::before {
        content: url(/pokeball.svg);
        width: 150px;
        height: 150px;
        position: absolute;
        filter: invert(1);
        right: -30px;
        bottom: -30px;
        transform: rotate(-15deg);
    }
}

.name {
    text-align: center;
    text-transform: capitalize;
    font-weight: 600;
}

img {
    width: 100%;
    height: 100px;
    object-fit: contain;
    mix-blend-mode: multiply;
    filter: brightness(1);
}
</style>