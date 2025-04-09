<template>
  <section class="w-full flex flex-col gap-y-6">

    <!--  Header  -->
    <div class="w-full flex flex-row justify-between items-center">
      <h2 class="text-lg xl:text-2xl text-gray-800 font-bold">{{ $t('تامین‌کنندگان به تفکیک کشور') }}</h2>
      <NuxtLinkLocale to="/suppliers" class="flex flex-row justify-start items-center gap-x-2">
        <span class="text-xs xl:text-sm text-secondary">{{ $t('مشاهده همه') }}</span>
        <LazyIcon name="icon:arrow-left" class="transform ltr:rotate-180" size="10"/>
      </NuxtLinkLocale>
    </div>
    <!--  Header  -->

    <!--  Slider  -->
    <div class="hidden xl:block w-full">
      <swiper
          :grabCursor="false"
          :centeredSlides="false"
          :clickable="true"
          :allowTouchMove="true"
          :loop="true"
          :slidesPerView="10"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl:'.prev-button-flags',
            prevEl:'.next-button-flags'
          }"
          class="relative"
      >
        <swiper-slide v-for="(flag,idx) in flags" :key="idx" class="!flex flex-row justify-center items-center">
          <div class="flex flex-row justify-center items-center p-1 border border-gray-200 rounded-md">
            <img :src="`/flags/${flag.picture}.png`" class="w-[30px] h-[20px]" alt="">
          </div>
        </swiper-slide>
      </swiper>
      <div class="w-full flex flex-row justify-between items-center relative">
        <div class="w-16 h-16 next-button-flags hidden xl:flex flex-row justify-center items-center cursor-pointer absolute -bottom-5 right-[-3rem]">
          <LazyIcon name="icon:chevron-right"/>
        </div>
        <div class="w-16 h-16 prev-button-flags hidden xl:flex flex-row justify-center items-center cursor-pointer absolute -bottom-5 left-[-3rem]">
          <LazyIcon name="icon:chevron-left" class="[&_*]:!fill-secondary"/>
        </div>
      </div>
    </div>
    <div class="xl:hidden w-full flex flex-row justify-start items-center gap-x-4 overflow-x-auto pb-2">
      <div v-for="(flag,idx) in flags" class="min-w-[35px] flex flex-row justify-center items-center p-1 border border-gray-200 rounded-md">
        <img :src="`/flags/${flag.picture}.png`" class="w-[30px] h-[20px]" alt="">
      </div>
    </div>
    <!--  Slider  -->

    <div class="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div class="flex flex-col gap-y-4">
        <strong class="text-gray-800 text-xl">{{ $t('استعلام قیمت') }}</strong>

        <div class="w-full grid grid-cols-2 gap-2">
          <div class="col-span-2 xl:col-span-1 flex flex-col gap-2">
            <label for="name" class="text-gray-600 text-sm">{{ $t('نام کمپانی') }}</label>
            <input id="name" type="text" class="w-full rounded-md border border-gray-200 p-2">
          </div>
          <div class="col-span-2 xl:col-span-1 flex flex-col gap-2">
            <label for="email" class="text-gray-600 text-sm">{{ $t('ایمیل') }}</label>
            <input id="email" type="text" class="w-full rounded-md border border-gray-200 p-2">
          </div>
          <div class="col-span-2 xl:col-span-1 flex flex-col gap-2">
            <label for="product-name" class="text-gray-600 text-sm">{{ $t('نام محصول') }}</label>
            <input id="product-name" type="text" class="w-full rounded-md border border-gray-200 p-2">
          </div>
          <div class="col-span-2 xl:col-span-1 flex flex-col gap-2">
            <label for="quantity" class="text-gray-600 text-sm">{{ $t('مقدار مورد نظر') }}</label>
            <input id="quantity" type="text" class="w-full rounded-md border border-gray-200 p-2">
          </div>
          <div class="col-span-2 flex flex-col gap-2">
            <label for="description" class="text-gray-600 text-sm">{{ $t('توضیحات') }}</label>
            <input id="description" type="text" class="w-full rounded-md border border-gray-200 p-2">
          </div>
          <div class="col-span-2 flex flex-row justify-center xl:justify-end items-center">
            <button class="w-full xl:w-max py-2 px-8 bg-secondary text-white text-sm rounded-xl">{{ $t('تایید') }}</button>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-y-4">
        <strong class="text-gray-800 text-base">{{ $t('با ثبت درخواست خود، بهترین پیشنهادها را از تامین‌کنندگان دریافت کنید') }}</strong>
        <div class="w-full flex flex-row justify-start items-center gap-x-2">
          <LazyIcon name="icon:done" size="15"/>
          <span class="text-gray-700 text-sm">{{ $t('پاسخ‌دهی سریع') }}</span>
        </div>
        <div class="w-full flex flex-row justify-start items-center gap-x-2">
          <LazyIcon name="icon:done" size="15"/>
          <span class="text-gray-700 text-sm">{{ $t('یک درخواست، چندین پیشنهاد') }}</span>
        </div>
        <div v-for="i in 4" class="w-full flex flex-row justify-start items-center gap-x-2">
          <LazyIcon name="icon:done" size="15"/>
          <span class="text-gray-700 text-sm">{{ $t('لورم ایپسوم متن آزمایشی') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

// Variables
const flags = shallowRef([
  {
    picture:'ar'
  },
  {
    picture:'bn'
  },
  {
    picture:'br'
  },
  {
    picture:'bz'
  },
  {
    picture:'ch'
  },
  {
    picture:'en'
  },
  {
    picture:'fa'
  },
  {
    picture:'fr'
  },
  {
    picture:'gr'
  },
  {
    picture:'it'
  },
  {
    picture:'jp'
  },
  {
    picture:'ml'
  },
  {
    picture:'pk'
  },
  {
    picture:'po'
  },
  {
    picture:'ru'
  },
  {
    picture:'sn'
  },
  {
    picture:'st'
  },
  {
    picture:'sw'
  },
  {
    picture:'th'
  },
  {
    picture:'tr'
  },
  {
    picture:'vt'
  },
])
</script>

<style scoped>

</style>