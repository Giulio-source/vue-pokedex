<script setup lang="ts">
import MenuRoute from './MenuRoute.vue';
</script>

<template>
    <nav>
        <div class="wrapper">

            <MenuRoute to="/">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10 18v-3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v3M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8">
                        </path>
                    </svg>
                </template>
                <template #label>Home</template>
            </MenuRoute>
            <MenuRoute to="/comparator">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.168 8A10.003 10.003 0 0 0 12 2C6.815 2 2.55 5.947 2.05 11"></path>
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h4.4a.6.6 0 0 0 .6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9">
                        </path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.05 16h-4.4a.6.6 0 0 0-.6.6V21"></path>
                    </svg>
                </template>
                <template #label>Comparator</template>
            </MenuRoute>
            <MenuRoute to="/quiz">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" viewBox="0 0 24 24">
                        <path d="M9 9c0-3.5 5.5-3.5 5.5 0 0 2.5-2.5 2-2.5 5M12 18.01l.01-.011" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M5 18 3.13 4.913a.996.996 0 0 1 .774-1.114l7.662-1.703a2 2 0 0 1 .868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18Z">
                        </path>
                    </svg>
                </template>
                <template #label>Quiz</template>
            </MenuRoute>
            <MenuRoute to="/favorites">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linejoin="round"
                            d="M22 8.862a5.95 5.95 0 0 1-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274.265-.274A5.612 5.612 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862Z">
                        </path>
                    </svg>
                </template>
                <template #label>Favorites</template>
            </MenuRoute>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    border-top: 2px solid #ddd;
    padding: 16px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white
}

.wrapper {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
}

svg {
    stroke: currentColor;
    fill: none;
    width: 24px;
    height: 24px;
}
</style>