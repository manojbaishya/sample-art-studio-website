<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import ContentPanel from "@/components/ContentPanel.vue";

defineProps({
    title: String,
    header: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <div id="subpage-container">
        <HeaderBar :title="title" v-show="header" />
        <ContentPanel>
            <slot></slot>
        </ContentPanel>
    </div>
</template>
