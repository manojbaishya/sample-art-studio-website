<script setup>
import Sidebar from "./components/Sidebar.vue"
import { RouterView } from "vue-router";
</script>

<template>
    <div id="app-container">
        <Sidebar />
        <RouterView />
    </div>
</template>

<style>
@import "chota/dist/chota.min.css";
@import "@/styles/chota.custom.scss";
@import "@/styles/fonts.scss";
@import "@/styles/app.scss";
</style>
