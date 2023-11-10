<script setup lang="ts">
import IconBack from "@/components/icons/IconBack.vue";
import IconFront from "@/components/icons/IconFront.vue";

import {useLoadHomeStore} from "@/stores/loadHomepage";
const loadHome = useLoadHomeStore()
</script>
<template>
  <div>
    <p v-if="loadHome.Home2" class="ml-36 mt-6 font-manrope text-[32px] font-semibold">Hi Janet, here’s where you left off</p>
    <p v-else class=" ml-36 mt-10 font-manrope text-base font-bold">Get started with some experiments</p>
  </div>

  <div class="flex justify-center relative w-3/4 h-64 mx-auto cursor-pointer">

    <img class="absolute z-30 inset-y-0 top-10" src="@/assets/image%201.png" alt="">

    <div class="bg-video1 shadow-box1 h-56 w-64 z-20 inset-y-0 absolute top-14 left-36"></div>
    <div class="bg-video1 shadow-box1 h-56 w-64  z-20 inset-y-0 absolute top-14 right-36"></div>
    <div class="bg-video2 h-52 w-52 z-10 inset-y-0 absolute top-16 left-12"></div>
    <div class="bg-video2 h-52 w-52 z-10 inset-y-0 absolute top-16 right-12 "></div>
    <div v-show="loadHome.Home2">
    <button class=" absolute left-0 top-1/2"> <IconBack/> </button>
    <button class=" absolute right-0 top-1/2"> <IconFront/> </button>
    </div>
  </div>
</template>
