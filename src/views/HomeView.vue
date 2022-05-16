<script setup>
import Subpage from "../components/Subpage.vue";
import Carousel from "../components/Carousel.vue";

</script>

<template>
    <Subpage :header=false :isGeneralPage=false>
        <Carousel />
        <!-- <iframe src="https://player.vimeo.com/video/129697012?h=8d153f2963&title=0&byline=0&portrait=0" width="1080"
            height="608" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> -->
    </Subpage>
</template>

<style scoped>
</style>