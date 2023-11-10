<script setup lang="ts">
import SideBar from "@/components/SideBarNavigation.vue";
import Homepage1 from "@/components/Homepage1.vue";
import StudentLogin from "@/components/StudentLogin.vue";
import AdminLogin from "@/components/AdminLogin.vue";
import Homepage2 from "@/components/Homepage2.vue";

import {useCounterStore} from "@/stores/user";
const storeLogin = useCounterStore()

import {useLoadHomeStore} from "@/stores/loadHomepage";
const loadHome = useLoadHomeStore()

import {usestudentStore} from "@/stores/studentlogin";
const studentLogin = usestudentStore()

</script>


<template>
  <div class="sm:max-w-screen-2xl flex mx-auto bg-grey-1 h-[1000px]">

    <SideBar/>
    <Homepage2 v-if="loadHome.Home2"/>
    <Homepage1 v-else/>

    <div v-show="storeLogin.loggedin" class=" fixed w-full h-full bg-GreyOverlay z-50 flex justify-center items-center">
      <AdminLogin/>
    </div>
    <div v-show="studentLogin.studentlogin" class="fixed w-full h-full bg-GreyOverlay z-50 flex justify-center items-center">
      <StudentLogin/>
    </div>

  </div>


</template>
