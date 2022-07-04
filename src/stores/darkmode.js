import { defineStore } from 'pinia'

export const DarkMode = defineStore("darkmode", {
    state: () => ({
        enabled: false
    }),
    getters: {
    },
    actions: {
        toggle() {
            if (this.enabled) {
                document.body.classList.remove("dark")
            } else {
                document.body.classList.add("dark")
            }
            this.enabled = !this.enabled
        }
    }
})
