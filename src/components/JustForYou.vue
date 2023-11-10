<script setup lang="ts">

// let videos: { id:number; imagesrc: string; Description: string; Title: string }[];
const videos = [
  {
    id: 1,
    imagesrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    Title: 'Chemicals 101',
    Description: `A beginner's guide`
  },
  {
    id: 1,
    imagesrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    Title: 'Chemicals 101',
    Description: `A beginner's guide`
  },
  {
    id: 1,
    imagesrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    Title: 'Chemicals 101',
    Description: `A beginner's guide`
  },
];
</script>

<template>
  <div class="ml-[24px] mt-[4px]">
<p class="text-darkest font-bold text-[18px] mb-[23px]">
  Just for You
</p>

  <div class="flex gap-4">
    <div v-for="video in videos" :key="video.id">
      <img src="@/assets/Image%20Placeholder%20(Copy%20paste%20here).png" alt="" class="mb-[12px]">
      <p class="mb-2 text-base font-bold text-darkest">{{video.Title}}</p>
      <p class="text-xs font-normal text-lightest"> {{video.Description}}</p>
    </div>
  </div>
  </div>
</template>
