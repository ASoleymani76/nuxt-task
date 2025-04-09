<template>
  <section class="w-full flex flex-col xl:flex-row justify-center items-center xl:border border-gray-300 rounded-md">

    <!--  Slider  -->
    <div class="w-full h-full">
      <div class="w-full h-full relative">
        <swiper
            :grabCursor="false"
            :centeredSlides="false"
            :clickable="true"
            :loop="true"
            :slidesPerView="1"
            :spaceBetween="10"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="[SwiperPagination,SwiperAutoplay]"
            :pagination="{
         el:'.pagination-wrapper-3',
        bulletClass:'rounded-full bg-gray-300 p-1 xl:p-1 cursor-pointer',
        bulletActiveClass:'!bg-secondary',
        bulletElement:'div',
        clickable: true,
        }"
            class="mySwiper !cursor-pointer h-full gap-x-4"
        >
          <swiper-slide v-for="item in sliders" class="h-full gap-x-4">
            <img :src="item" class="w-full h-full object-cover flex flex-col justify-center items-center bg-[#B0B0B0] relative gap-x-4"/>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!--  Slider  -->
  </section>
</template>

<script setup lang="ts">

// Variables
const sliders = shallowRef([
    '/sliders/slider-1.jpg',
    '/sliders/slider-2.jpg',
    '/sliders/slider-3.jpg'
])
</script>

<style scoped>

</style>