<template>
    <form>
      <label for="default-search" class="mb-2 text-base font-normal text-Neutral/500 sr-only ">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          <svg class="w-4 h-4 text-Neutral/500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" id="default-search" class=" block md: w-72 lg:w-96 p-2 pl-10 text-base text-Neutral/500 border border-Neutral/100 rounded bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search for a lesson or test ..." required>
      </div>
    </form>
</template>
<script setup lang="ts">
</script>