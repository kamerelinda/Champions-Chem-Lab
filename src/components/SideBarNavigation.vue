<script setup lang="ts">
  import SchoolLogo from "./icons/IconSchoolLogo.vue"
  import SettingsLogo from "./icons/IconSettings.vue"
  import LineIcon from "./icons/IconLine.vue"
  import RegisteredNav from "@/components/RegisteredNav.vue";
  import IconLogout from "@/components/icons/IconLogout.vue";
  import IconChampionsLab from "@/components/icons/IconChampionsLab.vue";

  import {useLoadHomeStore} from "@/stores/loadHomepage";
  const loadHome = useLoadHomeStore()

  import  {RouterLink} from "vue-router";

</script>

<template>
    <nav class="w-24 bg-white rounded-r-3xl flex flex-col justify-between">
      <div class="mx-auto mt-11">
        <div>
          <RouterLink to="/">
            <IconChampionsLab  v-if="loadHome.Home2" class="mx-auto"/>
          <SchoolLogo v-else class="mx-auto"/>
          </RouterLink>
        </div>
        <div class="mx-auto mt-7">
          <LineIcon/>
        </div>
        <div>
          <RegisteredNav v-show="loadHome.Home2"/>
        </div>
      </div>
<div>
  <div v-if="loadHome.Home2">
    <SettingsLogo class="mx-auto"/>
    <icon-logout class=" mx-auto mb-9 mt-11"/>
  </div>
    <div v-else class="mb-9 ">
      <SettingsLogo class="mx-auto"/>
    </div>


</div>
    </nav>
</template>