<script setup>
import Subpage from "../components/Subpage.vue";
import Carousel from "../components/Carousel.vue";

let video_props = {
    width: "1024px",
    height: "683px"
}

</script>
<template>
    <subpage :header=false :isGeneralPage=false>

        <iframe src="https://player.vimeo.com/video/637403296?h=d238ab3e9b&loop=1" :width="video_props.width"
            :height="video_props.height" frameborder="0" allow="autoplay; fullscreen; picture-in-picture">
        </iframe>
        <!-- <Carousel /> -->

    </subpage>
</template>

<style scoped>
iframe {
    margin: auto;
    display: block;
}
</style>