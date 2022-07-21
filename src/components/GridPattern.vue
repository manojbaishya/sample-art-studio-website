<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const splide = ref();

let slider_options = {
    rewind: true,
    type: "fade",
    role: "region",
    width: "80%",
}



var images = [
    {
        tileId: 'tile-1',
        backgroundImage: `url("src/assets/img/gallery/img0.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-2',
        backgroundImage: `url("src/assets/img/gallery/img1.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-3',
        backgroundImage: `url("src/assets/img/gallery/img22.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-4',
        backgroundImage: `url("src/assets/img/gallery/img3.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-5',
        backgroundImage: `url("src/assets/img/gallery/img4.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-6',
        backgroundImage: `url("src/assets/img/gallery/img23.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-7',
        backgroundImage: `url("src/assets/img/gallery/img5.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-8',
        backgroundImage: `url("src/assets/img/gallery/img2.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-9',
        backgroundImage: `url("src/assets/img/gallery/img1.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-10',
        backgroundImage: `url("src/assets/img/gallery/img9.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-11',
        backgroundImage: `url("src/assets/img/gallery/img10.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-12',
        backgroundImage: `url("src/assets/img/gallery/img11.jpg")`,
        imgurl: ""
    },
    {
        tileId: 'tile-13',
        backgroundImage: `url("src/assets/img/gallery/img18.jpg")`,
        imgurl: ""
    },
];

for (var tile of images) {
    tile.imgurl = tile.backgroundImage.slice(4, -1).replace(/["']/g, "");
}

let indices = Array.from({ length: 13 }, (_, i) => 1 + (i * 1));

const showModal = ref(false);

</script>

<template>

    <div id="gridpattern-container">

        <Modal v-model="showModal">
            <template v-slot:title>Hello, vue-final-modal</template>

            <Splide ref="splide" :options="slider_options" aria-label="Vue Splide Example">
                <SplideSlide v-for="(i, ind) in indices" :key="ind">
                    <img :src="images[ind].imgurl" alt="`Sample-${i}`" class="slider-image">
                </SplideSlide>
            </Splide>

        </Modal>

        <div id="grid" v-show="!showModal">
            <div class="tile" v-for="(i, ind) in indices" :key="ind" :id="`tile-${i}`"
                :style="{ 'background-image': images[ind].backgroundImage }" @click="showModal = true">
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.splide__arrow {
    transform: none;
}

#grid {
    display: grid;
    grid: repeat(8, 18vw) / repeat(4, 18vw);
    grid-gap: 1vw;
    justify-content: center;

    .tile {
        background-size: cover;
    }

    .tile:hover {
        cursor: zoom-in;
        filter: brightness(80%);
    }

    #tile-1 {
        grid-area: 1 / 1 / span 2 / span 1;
    }

    #tile-2 {
        grid-area: 1 / 2 / span 1 / span 1;
    }

    #tile-3 {
        grid-area: 2 / 2 / span 1 / span 1;
    }

    #tile-4 {
        grid-area: 1 / 3 / span 1 / span 1;
    }

    #tile-5 {
        grid-area: 1 / 4 / span 1 / span 1;
    }

    #tile-6 {
        grid-area: 3 / 1 / span 2 / span 2;
    }

    #tile-7 {
        grid-area: 2 / 3 / span 2 / span 2;
    }

    #tile-8 {
        grid-area: 4 / 3 / span 1 / span 2;
    }

    #tile-9 {
        grid-area: 5 / 1 / span 2 / span 4;
    }

    #tile-10 {
        grid-area: 7 / 1 / span 2 / span 1;
    }

    #tile-11 {
        grid-area: 7 / 2 / span 2 / span 1;
    }

    #tile-12 {
        grid-area: 7 / 3 / span 1 / span 2;
    }

    #tile-13 {
        grid-area: 8 / 3 / span 1 / span 2;
    }
}

@media only screen and (max-width: calc((75px + 5px) * 13)) {}

@media only screen and (max-width: calc((75px + 5px) * 10)) {}
</style>