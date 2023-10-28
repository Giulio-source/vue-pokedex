<script setup lang="ts">
import { getAverageColorFromImage, getPokemonImageUrl } from '@/utils';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import type { PokemonRes } from '../types';

const props = defineProps<{ pokemon: PokemonRes, number: number }>()
const imageUrl = getPokemonImageUrl(props.pokemon.name)
const backgroundColor = ref('rgba( 237, 238, 241, 0.4)')
const borderColor = ref('rgba( 237, 238, 241, 0.7)')

const averageColor = await getAverageColorFromImage(imageUrl)

const computedColor = averageColor.join(',');
backgroundColor.value = `rgba(${computedColor},0.4)`
borderColor.value = `rgba(${computedColor},0.7)`
</script>

<template>
    <RouterLink :to="`/pokemon/${pokemon.name}`">
        <div class="pokemon-cell">
            <p class="name">{{ pokemon.name }} <span>#{{ number }}</span></p>
            <img :src="imageUrl" :alt="pokemon.name">
        </div>
    </RouterLink>
</template>

<style scoped lang="scss">
.pokemon-cell {
    cursor: pointer;
    overflow: hidden;
    padding: 32px 16px;
    border-radius: 16px;
    background: v-bind(backgroundColor);
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    transition: all 0.1s;

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

    @media (hover:hover) {
        &:hover {
            transform: scale(1.05);
            background: v-bind(backgroundColor);
            border: 2px solid v-bind(backgroundColor);
        }
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