<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const splide = ref();

let slider_options = {
    rewind: true,
    type: "fade",
    role: "region",
    width: "80%",
}
</script>

<template>

    <Splide ref="splide" :options="slider_options" aria-label="Vue Splide Example">
        <SplideSlide>
            <img src="@/assets/img/slider/slider-1.jpg" alt="Sample 1" class="slider-image">
        </SplideSlide>
        <SplideSlide>
            <img src="@/assets/img/slider/slider-2.jpg" alt="Sample 2" class="slider-image">
        </SplideSlide>
        <SplideSlide>
            <img src="@/assets/img/slider/slider-3.jpg" alt="Sample 3" class="slider-image">
        </SplideSlide>
    </Splide>
</template>

<style>
.splide__arrow {
    transform: none;
}
</style>
