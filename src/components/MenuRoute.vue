<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const props = defineProps<{ to: string }>()

const menuColor = computed(() => props.to === route.path ? '#4e4e4e' : '#ddd');
</script>

<template>
    <div class="menu-item">
        <slot name="icon"></slot>

        <p>
            <slot name="label"></slot>
        </p>
    </div>
</template>

<style scoped lang="scss">
.menu-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: v-bind(menuColor);

    p {
        font-size: 16px;
        font-weight: 600;
    }

}
</style>