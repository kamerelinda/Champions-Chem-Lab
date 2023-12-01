<script setup>
  import { Dialog, DialogPanel,TransitionChild, TransitionRoot } from '@headlessui/vue';
  import {ref} from "vue";
  import {useRouter} from "vue-router";

  const router = useRouter();
  const open = ref(true);
  const closeModal = () => {
    open.value = false;
  };
  const goToAnotherPage = () => {
    closeModal();
    router.push('/homepage')
  };
  const goToSignUp = () =>{
    closeModal();
    router.push('/signup')
  }
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-50">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-100 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-[440px] sm:p-6">
                    <div class=" font-manrope w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div class="flex flex-col justify-center items-center text-center">
                          <p class="text-Primary pb-2 overflow-hidden text-ellipsis whitespace-nowrap text-base font-extrabold">Champions Chem Lab</p>
                          <img class="w-16 h-16 pb-2" src="../../../assets/images/School%20Logo/Logo.png" alt="school logo" />
                          <h1 class="text-xl pb-2 font-bold leading-tight tracking-tight text-Neutral/800 md:text-2xl dark:text-white">
                            Admin Login
                          </h1>
                          <p class="text-sm font-normal text-Neutral/500 ">Welcome back. Enter your credentials to access your account</p>
                        </div>
              <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="onsubmit">
                <div>
                  <label for="login_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                  <input type="email" name="email" id="login_email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="hello@example.com" autocomplete="on" required>
                </div>
                <div>
                  <label for="login_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="login_password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="on" required>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="login_tick" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" autocomplete="on" required>
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="login_tick" class="text-gray-500 dark:text-gray-300">Keep me signed in</label>
                    </div>
                  </div>
                  <a href="#" class="text-sm font-bold text-Primary hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button  @click="goToAnotherPage()" type="submit" class="w-full text-white bg-Primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded text-base font-semibold px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Continue</button>
                <p class="text-sm font-normal text-Neutral/800 text-center dark:text-gray-400">
                  Don’t have an account?
                  <a @click="goToSignUp()" class="font-bold text-sm text-Primary hover:underline dark:text-primary-500">Sign up here</a>
                </p>
              </form>
                      </div>
                    </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>



