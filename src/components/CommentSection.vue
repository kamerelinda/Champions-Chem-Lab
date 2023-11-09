<script setup lang="ts">
const reviews = {
  featured: [
    {
      id: 1,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      likes:'15',
      replies: '6'
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box,so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      likes:'15',
      replies: '6'
    },
  ],
}
</script>

<template>
  <div class="mt-36 ml-36 w-9/12 bottom-0">
      <h3 class="sr-only">Customer Reviews</h3>

      <div v-for="(review) in reviews.featured" :key="review.id" class="flex space-x-4 text-sm text-gray-500">
        <div class="flex-none py-10">
          <img :src="review.avatarSrc" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
        </div>
        <div class="py-10">
          <h3 class="font-medium text-gray-900">{{ review.author }}</h3>
          <p>
            <time :datetime="review.datetime">{{ review.date }}</time>
          </p>

          <div class="prose prose-sm mt-4 max-w-none text-gray-500" v-html="review.content" />
        </div>
      </div>
    <form class="mt-6 sm:flex sm:w-full mb-12">
      <label for="comment" class="sr-only">comment-section</label>
      <input type="text" name="comment" id="comment" class="font-manrope sm:w-full min-w-0 rounded-md border-neutral-200 font-normal bg-white px-3 py-2 text-sm text-shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-neutral-500  sm:text-sm sm:leading-6 xl:w-full" placeholder="Login to your student account to participate" />
      <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
        <button type="submit" class=" w-10 h-10 flex items-center justify-center rounded-md bg-Primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500">
          <img src="@/assets/Icon.svg" alt=""></button>
      </div>
    </form>
  </div>
</template>
