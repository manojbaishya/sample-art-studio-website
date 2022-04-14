<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";

import { SidebarState } from "@/stores/sidebar";

const sidebar_state = SidebarState();
</script>

<template>
    <div id="app-container">
        <NavBar />
        <RouterView :style="{ 'margin-left': sidebar_state.sidebarWidth }" />
    </div>
</template>

<style>
@import "chota/dist/chota.min.css";
@import "@/styles/app.css";
</style>
