<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";

import { SidebarState } from "@/stores/sidebar";

const sidebar_state = SidebarState();
</script>

<template>
    <div>
        <NavBar />
        <RouterView :style="{ 'margin-left': sidebar_state.sidebarWidth }" />
    </div>
</template>

<style>
@import "@/styles/app.css";
</style>
