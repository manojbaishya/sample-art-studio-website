<script setup>
import NavBarLink from "./NavBarLink.vue";
import { SidebarState } from "@/stores/sidebar";
import { DarkMode } from "@/stores/darkmode";

const sidebar_state = SidebarState();
const darkmode = DarkMode();
</script>

<template>
    <div class="sidebar" :style="{ width: sidebar_state.sidebarWidth }">
        <div class="brand">
            <h1>
                <span v-if="sidebar_state.collapsed">
                    <img src="@/assets/img/logo.png" alt="brand" class="logo">
                </span>
                <span v-else>
                    <img src="@/assets/img/logo-d.svg" alt="brand">
                </span>
            </h1>
        </div>

        <NavBarLink to="/" src="https://icongr.am/fontawesome/home.svg?color=ffffff">Home</NavBarLink>
        <NavBarLink to="/projects" src="https://icongr.am/fontawesome/picture-o.svg?color=ffffff">Projects
        </NavBarLink>
        <NavBarLink to="/illustrations" src="https://icongr.am/material/palette.svg?color=ffffff">Illustrations
        </NavBarLink>
        <NavBarLink to="/about" src="https://icongr.am/material/account.svg?color=ffffff">About</NavBarLink>
        <NavBarLink to="/contact" src="https://icongr.am/material/cellphone-iphone.svg?color=ffffff">Contact
        </NavBarLink>

        <div class="buttons-panel">
            <span class="darkmode-switch buttons-panel-button" @click="darkmode.toggle">
                <img src="@/assets/img/theme-switch-dark.svg">
            </span>
            <span class="collapse-icon buttons-panel-button" :class="{ 'rotate-180': sidebar_state.collapsed }"
                @click="sidebar_state.toggle">
                <img src="@/assets/img/chevron-double-left-dark.svg" alt="collapse-sidebar" />
            </span>
        </div>   </div>
</template>

<style scoped>
.sidebar {
    color: var(--sidebar-color);
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 8em;
}

.sidebar h1 {
    height: 2.5em;
}

.logo {
    width: 75px;
}

.brand {
    position: relative;
    top: -3em
}

.buttons-panel {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    bottom: 0.5em;
    left: 1.3em;
}

.buttons-panel-button {
    max-width: 85%;
    height: auto;

    display: flex;
    padding: 0.5em;

    color: rgba(255, 255, 255, 0.7);
}

.collapse-icon {

    transition: 0.2s linear;
}

.collapse-icon:hover {
    background-color: var(--sidebar-item-hover);
    border-radius: 5px;
}

.darkmode-switch {}

.darkmode-switch:hover {
    background-color: var(--sidebar-item-hover);
    border-radius: 5px;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>
