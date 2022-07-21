<script setup lang="ts">

import { onBeforeMount, ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

import Subpage from "../components/Subpage.vue";

let heading: string = "ART STUDIO ON THE STREETS";

let text: string = `Voluptate quis amet aliqua minim cupidatat. Lorem eiusmod cupidatat ea. Aute sunt reprehenderit qui. Amet duis mollit tempor non pariatur reprehenderit anim incididunt ea sit culpa. Pariatur sit do culpa nisi aute mollit sint nisi dolore ad commodo consectetur culpa. Velit enim et deserunt sint sint non commodo qui laborum irure ad tempor mollit aliquip cillum. Reprehenderit amet incididunt aliqua irure labore aliqua reprehenderit esse tempor minim irure sunt laborum adipisicing irure.
Nulla proident duis culpa eu cupidatat sunt irure non qui culpa. Mollit laboris magna in in deserunt. Reprehenderit reprehenderit incididunt commodo. Officia adipisicing velit ea cupidatat voluptate irure excepteur.
Aliqua ullamco aliqua minim anim veniam proident consequat reprehenderit ea consectetur deserunt dolore nostrud officia incididunt. Sunt Lorem nisi qui et reprehenderit Lorem quis occaecat quis amet anim tempor dolor amet cillum. Dolore aliquip eu deserunt. Magna sunt occaecat eu anim. Dolor deserunt nulla eu et dolor irure voluptate eiusmod irure laborum sit qui. Incididunt pariatur occaecat proident. Aliqua reprehenderit aliqua labore. Cillum proident anim excepteur eiusmod in magna minim enim reprehenderit eiusmod laborum culpa.`

let imgfilepaths: string[][] = [];
let modalfilepaths: string[] = [];
let visible = ref(false);
let index = ref(0);

onBeforeMount(() => {
    let index = 0;
    for (let i = 0; i < 8; i++) {
        imgfilepaths.push([])
        for (let j = 0; j < 3; j++) {
            index = i * 3 + j;
            let url = `/src/assets/img/gallery/img${index}.jpg`;
            imgfilepaths[i].push(url);
            modalfilepaths.push(url);
        }
    }
})

function handleHide(): void {
    visible.value = false;
}

function show(idx: number): void {
    index.value = idx;
    visible.value = true;
}
</script>

<template>
    <Subpage :title="heading">

        <div id="gallery-container">
            <div id="gallery-text">
                {{ text }}
            </div>
            <div id="photo-grid">
                <div class="row" v-for="(imgrow, rowkey, i) in imgfilepaths" :key="rowkey">
                    <div class="col-4" v-for="(imgsrc, colkey, j) in imgrow" :key="colkey">
                        <img :src=imgsrc alt="gallery-photo" @click="show(rowkey * 3 + colkey)">
                    </div>
                </div>
            </div>

            <!-- <div id="photo-grid">
                <div class="row">
                    <div class="col col-4 col-4-md col-4-lg">
                        <img class="image" src="/src/assets/img/tall/1.jpg" alt="placeholder">
                        <img class="image" src="/src/assets/img/gallery/img11.jpg" alt="placeholder">
                    </div>
                    <div class="col col-4 col-4-md col-4-lg">
                        <img class="image" src="/src/assets/img/gallery/img10.jpg" alt="placeholder">
                        <img class="image" src="/src/assets/img/tall/2.jpg" alt="placeholder">
                    </div>
                    <div class="col col-4 col-4-md col-4-lg">
                        <img class="image" src="/src/assets/img/gallery/img10.jpg" alt="placeholder">
                        <img class="image" src="/src/assets/img/gallery/img16.jpg" alt="placeholder">
                    </div>
                </div> -->

            <!-- </div> -->

            <div>
                <VueEasyLightbox scrollDisabled moveDisabled :visible="visible" :imgs="modalfilepaths" :index="index"
                    @hide="handleHide"></VueEasyLightbox>

            </div>
        </div>

    </Subpage>
</template>

<style scoped>
#gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
}

#photo-grid {
    padding-top: 2em;
}

element.style {}

.col-4 {
    margin: 0px !important;
}

@media screen and (max-width: 599px) {
    .image {
        display: block;
        margin: auto;
    }
}
</style>