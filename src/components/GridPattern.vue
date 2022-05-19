<script setup>

</script>

<template>
    <div id="grid-pattern-unit">
        <div class="row">
            <div class="col-6 tile tile-large">
                <img src="../assets/img/landscape/img1.jpg" alt="">
            </div>
            <div class="col-3 tile tile-small">
                <img src="../assets/img/gallery/img13.jpg" alt="">
            </div>
            <div class="col-3 tile tile-small">
                <img src="../assets/img/gallery/img21.jpg" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-3 tile tile-small">
                <img src="../assets/img/gallery/img5.jpg" alt="">
            </div>
            <div class="col-6 tile tile-large">
                <img src="../assets/img/landscape/img2.jpg" alt="">
            </div>
            <div class="col-3 tile tile-small">
                <img src="../assets/img/gallery/img16.jpg" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-3 tile tile-small">
                <img src="../assets/img/gallery/img11.jpg" alt="">
            </div>
            <div class="col-3 tile tile-small">
                <img src="../assets/img/gallery/img18.jpg" alt="">
            </div>
            <div class="col-6 tile tile-large">
                <img src="../assets/img/landscape/img1.jpg" alt="">
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
#grid-pattern-unit {
    margin-left: 180px;
}

.tile {
    margin: 0px;
}

.tile-small {
    height: inherit !important;
}
</style>