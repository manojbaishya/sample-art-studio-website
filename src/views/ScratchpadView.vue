<script setup lang="ts">
import Subpage from "../components/Subpage.vue";
import VueEasyLightbox from 'vue-easy-lightbox';

import GridPattern from "../components/GridPattern.vue";

let imgs: string[] = ["/src/assets/img/people/1030870.jpeg", "/src/assets/img/people/1520760.jpeg"];
let visible: boolean = true;
let index: number = 0;

function show(): void {
    visible = true;
}

function handleHide(): void {
    visible = false;
}

</script>

<template>
    <Subpage title="Scratchpad">

        <GridPattern />

        <!-- <VueEasyLightbox scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index"
            @hide="handleHide"></VueEasyLightbox> -->

    </Subpage>
</template>
