<script setup  lang="ts">
  import SearchBar from "@/components/HomePage/Home Unregistered/SearchBar.vue";
  import ToSignUp from "@/components/HomePage/Home Unregistered/ToSignUp.vue";
</script>

<template>
  <div class="w-full h-24  flex justify-between">
    <div class="mx-auto my-auto">
      <SearchBar/>
    </div>
    <div class="my-auto">
    <div>
      <ToSignUp/>
    </div>
    </div>
  </div>
</template>