<template>
  <div class="flex justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
      <path
        d="M4 5L6 9H9L7 5H9L11 9H14L12 5H14L16 9H19L17 5H20C20.55 5 21.0208 5.19583 21.4125 5.5875C21.8042 5.97917 22 6.45 22 7V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V7C2 6.45 2.19583 5.97917 2.5875 5.5875C2.97917 5.19583 3.45 5 4 5ZM4 11V19H20V11H4Z"
        fill="#EBCE39"
      />
    </svg>
    <span class="ml-4" v-if="openBar.isSidebarOpen">Training Videos</span>
  </div>
</template>
<script setup lang="ts">
import { useSidebarOpen } from '@/stores/sidebarOpen'

const openBar = useSidebarOpen()
</script>