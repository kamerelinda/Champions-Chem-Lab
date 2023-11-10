<script setup lang="ts">
import IconSchoolLogo from "@/components/icons/IconSchoolLogo.vue";

import {useLoadHomeStore} from "@/stores/loadHomepage";
const loadHome = useLoadHomeStore()
</script>


<template>
  <section>
    <div class=" font-manrope w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div class="flex flex-col justify-center items-center text-center">
          <p class="text-Primary pb-2 overflow-hidden text-ellipsis whitespace-nowrap text-base font-extrabold">Champions Chem Lab</p>
          <IconSchoolLogo class="pb-2"/>
          <h1 class="text-xl pb-2 font-bold leading-tight tracking-tight text-Neutral/800 md:text-2xl dark:text-white">
            Student Login
          </h1>
          <p class="text-sm font-normal text-Neutral/500 ">Welcome back. Enter your credentials to access your account</p>
        </div>
        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <label for="SchoolName" class="block mb-2 text-sm font-medium text-Neutral/800 dark:text-white">School Name</label>
            <input type="text" name="school" id="school" class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hue-500 dark:focus:border-blue-500" required>
          </div>
          <div>
            <label for="ClassId" class="block mb-2 text-sm font-medium text-Neutral/800 dark:text-white">Class ID</label>
            <input type="text" name="class id" id="id" class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hue-500 dark:focus:border-blue-500" required>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-Neutral/800 dark:text-white">Pin</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="text-gray-500 dark:text-gray-300">Keep me signed in</label>
              </div>
            </div>
            <a href="#" class="text-sm font-bold text-Primary hover:underline dark:text-primary-500">Forgot password?</a>
          </div>
          <button @click="loadHome.AddHomePage()" type="submit" class="w-full text-white bg-Primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 roundesd text-base font-semibold px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Continue</button>
          <p class="text-sm font-normal text-Neutral/800 text-center dark:text-gray-400">
            Don’t have an account? <a href="#" class="font-bold text-sm text-Primary hover:underline dark:text-primary-500">Sign up here</a>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
