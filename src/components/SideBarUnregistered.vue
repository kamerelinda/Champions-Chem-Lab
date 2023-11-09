<script setup lang="ts">
  import SchoolLogo from "./icons/IconSchoolLogo.vue"
  import SettingsLogo from "./icons/IconSettings.vue"
  import LineIcon from "./icons/IconLine.vue"
  import RegisteredNav from "@/components/RegisteredNav.vue";
  import IconLogout from "@/components/icons/IconLogout.vue";
  import IconChampionsLab from "@/components/icons/IconChampionsLab.vue";

  import {ref} from "vue";

  const loggedin = ref(false)
</script>

<template>
    <nav class="w-24 bg-white rounded-r-3xl flex flex-col justify-between">
      <div class="mx-auto mt-11">
        <div>
          <IconChampionsLab  v-if="loggedin" class="mx-auto"/>
          <SchoolLogo v-else class="mx-auto"/>
        </div>
        <div class="mx-auto mt-7">
          <LineIcon/>
        </div>
        <div>
          <RegisteredNav v-show="loggedin"/>
        </div>
      </div>
<div>
  <div v-if=loggedin>
    <SettingsLogo class="mx-auto"/>
    <icon-logout class=" mx-auto mb-9 mt-11"/>
  </div>
    <div v-else class="mb-9 ">
      <SettingsLogo class="mx-auto"/>
    </div>


</div>
    </nav>
</template>