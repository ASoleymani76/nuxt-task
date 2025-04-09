<template>
  <section class="w-full flex flex-col gap-y-6">

    <!--  Header  -->
    <div class="w-full flex flex-row justify-between items-center">
      <h2 class="text-lg xl:text-2xl text-gray-800 font-bold">{{ $t('جدیدترین‌ها') }}</h2>
    </div>
    <!--  Header  -->

    <div class="w-full bg-secondary rounded-xl p-4">
      <swiper
          :grabCursor="false"
          :centeredSlides="false"
          :clickable="true"
          :allowTouchMove="true"
          :loop="true"
          :slidesPerView="1"
          :navigation="false"
          :spaceBetween="15"
          :breakpoints="{
              '640': {
              slidesPerView: 5,
            },
          }"
          :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
          :modules="[SwiperAutoplay]"
          class="relative"
      >
        <swiper-slide v-for="(product,idx) in products" :key="idx" class="!flex flex-col items-center xl:items-start gap-y-2 p-2">
          <img :src="product.picture" class="w-[200px] h-[170px] bg-white rounded-[8px]" alt="">
          <h3 class="text-white text-sm">{{ $t(product.name) }}</h3>
          <span class="text-primary text-xs">{{ $t('تهران، ایران') }}</span>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">

// Variables
const products = shallowRef([
  {
    name:'سامسونگ Galaxy A71',
    picture:'/junks/home/pn-1.png'
  },
  {
    name:'مانیتور G9 24',
    picture:'/junks/home/pn-2.png'
  },
  {
    name:'هدفون A341',
    picture:'/junks/home/pn-3.png'
  },
  {
    name:'مانیتور G9 27',
    picture:'/junks/home/pn-4.png'
  },
  {
    name:'سامسونگ Galaxy S21',
    picture:'/junks/home/pn-5.png'
  },
  {
    name:'سامسونگ Galaxy A71',
    picture:'/junks/home/pn-1.png'
  },
  {
    name:'مانیتور G9 24',
    picture:'/junks/home/pn-2.png'
  },
  {
    name:'هدفون A341',
    picture:'/junks/home/pn-3.png'
  },
  {
    name:'مانیتور G9 27',
    picture:'/junks/home/pn-4.png'
  },
  {
    name:'سامسونگ Galaxy S21',
    picture:'/junks/home/pn-5.png'
  },
])
</script>

<style scoped>

</style>