<template>
  <section class="w-full flex flex-col gap-y-6">

    <!--  Header  -->
    <div class="w-full flex flex-row justify-between items-center">
      <h1 class="text-lg xl:text-2xl text-gray-800 font-bold">{{ $t('شرکای شتابیک') }}</h1>
    </div>
    <!--  Header  -->

    <!--  Slider  -->
    <div class="hidden xl:grid w-full grid-cols-12 gax-4">
      <div class="col-span-1 flex flex-row justify-start items-center">
        <div class="w-10 h-10 next-button-partners hidden xl:flex flex-row justify-center items-center cursor-pointer shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)]">
          <LazyIcon name="icon:chevron-right" class="transform ltr:rotate-180"/>
        </div>
      </div>
      <div class="w-full col-span-10">
        <swiper
            :grabCursor="false"
            :centeredSlides="false"
            :clickable="true"
            :allowTouchMove="true"
            :loop="true"
            :slidesPerView="4"
            :space-between="15"
            :modules="[SwiperNavigation]"
            :navigation="{
            nextEl:'.prev-button-partners',
            prevEl:'.next-button-partners'
          }"
            class="relative"
        >
          <swiper-slide v-for="(partner,idx) in partners" :key="idx" class="!flex flex-row justify-center items-center">
            <div class="w-full flex flex-row justify-center items-center p-1 border border-gray-200 rounded-md py-4 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)]">
              <img :src="`/junks/home/${partner}.png`" class="w-[150px] h-[50px]" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="col-span-1 flex flex-row justify-end items-center">
        <div class="w-10 h-10 prev-button-partners hidden xl:flex flex-row justify-center items-center cursor-pointer shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)]">
          <LazyIcon name="icon:chevron-left" class="transform ltr:rotate-180"/>
        </div>
      </div>
    </div>
    <div class="xl:hidden w-full flex flex-row justify-start items-center gap-x-4 overflow-x-auto pb-2">
      <div v-for="(partner,idx) in partners" :key="idx" class="min-w-[160px] flex flex-row justify-center items-center py-1 px-2 border border-gray-300 rounded-md">
        <img :src="`/junks/home/${partner}.png`" class="w-[150px] h-[50px]" alt="">
      </div>
    </div>
    <!--  Slider  -->
  </section>
</template>

<script setup lang="ts">

// Variables
const partners = shallowRef([
    'c-1',
    'c-2',
    'c-3',
    'c-4',
    'c-1',
    'c-2',
    'c-3',
    'c-4',
])
</script>

<style scoped>

</style>