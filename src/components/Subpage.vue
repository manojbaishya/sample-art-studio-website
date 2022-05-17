<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";

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
        <Header :title="title" v-show="header" />
        <Content :adaptive-content-width=isGeneralPage>
            <slot></slot>
        </Content>
    </div>
</template>

<style>
#subpage-container {
    margin-left: v-bind("sidebar.width");
}
</style>