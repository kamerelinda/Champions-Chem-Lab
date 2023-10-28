<script setup  lang="ts">
  import SearchBar from "@/components/SearchBar.vue";
  import ToSignUp from "@/components/ToSignUp.vue";
</script>

<template>
  <div class="w-full h-24  flex justify-between">
    <div class="mx-auto my-auto">
      <SearchBar/>
    </div>
    <div class="my-auto">
      <ToSignUp/>
    </div>
  </div>
</template>