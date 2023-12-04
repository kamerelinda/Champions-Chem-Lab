<script setup lang="ts">
import TrainingVideos from '@/components/HomePage/Home Unregistered/TrainingVideos.vue'
import JustForYou from '@/components/HomePage/Home Registered/JustForYou.vue'
import TrendingVideos from '@/components/HomePage/Home Registered/TrendingVideos.vue'
import SideBarNavigation from '@/components/Sidebar/LoggedinSidebar/SideBarNavigation.vue'
import TopNavProfile from '@/components/HomePage/Home Registered/TopNavProfile.vue'
</script>

<template>
  <div class="w-full h-full relative">
    <SideBarNavigation class="absolute z-50 w-24 shadow-2xl h-full" />
    <TopNavProfile />
    <TrainingVideos />
    <div class="p-[20px] bg-white w-[1095px] rounded-[5px] ml-[207px] absolute bottom-[5px]">
      <TrendingVideos />
      <JustForYou />
    </div>
  </div>
</template>