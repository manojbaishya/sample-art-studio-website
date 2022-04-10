<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import ContentPanel from "@/components/ContentPanel.vue";

defineProps({
    title: String,
    content: String,
});
</script>

<template>
    <div>
        <HeaderBar :title="title" />
        <ContentPanel :text="content" />
    </div>
</template>
