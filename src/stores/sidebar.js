import { defineStore } from 'pinia'

export const SidebarState = defineStore({
    id: 'sidebar',
    state: () => ({
        collapsed: false
    }),
    getters: {
        sidebarWidth(state) {
            const SIDEBAR_WIDTH = 180
            const SIDEBAR_WIDTH_COLLAPSED = 38

            return `${state.collapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
        }
    },
    actions: {
        toggle() {
            this.collapsed = !this.collapsed
        }
    }
})
