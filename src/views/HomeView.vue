<script setup>
import Subpage from "../components/Subpage.vue";
import Carousel from "../components/Carousel.vue";

</script>

<template>
    <subpage :header=false :isGeneralPage=false>

        <!-- <iframe src="https://player.vimeo.com/video/637403296?h=d238ab3e9b&loop=1" frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture">
        </iframe> -->
        <Carousel />

    </subpage>
</template>

<style scoped>
iframe {
    --reference-width: 80vw;
    margin: auto;
    display: block;
    width: var(--reference-width) !important;
    height: calc(var(--reference-width) * (9 / 16)) !important;
}
</style>