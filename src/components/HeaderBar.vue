<script setup>
import { DarkMode } from "@/stores/darkmode";

defineProps({
    title: String,
});

const darkmode = DarkMode();
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
    </div>

    <button @click="darkmode.toggle">Toggle Dark Mode</button>
</template>

<style scoped>
h1 {
    text-align: center;
    font-family: Lato;
    font-style: italic;
}
</style>
