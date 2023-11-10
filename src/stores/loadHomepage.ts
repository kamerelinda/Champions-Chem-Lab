import { defineStore } from 'pinia'

export const useLoadHomeStore = defineStore('home', {
    state: () => ({
        Home2: true
    }),
    actions: {
        AddHomePage() {
            this.Home2 = false
        }
    }
})