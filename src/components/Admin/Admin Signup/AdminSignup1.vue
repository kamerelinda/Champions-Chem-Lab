<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { EyeIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const open = ref(true)
const closeModal = () => {
  open.value = false
}
const goToLogin = () => {
  closeModal()
  router.push('/admin_login')
}
const buildAClass = () => {
  closeModal()
  router.push('/signup/build_classroom')
}
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-100 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-[520px] h-[950px] sm:px-6 sm:py-8"
            >
              <div class="font-manrope md:mt-0 sm:max-w-md xl:p-0">
                <div class="space-y-4 md:space-y-6">
                  <div class="flex flex-col justify-center items-center text-center">
                    <p
                      class="text-Primary pb-2 overflow-hidden text-ellipsis whitespace-nowrap text-base font-extrabold"
                    >
                      Champions Chem Lab
                    </p>
                    <img
                      class="w-16 h-16 pb-2"
                      src="../../../../public/Logo.png"
                      alt="school logo"
                    />
                    <h1
                      class="text-xl pb-2 font-bold leading-tight tracking-tight text-Neutral/800 md:text-2xl dark:text-white"
                    >
                      Admin Sign Up
                    </h1>
                    <p class="text-sm font-normal text-Neutral/500">
                      We’ll get you up and running so you can verify your personal information and
                      customize your account.
                    </p>
                  </div>
                  <!--                  divider section -->
                  <div class="flex flex-row">
                    <n-divider dashed class="text-sm text-Neutral/800">
                      <div
                        class="border-2 rounded bg-Primary border-Primary h-6 w-6 p-1 flex justify-center items-center"
                      >
                        1
                      </div>
                      <div class="pl-1">Sign Up</div>
                    </n-divider>
                    <n-divider dashed class="text-sm">
                      <div
                        class="border-2 rounded border-Primary h-6 w-6 p-1 flex justify-center items-center"
                      >
                        2
                      </div>
                      <div class="pl-1 text-neutral-400">Build Classroom</div>
                    </n-divider>
                    <n-divider dashed class="text-sm">
                      <div
                        class="border-2 rounded border-Primary h-6 w-6 p-1 flex justify-center items-center"
                      >
                        3
                      </div>
                      <div class="pl-1 text-neutral-400">Activate Plan</div>
                    </n-divider>
                  </div>
                  <!--                  end of divider section-->
                  <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="onsubmit">
                    <!--                         name section-->
                    <div class="flex flex-row gap-x-7 sm:mx-auto">
                      <div>
                        <label
                          for="firstName"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >First Name</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            id="firstName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Jane"
                            autocomplete="on"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          for="lastName"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Last Name</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            id="lastName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Doe"
                            autocomplete="on"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <!--                    end of name section -->
                    <!--                    email section-->
                    <div>
                      <label
                        for="signup_email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Email Address</label
                      >
                      <input
                        type="email"
                        name="email"
                        id="signup_email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="hello@example.com"
                        autocomplete="on"
                        required
                      />
                    </div>
                    <!--                    end of email section-->
                    <!--                    Password section-->
                    <div>
                      <label
                        for="signup_password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Create Password</label
                      >
                      <div class="relative">
                        <input
                          type="password"
                          name="password"
                          id="signup_password"
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          autocomplete="on"
                          required
                        />
                        <div class="w-4 h-4 absolute inset-y-0 right-2 my-auto cursor-pointer">
                          <EyeIcon />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        for="confirm_password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Confirm Password</label
                      >
                      <div class="relative">
                        <input
                          type="password"
                          name=" confirm password"
                          id="confirm_password"
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          autocomplete="on"
                          required
                        />
                        <div class="w-4 h-4 absolute inset-y-0 right-2 my-auto cursor-pointer">
                          <EyeIcon />
                        </div>
                      </div>
                    </div>
                    <!--                    end of password section-->
                    <!--                    Remember me section-->
                    <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="tick"
                            aria-describedby="remember"
                            type="checkbox"
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            autocomplete="on"
                            required
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="tick" class="text-gray-500 dark:text-gray-300"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                    </div>
                    <!--                    end of Remember me section-->
                    <!--                    How did you hear about us-->
                    <div>
                      <label
                        for="reference"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >How did you hear about us? (optional)</label
                      >
                      <select
                        id="reference"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="">Friends&Family</option>
                        <option value="">Social Media</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                    <!--                    end of how did you hear about us-->
                    <!--                    sign up button-->
                    <button
                      @click="buildAClass()"
                      type="submit"
                      class="w-full text-white bg-Primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded text-base font-semibold px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign Up
                    </button>
                    <p class="text-sm font-normal text-Neutral/800 text-center dark:text-gray-400">
                      Already have an account?
                      <a
                        @click="goToLogin()"
                        href="#"
                        class="font-bold text-sm text-Primary hover:underline dark:text-primary-500"
                        >Login here</a
                      >
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