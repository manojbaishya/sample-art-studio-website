<script setup>
defineProps({
    title: String,
});
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    font-family: Lato;
    font-style: italic;
}
</style>
