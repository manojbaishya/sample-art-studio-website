<script setup>
import { computed, ref, reactive, onMounted, watch, onUnmounted } from 'vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import { DarkMode } from "@/stores/darkmode";
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { Sidebar } from '@/stores/sidebar.js'

const sidebarState = Sidebar();

// TODO: Need to fix Dark Mode
const darkmode = DarkMode();

let windowWidth = ref(window.innerWidth);

const onWidthChange = () => windowWidth.value = window.innerWidth;

onMounted(
    () => {
        window.addEventListener('resize', onWidthChange);
        (windowWidth.value >= 768) ? sidebarState.setAsShown() : sidebarState.setAsHidden();
    }
)

onUnmounted(() => window.removeEventListener('resize', onWidthChange))

watch(windowWidth,
    (uwindowWidth) => {
        if (uwindowWidth >= 768) {
            sidebarState.setAsShown();
        } else {
            sidebarState.setAsHidden();
        }
    }
)

let sidebar = {
    menu: [
        {
            header: '',
            hidden: true
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
            href: '/team',
            title: 'Team',
            icon: 'fas fa-info'
        },
        {
            href: '/contact',
            title: 'Contact',
            icon: 'fas fa-envelope'
        },
        {
            href: '/test',
            title: 'Scratchpad',
            icon: 'fas fa-vials'
        }
    ], props: {
        collapsed: false,
        width: "180px",
        hide_toggle: true,
        theme: "white-theme",
    }

}

function toggleSidebar() {
    let sb = document.getElementsByClassName("v-sidebar-menu");
    let toggleButton = document.getElementById("sidebar-toggle");
    if (sidebarState.width === "0px") {
        if (sidebarState.viewport === "hidden") {
            sb[0].style.transform = "translateX(0%)";
            toggleButton.style.transform = "translateX(180px)"
            sidebarState.viewport = "shown";
        } else {
            sb[0].style.transform = "";
            toggleButton.style.transform = ""
            sidebarState.viewport = "hidden";
        }
    }
}

function handleFocus() {
    // do something here
}

function handleFocusOut() {
    let sb = document.getElementsByClassName("v-sidebar-menu");
    let toggleButton = document.getElementById("sidebar-toggle");
    sb[0].style.transform = "";
    toggleButton.style.transform = ""
    sidebarState.viewport = "hidden";
}

</script>

<template>
    <div id="sidebar-container">
        <SidebarMenu :menu="sidebar.menu" :width="sidebar.props.width" :collapsed="sidebar.props.collapsed"
            :hideToggle="sidebar.props.hide_toggle" :theme="sidebar.props.theme" @focus="handleFocus"
            @focusout="handleFocusOut" tabindex="0">
            <template #header>
                <a href="/"><img src="@/assets/img/logo/logo-2.png" class="d-block org-logo"></a>
            </template>
        </SidebarMenu>
        <span class="darkmode-switch buttons-panel-button" @click="darkmode.toggle">
            <img src="@/assets/icons/general/theme-switch-light.svg">
        </span>
        <button v-show="sidebarState.width === '0px' ? true : false" id="sidebar-toggle"
            class="button clear icon-only pull-left" type="button" @click="toggleSidebar">
            <i class="fas fa-bars"></i>
        </button>
    </div>
</template>

<style lang="scss">
.darkmode-switch {
    position: absolute;
    right: 0%;
}

.darkmode-switch:hover {
    background-color: #f1eee8;
}

.v-sidebar-menu.vsm_white-theme {
    background-color: var(--bg-color);
}

.v-sidebar-menu.vsm_white-theme .vsm--link {
    color: var(--font-color);
}

.v-sidebar-menu {
    padding-top: 2em;
    transition: 0.3s transform;
    z-index: 0;

}

.vsm--menu {
    padding-top: 2em !important;
}

#sidebar-toggle {
    transition: 0.3s all;
}

@media only screen and (max-width: 768px) {
    .v-sidebar-menu {
        transform: translateX(-100%);
    }
}
</style>