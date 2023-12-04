<script setup lang="ts">
import IconLikes from '@/components/icons/IconLikes.vue'
import IconReplies from '@/components/icons/IconReplies.vue'
import IconOptions from '@/components/icons/IconOptions.vue'
import IconDown from '@/components/icons/IconDown.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToStudentLogin = () => {
  router.push('/student_login')
}
const reviews = {
  featured: [
    {
      id: 1,
      content: `
        <p>Chemistry is fun!</p>
      `,
      date: 'July 16, 2021',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      likes: '15',
      repliesNumber: '6'
    }
  ]
}
const replies = [
  {
    id: 1,
    rating: 5,
    content: `
        <p>I love how the lessons are very elaborate</p>
      `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    likes: '15',
    repliesNumber: '6'
  },
  {
    id: 2,
    rating: 5,
    content: `
        <p>Going into the next lesson </p>
      `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Margie Karanja',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    likes: '15',
    repliesNumber: '6'
  }
]
</script>

<template>
  <div class="mt-20 ml-36 bottom-0 font-manrope mr-60">
    <h3 class="sr-only">Customer Reviews</h3>

    <div
      v-for="review in reviews.featured"
      :key="review.id"
      class="flex space-x-4 text-sm text-gray-500"
    >
      <div class="flex-none py-4">
        <img :src="review.avatarSrc" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
      </div>
      <div class="py-4 w-full">
        <div class="flex justify-between">
          <p>
            <time class="text-sm font-normal leading-5 text-Neutral/500">{{ review.date }}</time>
          </p>
          <button>
            <IconOptions />
          </button>
        </div>
        <h3 class="font-semibold text-gray-900">{{ review.author }}</h3>
        <div
          class="mt-2 max-w-none text-Neutral/800 font-normal text-base"
          v-html="review.content"
        />
        <div class="flex gap-8 py-2 text-xs font-bold leading-4 text-Neutral/500">
          <button class="flex gap-1">
            {{ review.likes }} likes
            <IconLikes />
          </button>
          <button class="flex gap-1">
            {{ review.repliesNumber }} replies
            <IconReplies />
          </button>
        </div>
        <button class="flex text-Primary mt-4 text-sm font-semibold">
          View all 124 comments
          <IconDown />
        </button>

        <div v-for="reply in replies" :key="reply.id" class="flex space-x-4 text-sm text-gray-500">
          <div class="flex-none py-4">
            <img :src="reply.avatarSrc" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
          </div>
          <div class="py-4 w-full">
            <p class="flex justify-between">
              <time class="text-sm font-normal leading-5 text-Neutral/500">{{ reply.date }}</time>
              <button>
                <IconOptions />
              </button>
            </p>
            <h3 class="font-semibold text-gray-900">{{ reply.author }}</h3>
            <div
              class="mt-2 max-w-none text-Neutral/800 font-normal text-base"
              v-html="reply.content"
            />
            <div class="flex gap-8 py-2 text-xs font-bold leading-4 text-Neutral/500">
              <button class="flex gap-1">
                {{ reply.likes }} likes
                <IconLikes />
              </button>
              <button class="flex gap-1">
                {{ reply.repliesNumber }} replies
                <IconReplies />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="onsubmit" class="mt-2 sm:flex sm:w-full mb-12">
      <label for="comment" class="sr-only">comment-section</label>
      <input
        type="text"
        name="comment"
        id="comment"
        class="font-manrope sm:w-full min-w-0 rounded-md border-neutral-200 font-normal bg-white leading-4 px-3 py-2 text-sm text-shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-neutral-500 sm:text-sm sm:leading-6 xl:w-full"
        placeholder="Login to your student account to participate"
      />
      <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
        <button
          @click="goToStudentLogin()"
          class="w-10 h-10 flex items-center justify-center rounded-md bg-Primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
        >
          <img src="../../../assets/images/Homepage/Icon.svg" alt="" />
        </button>
      </div>
    </form>
  </div>
</template>