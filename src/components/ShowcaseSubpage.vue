<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import ContentPanel from "@/components/ContentPanel.vue";

defineProps({
    title: String
});
</script>

<template>
    <div>
        <HeaderBar :title="title" />
        <ContentPanel>
            <slot></slot>
        </ContentPanel>
    </div>
</template>
