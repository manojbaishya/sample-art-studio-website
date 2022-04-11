<script setup>
defineProps({
    text: String,
});
</script>

<template>
    <div id="content">{{ text }}</div>
</template>

<style scoped>
#content {
    text-align: center;
}
</style>