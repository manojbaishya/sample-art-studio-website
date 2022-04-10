<script setup>

import NavBarLink from "./NavBarLink.vue";
import { SidebarState } from "@/stores/sidebar"

const sidebar_state = SidebarState()
</script>

<template>
    <div class="sidebar" :style="{ width: sidebar_state.sidebarWidth }">
        <h1>
            <span v-if="sidebar_state.collapsed">
                <div>V</div>
                <div>S</div>
            </span>
            <span v-else>Vue Sidebar</span>
        </h1>

        <NavBarLink to="/" src="https://icongr.am/fontawesome/home.svg?size=64&color=ffffff">Home</NavBarLink>
        <NavBarLink to="/projects" src="https://icongr.am/fontawesome/picture-o.svg?size=64&color=ffffff">Projects
        </NavBarLink>
        <NavBarLink to="/illustrations" src="https://icongr.am/material/palette.svg?size=60&color=ffffff">Illustrations
        </NavBarLink>
        <NavBarLink to="/about" src="https://icongr.am/material/account.svg?size=60&color=ffffff">About</NavBarLink>
        <NavBarLink to="/contact" src="https://icongr.am/material/cellphone-iphone.svg?size=60&color=ffffff">Contact
        </NavBarLink>

        <span class="collapse-icon" :class="{ 'rotate-180': sidebar_state.collapsed }" @click="sidebar_state.toggle">
            <img src="https://icongr.am/material/chevron-double-left.svg?size=30&color=ffffff" alt="collapse-sidebar" />
        </span>   </div>
</template>

<style scoped>
.sidebar {
    color: white;
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
}

.sidebar h1 {
    height: 2.5em;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>
