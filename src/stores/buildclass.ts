import { defineStore } from 'pinia'

export const usebuildStore = defineStore('build class', {
    state: () => ({
        build: false
    }),
    actions: {
        buildingClass() {
            this.build = true
        },
    }
})