<script setup>
import IconHome from '@/components/icons/IconHome.vue'
import IconVirtualGames from '@/components/icons/IconVirtualGames.vue'
import IconPuzzleGames from '@/components/icons/IconPuzzleGames.vue'
import IconTrainingVideo from '@/components/icons/IconTrainingVideo.vue'
import IconCommunities from '@/components/icons/IconCommunities.vue'
import IconHomework from '@/components/icons/IconHomework.vue'

import { useSidebarOpen } from '@/stores/sidebarOpen'

const openBar = useSidebarOpen()

import { RouterLink } from 'vue-router'
</script>

<template>
  <div :class="openBar.isSidebarOpen ? 'flex flex-col absolute justify-center items-start' : ''">
    <RouterLink to="/homepage">
      <icon-home class="mx-auto mt-10 mb-16" />
    </RouterLink>
    <RouterLink to="/3d_games">
      <icon-virtual-games class="mx-auto mb-16" />
    </RouterLink>
    <RouterLink to="/puzzle_games">
      <icon-puzzle-games class="mx-auto mb-16" />
    </RouterLink>
    <RouterLink to="/video_lessons">
      <icon-training-video class="mx-auto mb-16" />
    </RouterLink>
    <RouterLink to="/community">
      <icon-communities class="mx-auto mb-16" />
    </RouterLink>
    <RouterLink to="/assignments">
      <icon-homework class="mx-auto mb-16" />
    </RouterLink>
  </div>
</template>