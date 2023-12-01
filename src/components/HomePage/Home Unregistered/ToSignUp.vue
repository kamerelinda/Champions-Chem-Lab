<script setup lang="ts">
  import {useRouter} from "vue-router";
  const router = useRouter();

  const goToLogin = () =>{
    router.push('/admin_login')
  }
  const goToSignUp = () =>{
    router.push('/signup')
  }
</script>

<template>

  <div class="flex gap-6 font-manrope">
    <div class="sm:hidden md:block my-auto text-Primary text-center text-sm font-semibold non-italic underline cursor-pointer">
      <a @click="goToLogin()">Login</a>
    </div>
    <div class="mr-11">
      <a @click="goToSignUp()" class="block w-full rounded bg-Primary px-3 py-1.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Neutral/500 cursor-pointer">Sign up For a Free Trial</a>
    </div>
  </div>
  <div>
  </div>
</template>
