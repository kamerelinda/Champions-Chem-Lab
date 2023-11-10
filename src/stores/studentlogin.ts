import { defineStore } from 'pinia'

export const usestudentStore = defineStore('student', {
    state: () => ({
        studentlogin: false
    }),
    actions: {
        loggingInStudent() {
            this.studentlogin = true
        },
    }
})

