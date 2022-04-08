<script setup>
import { RouterLink } from 'vue-router';
import BrandingIcon from '../assets/icons/BrandingIcon.vue';

import HomeIcon from '../assets/icons/menu/HomeIcon.vue';
import ProjectsIcon from '../assets/icons/menu/ProjectsIcon.vue';
import IllustrationsIcon from '../assets/icons/menu/IllustrationsIcon.vue';
import ContactIcon from '../assets/icons/menu/ContactIcon.vue';
import AboutIcon from '../assets/icons/menu/AboutIcon.vue';

import { onClickOutside } from '@vueuse/core'

import { SidebarState } from '@/stores/sidebar'
const sidebar_global_state = SidebarState()
</script>

<template></template>

<script>
export default {
    data: function () {
        return {
        };
    },
    methods: {
    }
};
</script>

<style>
</style>