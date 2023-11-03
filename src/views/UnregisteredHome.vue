<script setup lang="ts">
import SideBarUnregistered from "@/components/SideBarUnregistered.vue";
import Homepage1 from "@/components/Homepage1.vue";
import AdminLogin from "@/components/AdminLogin.vue";
import StudentLogin from "@/components/StudentLogin.vue";


import {ref} from 'vue';
const showAdminLogin= ref(false)
const showStudentLogin= ref(false)
</script>


<template>
  <div v-show="showAdminLogin" class="absolute w-full h-full bg-GreyOverlay z-10 flex justify-center items-center">
    <AdminLogin/>
  </div>
  <div v-show="showStudentLogin" class="absolute w-full h-full bg-GreyOverlay z-10 flex justify-center items-center">
    <StudentLogin/>
  </div>
  <div class="max-w-screen-2xl flex mx-auto bg-grey-1">
    <SideBarUnregistered/>
    <Homepage1/>
  </div>

</template>
