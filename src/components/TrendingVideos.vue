<script setup lang="ts">
const vidCategories = [
    {
  id: 1,
  Title: 'Chemicals'
},
  {
    id: 2,
    Title: 'Reactions'
  },
  {
    id: 3,
    Title: 'Symbols'
  },
  {
    id: 4,
    Title: 'Beginner'
  },

]
</script>

<template>
<div>
  <p class=" font-bold text-[24px] text-black font-manrope mb-2">Trending Videos</p>

  <form>
    <label for="default-search" class="mb-2 text-base font-normal text-Neutral/500 sr-only ">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <svg class="w-4 h-4 text-Neutral/500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input type="search" id="default-search" class=" font-manrope block md: w-[425px] lg:w-96 p-2 pl-10 text-base text-Neutral/500 border border-Neutral/100 rounded-[4px] bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search for a video..." required>
    </div>
  </form>
<div class="flex gap-4 mt-2">
  <div v-for="vid in vidCategories" :key="vid.id">
    <img  class="mb-[12px]" src="@/assets/pink.png" alt="">
    <p class="text-darkest font-bold text-sm"> {{vid.Title}} </p>
  </div>
</div>
</div>
</template>

