<script setup  lang="ts">
  import SearchBar from "@/components/SearchBar.vue";
  import ToSignUp from "@/components/ToSignUp.vue";
  import IconProfile from "@/components/icons/IconProfile.vue";

  import {ref} from "vue";

  const loggedin = ref(false)

</script>

<template>
  <div class="w-full h-24  flex justify-between">
    <div class="mx-auto my-auto">
      <SearchBar/>
    </div>
    <div class="my-auto">
      <div v-if="loggedin">
      <icon-profile class="mr-10"/>
      </div>
    <div v-else>
      <ToSignUp/>
    </div>

    </div>
  </div>
</template>