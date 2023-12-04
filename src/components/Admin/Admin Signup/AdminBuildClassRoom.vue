<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref } from 'vue'
import EnrollStudents from '@/components/Admin/Admin Signup/EnrollStudents.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const open = ref(true)
const closeModal = () => {
  open.value = false
}
const activatePlan = () => {
  closeModal()
  router.push('/signup/activate_plan')
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
        <div class="fixed inset-0 bg-gray-500 bg-opacity-90 transition-opacity" />
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
                      Build your Classroom
                    </h1>
                    <p class="text-sm font-normal text-Neutral/500">
                      You will need a classroom in order to enroll your students to the platform,
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
                    <n-divider dashed class="text-sm text-Neutral/800">
                      <div
                        class="border-2 rounded border-Primary bg-Primary h-6 w-6 p-1 flex justify-center items-center"
                      >
                        2
                      </div>
                      <div class="pl-1">Build Classroom</div>
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
                    <!--                   Class Name section-->
                    <div>
                      <label
                        for="class"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Class Name</label
                      >
                      <input
                        type="text"
                        id="class"
                        autocomplete="on"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <!--                    end of Class Name section-->
                    <!--                    Number of Student to enroll section-->
                    <div>
                      <label
                        for="number"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Number of students to enroll</label
                      >
                      <div class="relative">
                        <input
                          type="number"
                          id="number"
                          autocomplete="on"
                          placeholder="at least 1"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <!--                    end of number of students section-->
                    <EnrollStudents />
                    <!--                    share-->

                    <div>
                      <div class="mt-2 max-w-xl text-sm text-gray-500">
                        <p>or share link to join</p>
                      </div>
                      <form class="mt-5 sm:flex sm:items-center">
                        <div class="w-full sm:max-w-xs">
                          <label for="link" class="sr-only">link</label>
                          <input
                            type="text"
                            name="link"
                            id="link"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            autocomplete="on"
                            placeholder="https://www.sharemylink.com"
                          />
                        </div>
                        <button
                          type="submit"
                          class="mt-3 inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-Primary shadow-sm hover:bg-Primary hover:text-white sm:ml-3 sm:mt-0 sm:w-auto"
                        >
                          Copy
                        </button>
                      </form>
                    </div>

                    <!--                    end of share-->
                    <!--                    build classroom button-->
                    <button
                      @click="activatePlan()"
                      type="submit"
                      class="w-full text-white bg-Primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded text-base font-semibold px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Build Classroom
                    </button>
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