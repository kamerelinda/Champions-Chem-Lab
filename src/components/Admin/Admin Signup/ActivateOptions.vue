<template>
  <div class="w-full max-w-md px-2 sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-Primary p-1">
        <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
        >
          <button
              :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-Neutral/800'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            :class="[
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <li
                v-for="post in posts"
                :key="post.id"
                class="relative my-2 border-Neutral/100 border rounded-md p-3 hover:bg-gray-100"
            >
              <h1 class="text-base font-bold leading-5">
                {{ post.title }}
              </h1>

              <p class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                {{ post.description }}
              </p>
              <h3>{{ post.price }}</h3>

              <a
                  href="#"
                  :class="[
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                ]"
              />
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
  Monthly: [
    {
      id: 1,
      title: 'Basic Package',
      description: 'Max of 10 Students per classroom. \n' +
          '(Recommended for small classes)',
      price: 'Kes 449.99'
    },
    {
      id: 2,
      title: 'Premium Package',
      description: 'Max of 70 Students per classroom. \n' +
          '(Recommended for mass classes or streams of a  single class)',
      price: 'Kes 848.99'
    },
    {
      id: 3,
      title: 'Organization Package',
      description: 'Unlimited no of Students per classroom. \n' +
          '(Recommended for schools, and organizations in general)',
      price: 'Kes 1249.99'
    },
  ],
  Yearly: [
    {
      id: 1,
      title: 'Basic Package',
      description: 'Max of 10 Students per classroom. \n' +
          '(Recommended for small classes)',
      price: 'Kes 6000'
    },
    {
      id: 2,
      title: 'Premium Package',
      description: 'Max of 70 Students per classroom. \n' +
          '(Recommended for mass classes or streams of a  single class)',
      price: 'Kes 10,800'
    },
    {
      id: 3,
      title: 'Organization Package',
      description: 'Unlimited no of Students per classroom. \n' +
          '(Recommended for schools, and organizations in general)',
      price: 'Kes 15000'
    },
  ],
})
</script>
