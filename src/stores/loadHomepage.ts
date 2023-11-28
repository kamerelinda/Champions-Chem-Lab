import { defineStore } from 'pinia'

export const useLoadHomeStore = defineStore('home', {
    state: () => ({
        Home2: false
    }),
    actions: {
        AddHomePage() {
            this.Home2 = true
        }
    }
})