<script setup>

import { onBeforeMount } from 'vue';

import Subpage from "../components/Subpage.vue";

let heading = "The Eye of the Karma";

let text = `Nulla proident duis culpa eu cupidatat sunt irure non qui culpa. Mollit laboris magna in in deserunt. Reprehenderit reprehenderit incididunt commodo. Officia adipisicing velit ea cupidatat voluptate irure excepteur.
Aliqua ullamco aliqua minim anim veniam proident consequat reprehenderit ea consectetur deserunt dolore nostrud officia incididunt. Sunt Lorem nisi qui et reprehenderit Lorem quis occaecat quis amet anim tempor dolor amet cillum. Dolore aliquip eu deserunt. Magna sunt occaecat eu anim. Dolor deserunt nulla eu et dolor irure voluptate eiusmod irure laborum sit qui. Incididunt pariatur occaecat proident. Aliqua reprehenderit aliqua labore. Cillum proident anim excepteur eiusmod in magna minim enim reprehenderit eiusmod laborum culpa.
Voluptate quis amet aliqua minim cupidatat. Lorem eiusmod cupidatat ea. Aute sunt reprehenderit qui. Amet duis mollit tempor non pariatur reprehenderit anim incididunt ea sit culpa. Pariatur sit do culpa nisi aute mollit sint nisi dolore ad commodo consectetur culpa. Velit enim et deserunt sint sint non commodo qui laborum irure ad tempor mollit aliquip cillum. Reprehenderit amet incididunt aliqua irure labore aliqua reprehenderit esse tempor minim irure sunt laborum adipisicing irure.`

let imgfilepaths = []

onBeforeMount(() => {
    let index = 0;
    for (let i = 7; i >= 0; i--) {
        imgfilepaths.push([])
        for (let j = 2; j >= 0; j--) {
            index = i * 3 + j;
            imgfilepaths[7 - i].push(`/src/assets/img/gallery/img${index}.jpg`)
        }
    }
})

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
                        <img :src=imgsrc alt="gallery-photo">
                    </div>
                </div>
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
</style>