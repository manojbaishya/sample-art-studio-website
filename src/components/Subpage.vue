<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import HeaderBar from "@/components/HeaderBar.vue";
import ContentPanel from "@/components/ContentPanel.vue";

import { Sidebar } from '@/stores/sidebar.js'

defineProps({
    title: String,
    header: {
        type: Boolean,
        default: true
    },
    isGeneralPage: {
        type: Boolean,
        default: true
    }
});

const sidebar = Sidebar();

</script>

<template>
    <div id="subpage-container">
        <HeaderBar :title="title" v-show="header" />
        <ContentPanel :adaptive-content-width=isGeneralPage>
            <slot></slot>
        </ContentPanel>
    </div>
</template>

<style>
#subpage-container {
    margin-left: v-bind("sidebar.width");
}
</style>