<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { SidebarState } from "@/stores/sidebar";

const sidebar_state = SidebarState();

const props = defineProps({
    to: { type: String, required: true },
    src: { type: String, required: true },
});

const route = useRoute();
const isActive = computed(() => route.path === props.to);
</script>

<template>
    <RouterLink :to="to" class="link" :class="{ active: isActive }">
        <img :src="src" alt="" class="icon" />
        <transition name="fade">
            <span v-if="!sidebar_state.collapsed">
                <slot />
            </span>
        </transition>
        </RouterLink>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.link {
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    margin: 0.1em 0;
    padding: 1.5em;
    border-radius: 0.25em;
    height: 1.5em;

    color: var(--sidebar-color);
    text-decoration: none;
}

.link:hover {
    background-color: var(--sidebar-item-hover);
}

.link.active {
    background-color: var(--sidebar-item-active);
}

.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>
