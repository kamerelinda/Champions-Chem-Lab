import { defineStore } from 'pinia'

export const useSignUpStore = defineStore('admin signup', {
    state: () => ({
        signedin: false
    }),
    actions: {
        signingInUser() {
            this.signedin = true
        },
    }
})