<script setup lang="ts">

import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";
import {ref} from "vue";
import ActivateOptions from "@/components/ActivateOptions.vue";
import PaymentMethods from "@/components/PaymentMethods.vue";

const open = ref(true)
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-[520px] h-fit sm:px-6 sm:py-8">
              <div class=" font-manrope md:mt-0 sm:max-w-md xl:p-0">
                <div class="space-y-4 md:space-y-6">
                  <div class="flex flex-col justify-center items-center text-center">
                    <p class="text-Primary pb-2 overflow-hidden text-ellipsis whitespace-nowrap text-base font-extrabold">Champions Chem Lab</p>
                    <img class="w-16 h-16 pb-2" src="/src/assets/Logo.png" alt="school logo" />
                    <h1 class="text-xl pb-2 font-bold leading-tight tracking-tight text-Neutral/800 md:text-2xl dark:text-white">
                      Activate Account
                    </h1>
                    <p class="text-sm font-normal text-Neutral/500 ">Choose a suitable plan for your organisation .</p>
                  </div>
                  <!--                  divider section -->
                  <div class="flex flex-row">
                    <n-divider dashed class="text-sm text-Neutral/800">
                      <div class="border-2 rounded bg-Primary border-Primary h-6 w-6 p-1 flex justify-center items-center">1</div>
                      <div class="pl-1">Sign Up</div>
                    </n-divider>
                    <n-divider dashed class="text-sm text-Neutral/800">
                      <div class="border-2 rounded border-Primary bg-Primary h-6 w-6 p-1 flex justify-center items-center" >2</div>
                      <div class="pl-1">Build Classroom</div>
                    </n-divider>
                    <n-divider dashed class="text-sm text-Neutral/800">
                      <div class="border-2 rounded border-Primary bg-Primary h-6 w-6 p-1 flex justify-center items-center" >3</div>
                      <div class="pl-1">Activate Plan</div>
                    </n-divider>
                  </div>
                  <!--                  end of divider section-->
                  <!--                  start of pricing plan-->
                  <div class="flex flex-col justify-center items-center">
                    <h1 class="text-xl pb-2 font-bold leading-tight tracking-tight text-Neutral/800 md:text-2xl dark:text-white">Select a Plan</h1>
                    <p>To proceed, you will have to select a plan</p>
                  </div>
                  <ActivateOptions/>
                  <!--                  end of pricing plan-->
<!--                  Payment method-->
                  <PaymentMethods/>
<!--                  End of payment method-->


                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>

</style>