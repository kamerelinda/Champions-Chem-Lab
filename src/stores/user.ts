import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', {
  state: () => ({
    loggedin: false
  }),
  actions: {
    loggingInUser() {
      this.loggedin = true
    },
  }
})

