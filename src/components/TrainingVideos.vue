<template>
  <div class="width-[70%]">
  <n-carousel
      class="width-"
      effect="card"
      prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
      next-slide-style="transform: translateX(50%) translateZ(-800px);"
      style="height: 300px; width: 70%; margin-left: auto; margin-right: auto"
      :show-dots="true"
  >
    <n-carousel-item :style="{ width: '80%' }">
      <img
          class="carousel-img"
          src="@/assets/image%201.png"
       alt="">
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
       alt="">
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
       alt="">
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
       alt="">
    </n-carousel-item>
  </n-carousel>
  </div>
</template>

<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
<script setup lang="ts">
</script>