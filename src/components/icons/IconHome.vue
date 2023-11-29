<template>
  <div class="flex justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
    <g clip-path="url(#clip0_164_2084)">
      <path d="M9.54041 7.10333V1.10333H17.5404V7.10333H9.54041ZM-0.459595 11.1033V1.10333H7.54041V11.1033H-0.459595ZM9.54041 19.1033V9.10333H17.5404V19.1033H9.54041ZM-0.459595 19.1033V13.1033H7.54041V19.1033H-0.459595ZM1.54041 9.10333H5.54041V3.10333H1.54041V9.10333ZM11.5404 17.1033H15.5404V11.1033H11.5404V17.1033ZM11.5404 5.10333H15.5404V3.10333H11.5404V5.10333ZM1.54041 17.1033H5.54041V15.1033H1.54041V17.1033Z" fill="#EBCE39"/>
    </g>
    <defs>
      <clipPath id="clip0_164_2084">
        <rect width="18" height="19.8967" fill="white" transform="translate(0 0.274536)"/>
      </clipPath>
    </defs>
  </svg>
    <span class="ml-4" v-if="openBar.isSidebarOpen">Home</span>
  </div>

</template>
<script setup lang="ts">
import {useSidebarOpen} from "@/stores/sidebarOpen";
const openBar = useSidebarOpen()
</script>