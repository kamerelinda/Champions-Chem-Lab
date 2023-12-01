<script setup lang="ts">
const posts = [
  {
    id: 1,
    author: {
      name: 'Michael Foster',
      email: 'michael@gmail.com',
      href: '#',
      imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    author: {
      name: 'Stella James',
      email: 'stella@gmail.com',
      href: '#',
      imageUrl:
          'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww',

  },},
  {
    id: 3,
    author: {
      name: 'Mary keynes',
      email: 'keynesmary@gmail.com',
      href: '#',
      imageUrl:
          'https://plus.unsplash.com/premium_photo-1668989224643-6b79eaea2108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',

    },},

]
</script>

<template>
  <p>Enroll students into your classroom</p>
  <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
  <div class="relative flex items-center gap-x-4">
    <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
    <div class="text-sm leading-6">
      <p class="font-semibold text-gray-900">
        <a :href="post.author.href">
          <span class="absolute inset-0" />
          {{ post.author.name }}
        </a>
      </p>
      <p class="text-gray-600">{{ post.author.email}}</p>
    </div>
  </div>
  </article>
</template>

<style scoped>

</style>