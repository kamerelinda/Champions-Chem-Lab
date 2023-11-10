<script setup>
import IconHome from "@/components/icons/IconHome.vue";
import IconVirtualGames from "@/components/icons/IconVirtualGames.vue";
import IconPuzzleGames from "@/components/icons/IconPuzzleGames.vue";
import IconTrainingVideo from "@/components/icons/IconTrainingVideo.vue";
import IconCommunities from "@/components/icons/IconCommunities.vue";
import IconHomework from "@/components/icons/IconHomework.vue";

import  {RouterLink} from "vue-router";
</script>

<template>
  <div>
    <RouterLink to="/"><icon-home class="mx-auto mt-10 mb-16"/></RouterLink>
     <RouterLink to="/3dgames"> <icon-virtual-games class="mx-auto mb-16"/></RouterLink>
    <RouterLink to="/puzzlegames"><icon-puzzle-games class="mx-auto mb-16"/></RouterLink>
    <RouterLink to="/videolessons"><icon-training-video class="mx-auto mb-16"/></RouterLink>
    <RouterLink to="/community"><icon-communities class="mx-auto mb-16"/></RouterLink>
    <RouterLink to="/assignments"><icon-homework class="mx-auto mb-16"/></RouterLink>
  </div>
</template>