<script setup>
defineProps({
    title: String,
});
</script>

<template>
    <div id="header">
        <h1>{{ title }}</h1>
    </div>
</template>

<style scoped>
#header {
    text-align: center;
    font-weight: medium;
    font-stretch: condensed;

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}
</style>
