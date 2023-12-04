<template>
  <div class="flex justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
      <path
        d="M15.3795 16.8926L18.9982 12.8926M18.9982 12.8926L15.3795 8.89258M18.9982 12.8926L6.33275 12.8926M11.7608 16.8926V17.8926C11.7608 19.5494 10.5457 20.8926 9.04677 20.8926H5.42807C3.92916 20.8926 2.71405 19.5494 2.71405 17.8926V7.89258C2.71405 6.23572 3.92916 4.89258 5.42807 4.89258H9.04677C10.5457 4.89258 11.7608 6.23572 11.7608 7.89258V8.89258"
        stroke="#FF5C5C"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="ml-4" v-if="openBar.isSidebarOpen">Logout</span>
  </div>
</template>
<script setup lang="ts">
import { useSidebarOpen } from '@/stores/sidebarOpen'

const openBar = useSidebarOpen()
</script>