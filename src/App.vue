<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="relative flex min-h-screen antialiased">
        <NavBar />
        <RouterView />
    </div>
</template>

<style>
@import "@/styles/base.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css";
</style>
