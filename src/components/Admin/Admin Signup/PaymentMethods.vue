<script setup lang="ts">
  import IconMpesa from "@/components/icons/IconMpesa.vue";
  import IconVisa from "@/components/icons/IconVisa.vue";
  import {useRouter} from "vue-router";

  const router = useRouter();
  const goToHomePage = () => {
    router.push('/homepage')
  };
  const features = [
    {
      name: 'Mobile Money',
      description:
          'M-Pesa, Orange Money, Airtel Money',
      icon: IconMpesa
    },
    {
      name: 'Card',
      description:
          'Pay via Visa or Card',
      icon: IconVisa

    },
  ]
</script>

<template>
    <div class=" text-xl font-bold text-Neutral/800 flex justify-center">
      <h1>Payment Methods</h1>
    </div>
  <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10">
      <div @click="goToHomePage()" v-for="feature in features" :key="feature.name" class=" cursor-pointer relative pl-16 border">
        <dt class="text-base font-bold leading-7 text-gray-900 ">
          <div class="absolute left-1 top-4 flex items-center justify-center rounded-lg bg-white">
            <component :is="feature.icon" class=" text-white" aria-hidden="true" />

          </div>
          {{ feature.name }}
        </dt>
        <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>

</style>