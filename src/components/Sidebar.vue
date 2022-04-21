<script setup>
import { computed, ref, reactive, onMounted } from 'vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '@fortawesome/fontawesome-free/css/all.css'

let menu = [
    {
        header: 'Inkscape Studios',
        hiddenOnCollapse: true
    },
    {
        href: '/',
        title: 'Home',
        icon: 'fa fa-house-user'
    },
    {
        href: '/projects',
        title: 'Projects',
        icon: 'fas fa-suitcase'
    },
    {
        href: '/illustrations',
        title: 'Illustrations',
        icon: 'fas fa-palette'
    },
    {
        href: '/about',
        title: 'About',
        icon: 'fas fa-info'
    },
    {
        href: '/contact',
        title: 'Contact',
        icon: 'fas fa-envelope'
    }
]


const tabletViewQuery = window.matchMedia('(max-device-width: 900px)');
let tabletView = tabletViewQuery.matches;

onMounted(() => {
    tabletViewQuery.addEventListener("change", () => tabletView = tabletViewQuery.matches);
})

let sidebar_props = {
    responsive_collapsed: tabletView,
    width: "180px",
    // theme: "white-theme",
}

</script>

<template>
    <div id="sidebar-container">
        <SidebarMenu :menu="menu" :width="sidebar_props.width" :collapsed="sidebar_props.responsive_collapsed"
            :hideToggle="!sidebar_props.responsive_collapsed" :theme="sidebar_props.theme" />
    </div>
</template>

<style scoped>
@media only screen and (max-device-width: 600px) {
    .v-sidebar-menu {
        transition: 0.3s all;
    }

    .v-sidebar-menu.vsm_collapsed {
        transform: translateX(-100%);
    }
}
</style>