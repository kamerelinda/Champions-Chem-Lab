<script setup lang="ts">

import LineIcon from "@/components/icons/IconLine.vue";
import SettingsLogo from "@/components/icons/IconSettings.vue";
import SchoolLogo from "@/components/icons/IconSchoolLogo.vue";
</script>

<template>
  <nav
      class=" mx-auto bg-white rounded-r-3xl flex flex-col justify-between items-center">
    <div class="mx-auto mt-11">
      <div>
        <SchoolLogo  class="mx-auto"/>
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