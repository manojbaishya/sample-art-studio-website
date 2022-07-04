<script setup>

defineProps({
    imgsrc: String,
    title: String,
    caption: String
})

</script>

<template>
    <div class="person-container">
        <div class="member-card">
            <img :src="imgsrc" alt="member-photo">
            <p class="person-title">{{ title }}</p>
            <p class="person-caption">{{ caption }}</p>
        </div>
    </div>

</template>

<style>
.col-4 {
    margin: 0px !important;
}

.person-container {
    background-color: blueviolet;
}

.member-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.person-title {
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    color: azure;
}

.person-caption {
    position: absolute;
    left: 1rem;
    bottom: 0rem;
    color: azure;
}

.member-card:hover {
    transform: translate(-4%, -4%);
    transition: all .2s ease-in-out;
    opacity: 95%;
}
</style>