<script setup>

</script>

<template>

    <div id="gridcontainer">
        <div class="photo photo1">
        </div>
        <div class="photo photo2">
        </div>
        <div class="photo photo3">
        </div>
        <div class="photo photo4">
        </div>
        <div class="photo photo5">
        </div>
        <div class="photo photo6">
        </div>
        <div class="photo photo7">
        </div>
        <div class="photo photo8">
        </div>
        <div class="photo photo9">
        </div>
        <div class="photo photo10">
        </div>
        <div class="photo photo11">
        </div>
        <div class="photo photo12">
        </div>
        <div class="photo photo13">
        </div>
        <div class="photo photo14">
        </div>
        <div class="photo photo15">
        </div>
        <div class="photo photo16">
        </div>
        <div class="photo photo17">
        </div>
        <div class="photo photo18">
        </div>
        <div class="photo photo19">
        </div>
        <div class="photo photo20">
        </div>
    </div>

</template>



<style>
#gridcontainer {
    display: grid;
    grid: repeat(4, 75px) / repeat(13, 75px);
    grid-gap: 5px;
    justify-content: center;
}

.photo {
    background-size: cover;
}

.photo1 {
    grid-area: 1 / 1 / span 2 / span 2;
    background-image: url(https://habrastorage.org/webt/pk/2g/gr/pk2ggrlyxmz0_lcxaoucx91vye0.jpeg);
}

.photo2 {
    grid-area: 1 / 3;
    background-image: url(https://habrastorage.org/webt/8s/fl/ck/8sflckittl6ndzzqdxolyzotfig.jpeg);
}

.photo3 {
    grid-area: 2 / 3;
    background-image: url(https://habrastorage.org/webt/rq/rs/9r/rqrs9rgiqb4tn2reayiwlruttnk.jpeg);
}

.photo4 {
    grid-area: 3 / 1;
    background-image: url(https://habrastorage.org/webt/wm/tc/gj/wmtcgjinb4fw2eano1svzb18hj0.jpeg);
}

.photo5 {
    grid-area: 4 / 1;
    background-image: url(https://habrastorage.org/webt/k3/rs/gi/k3rsgivjolojaiqg5vk1z0-8u5k.jpeg);
}

.photo6 {
    grid-area: 3 / 2 / span 2 / span 2;
    background-image: url(https://habrastorage.org/webt/ao/ui/43/aoui43h5cb-e_zwrwg2zfnst3te.jpeg);
}

.photo7 {
    grid-area: 1 / 4;
    background-image: url(https://habrastorage.org/webt/yk/yl/np/ykylnpls0w4skoxejnktjtdp0vg.jpeg);
}

.photo8 {
    grid-area: 1 / 5;
    background-image: url(https://habrastorage.org/webt/fs/i9/fs/fsi9fsqft_crmv_wcy3kk5gqdzg.jpeg);
}

.photo9 {
    grid-area: 2 / 4 / span 2 / span 2;
    background-image: url(https://habrastorage.org/webt/cb/8p/vm/cb8pvmulg7_y_5qdrikacmfm0v4.jpeg);
}

.photo10 {
    grid-area: 4 / 4;
    background-image: url(https://habrastorage.org/webt/wx/nk/zf/wxnkzfvnvse6ducekyxmf5dbqe0.jpeg);
}

.photo11 {
    grid-area: 4 / 5;
    background-image: url(https://habrastorage.org/webt/7e/0d/f6/7e0df66wyt_wtemnhak44ta_w70.jpeg);
}

.photo12 {
    grid-area: 1 / 6 / span 4 / span 4;
    background-image: url(https://habrastorage.org/webt/sd/_h/xj/sd_hxjdqiyrqwmjg0hi5touzh7k.jpeg);
}

.photo13 {
    grid-area: 1 / 10 / span 2 / span 2;
    background-image: url(https://habrastorage.org/webt/8s/iz/l5/8sizl5_lv0bhqnogwxx6trbwpic.jpeg);
}

.photo14 {
    grid-area: 3 / 10 / span 2 / span 2;
    background-image: url(https://habrastorage.org/webt/dv/ww/js/dvwwjs8qslop5p7olxzrk-q2btq.jpeg);
}

.photo15 {
    grid-area: 1 / 12;
    background-image: url(https://habrastorage.org/webt/nq/zg/ko/nqzgko7cteerdjtn2rqnyvldrry.jpeg);
}

.photo16 {
    grid-area: 1 / 13;
    background-image: url(https://habrastorage.org/webt/e-/4r/od/e-4rode0njp9y6dg9-zq2aj_v6q.jpeg);
}

.photo17 {
    grid-area: 2 / 12;
    background-image: url(https://habrastorage.org/webt/su/95/ad/su95adoufur8db22yy4_qubth5i.jpeg);
}

.photo18 {
    grid-area: 2 / 13;
    background-image: url(https://habrastorage.org/webt/fm/fh/hm/fmfhhm6komzlwnulo4tqkqkdbuc.jpeg);
}

.photo19 {
    grid-area: 3 / 12 / span 2 / span 2;
    background-image: url(https://habrastorage.org/webt/lb/k4/li/lbk4liv48ufy1mqybbz-s81twmu.jpeg);
}

.photo20 {
    display: none;
    background-image: url(https://habrastorage.org/webt/al/us/mc/alusmc984k6wa-cpcbmlhkl_jxi.jpeg);
}

@media only screen and (max-width: calc((75px + 5px) * 13)) {
    #gridcontainer {
        grid: repeat(5, 75px) / repeat(10, 75px);
    }

    .photo20 {
        grid-area: 4 / 9 / span 2 / span 2;
    }
}

@media only screen and (max-width: calc((75px + 5px) * 10)) {
    #gridcontainer {
        grid: repeat(4, 75px) / repeat(5, 75px);
    }

    .photo {
        grid-area: auto / auto;
    }
}
</style>