<script setup lang="ts">

import LineIcon from "@/components/icons/IconLine.vue";
import SettingsLogo from "@/components/icons/IconSettings.vue";
</script>

<template>
  <nav
      class=" mx-auto bg-white rounded-r-3xl flex flex-col justify-between items-center">
    <div class="mx-auto mt-11">
      <div>
        <img class="w-16 h-16" src="src/assets/Logo.png" alt="school logo">
      </div>
      <div class="mx-auto mt-7">
        <LineIcon />
      </div>
    </div>
    <div>
      <div class="mb-9 ">
        <SettingsLogo class="mx-auto"/>
      </div>


    </div>
  </nav>
</template>

<style scoped>

</style>