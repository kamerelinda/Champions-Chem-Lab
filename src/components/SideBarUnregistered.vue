<script setup lang="ts">
  import SchoolLogo from "./icons/IconSchoolLogo.vue"
  import SettingsLogo from "./icons/IconSettings.vue"
  import LineIcon from "./icons/IconLine.vue"
</script>

<template>
    <nav class="w-24 h-screen bg-white rounded-r-3xl flex flex-col justify-between">
      <div class="mx-auto mt-11">
        <div class="ml-3.5">
          <SchoolLogo/>
        </div>
        <div class="mx-auto mt-7">
          <LineIcon/>
        </div>
      </div>
      <div class="mx-auto mb-9">
        <SettingsLogo/>
      </div>

    </nav>
</template>