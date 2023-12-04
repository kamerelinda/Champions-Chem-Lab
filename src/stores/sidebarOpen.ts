import { defineStore } from 'pinia'

export const useSidebarOpen = defineStore('sidebar', {
  state: () => ({
    isSidebarOpen: false
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    }
  }
})
