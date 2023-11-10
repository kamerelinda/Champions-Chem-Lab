<script setup  lang="ts">
  import SearchBar from "@/components/SearchBar.vue";
  import ToSignUp from "@/components/ToSignUp.vue";
  import IconProfile from "@/components/icons/IconProfile.vue";

  import {useLoadHomeStore} from "@/stores/loadHomepage";
  const loadHome = useLoadHomeStore()

</script>

<template>
  <div class="w-full h-24  flex justify-between">
    <div class="mx-auto my-auto">
      <SearchBar/>
    </div>
    <div class="my-auto">
      <div v-if="loadHome.Home2">
      <icon-profile class="mr-10"/>
      </div>
    <div v-else>
      <ToSignUp/>
    </div>

    </div>
  </div>
</template>