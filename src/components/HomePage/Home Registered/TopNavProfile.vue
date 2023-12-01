<script setup lang="ts">
  import IconProfile from "@/components/icons/IconProfile.vue";
  import SearchBar from "@/components/HomePage/Home Unregistered/SearchBar.vue";
</script>

<template>

  <div class="w-full h-24  flex justify-between">
    <div class="mx-auto my-auto">
      <SearchBar/>
    </div>
  <div  class="my-auto">
    <icon-profile class="mr-10"/>
  </div>
  </div>
</template>

<style scoped>

</style>