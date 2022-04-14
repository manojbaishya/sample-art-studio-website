<script setup>
import ShowcaseSubpage from "../components/ShowcaseSubpage.vue";
import Carousel from "../components/Carousel.vue";

var heading = "Home Page";

</script>

<template>
    <ShowcaseSubpage :header=false>
        <Carousel />
    </ShowcaseSubpage>
</template>

<style scoped>
</style>