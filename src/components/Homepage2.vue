<script setup lang="ts">
import TopNavbar from "@/components/TopNavbar.vue";
import TrainingVideos from "@/components/TrainingVideos.vue";
import JustForYou from "@/components/JustForYou.vue";
import TrendingVideos from "@/components/TrendingVideos.vue";
import SideBarNavigation from "@/components/SideBarNavigation.vue";
</script>

<template>
  <div class="w-full h-full relative">
    <SideBarNavigation class="absolute z-50 w-24 shadow-2xl h-full"/>
    <TopNavbar/>
    <TrainingVideos/>
    <div class="p-[20px] bg-white w-[1095px] rounded-[5px] ml-[207px] absolute bottom-[5px]">
      <TrendingVideos/>
      <JustForYou/>
    </div>

  </div>
</template>