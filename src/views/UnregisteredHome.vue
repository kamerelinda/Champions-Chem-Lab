<script setup lang="ts">
import SideBarUnregistered from "@/components/SideBarUnregistered.vue";
import Homepage1 from "@/components/Homepage1.vue";

import {ref} from 'vue';

const showModal = ref(true)
</script>


<template>
  <div v-show="showModal" class="absolute w-full h-full bg-GreyOverlay z-10 flex justify-center items-center">
    <div class="modal">
      <textarea name="note" id="note" cols="30" rows="10"></textarea>
      <button >Add Note</button>
      <button @click="showModal = false" class="close">Close</button>
    </div>
  </div>
  <div class="max-w-screen-2xl flex mx-auto bg-grey-1">
    <SideBarUnregistered/>
    <Homepage1/>
  </div>
</template>
