import { defineStore } from 'pinia'

let defaults = {
    shown: {
        width: "180px",
        value: "shown"
    },
    hidden: {
        width: "0px",
        value: "hidden"
    }
}

export const Sidebar = defineStore("sidebar", {
    state: () => ({
        viewport: "",
        width: ""
    }),
    getters: {
    },
    actions: {
        setAsShown() {
            this.viewport = defaults.shown.value;
            this.width = defaults.shown.width;
        },
        setAsHidden() {
            this.viewport = defaults.hidden.value;
            this.width = defaults.hidden.width;
        }
    }
})
