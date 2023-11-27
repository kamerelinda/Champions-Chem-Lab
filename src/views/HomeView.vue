<script setup lang="ts">
import SideBar from "@/components/SideBarNavigation.vue";
import Homepage1 from "@/components/Homepage1.vue";
import Homepage2 from "@/components/Homepage2.vue";
import {useLoadHomeStore} from "@/stores/loadHomepage";
const loadHome = useLoadHomeStore()
</script>


<template>
  <div class="sm:max-w-screen-2xl flex mx-auto bg-grey-1 h-[1000px]">

    <SideBar/>
    <Homepage2 v-if="loadHome.Home2"/>
    <Homepage1 v-else/>
  </div>


</template>
