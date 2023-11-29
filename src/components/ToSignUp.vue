<script setup lang="ts">
import AdminLogin from "@/components/AdminLogin.vue";
import AdminSignup1 from "@/components/AdminSignup1.vue";
import {useAdminStore} from "@/stores/user";
const adminLogin = useAdminStore()

import {useSignUpStore} from "@/stores/signUp";
const adminSignUp = useSignUpStore()
</script>

<template>

  <div class="flex gap-6 font-manrope">
    <div class="sm:hidden md:block my-auto text-Primary text-center text-sm font-semibold non-italic underline cursor-pointer">
      <a @click="adminLogin.loggingInUser()">Login</a>
    </div>
    <div class="mr-11">
      <a @click="adminSignUp.signingInUser()" class="block w-full rounded bg-Primary px-3 py-1.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Neutral/500 cursor-pointer">Sign up For a Free Trial</a>
    </div>
  </div>
  <div>
    <AdminLogin v-if ="adminLogin.loggedin" />
    <AdminSignup1 v-if ="adminSignUp.signedin"/>
<!--    <ActivatePlan v-model:show="showModal"/>-->
  </div>
</template>
