<script setup lang="ts">
import TopNavbar from '@/components/HomePage/Home Unregistered/TopNavbar.vue'
import TrainingVideos from '@/components/HomePage/Home Unregistered/TrainingVideos.vue'
import CommentSection from '@/components/HomePage/Home Unregistered/CommentSection.vue'
import SideBar1 from '@/components/Sidebar/Unlogged Sidebar/SidebarUnregistered.vue'
</script>

<template>
  <div class="w-full h-fit relative">
    <SideBar1 class="absolute left-0 w-24 shadow-2xl h-full" />
    <TopNavbar />
    <TrainingVideos />
    <CommentSection />
  </div>
</template>