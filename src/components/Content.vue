<script setup>
defineProps({
    adaptiveContentWidth: Boolean
})
</script>

<template>
    <div id="content" :class="{ contentwidth: adaptiveContentWidth }">
        <slot></slot>
    </div>
</template>

<style scoped>
#content {
    text-align: justify;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1em;
}

.contentwidth {
    /* max-width: 80% */
}
</style>