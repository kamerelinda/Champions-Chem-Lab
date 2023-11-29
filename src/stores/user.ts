import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    loggedin: false
  }),
  actions: {
    loggingInUser() {
      this.loggedin = !this.loggedin
    },
  }
})

