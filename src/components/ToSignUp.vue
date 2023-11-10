<script setup lang="ts">

import {useCounterStore} from "@/stores/user";
const storeLogin = useCounterStore()

</script>
<template>

  <div class="flex gap-6 font-manrope">
    <div class="sm:hidden md:block my-auto text-Primary text-center text-sm font-semibold non-italic underline ">
      <a href="#">Send Invite</a>
    </div>
    <div @click="storeLogin.loggingInUser()" class="mr-11">
      <a href="#" class="block w-full rounded bg-Primary px-3 py-1.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Neutral/500">Try Chem Lab free For 1 week</a>
    </div>
  </div>
</template>
