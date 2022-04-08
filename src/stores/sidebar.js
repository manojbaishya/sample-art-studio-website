import { defineStore } from 'pinia'

export const SidebarState = defineStore({
    id: 'sidebar',
    state: () => ({
        enabled: true
    }),
    getters: {
    },
    actions: {
        toggle() {
            this.enabled = !this.enabled
        }
    }
})
