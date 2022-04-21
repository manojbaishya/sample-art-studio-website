<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import ContentPanel from "@/components/ContentPanel.vue";

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
</script>

<template>
    <div>
        <HeaderBar :title="title" v-show="header" />
        <ContentPanel>
            <slot></slot>
        </ContentPanel>
    </div>
</template>

<style>
.subpagecontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>