<template>
  <section class="w-full flex flex-col xl:flex-row justify-center items-center xl:border border-gray-300 rounded-md xl:p-4 gap-4 xl:gap-8">

    <!--  Categories  -->
    <div class="w-full xl:w-3/12 h-full flex flex-col gap-y-4">
      <div class="flex flex-row justify-start items-center gap-x-2">
        <LazyIcon name="icon:list-unordered" class="text-gray-700" size="20"/>
        <strong class="text-gray-700 text-base">{{ $t('دسته‌بندی‌ها') }}</strong>
      </div>

      <div class="w-full flex flex-col gap-y-2">
        <NuxtLink v-for="(cat,idx) in categories" :key="idx" class="text-gray-600 text-sm text-nowrap">
          {{ $t(cat) }}
        </NuxtLink>
      </div>

      <div class="flex flex-row justify-start items-center gap-x-6">
        <span class="text-primary text-base">{{ $t('مشاهده بیشتر') }}</span>
        <LazyIcon name="icon:chevron-left-gold" class="transform ltr:rotate-180"/>
      </div>
    </div>
    <!--  Categories  -->

    <!--  Slider  -->
    <div class="w-full xl:w-6/12 h-full">
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
            class="mySwiper !cursor-pointer h-full rounded-[24px] gap-x-4"
        >
          <swiper-slide v-for="item in 6" class="h-full rounded-[24px] gap-x-4">
            <div class="w-full min-h-[350px] h-full flex flex-col justify-center items-center bg-[#B0B0B0] relative rounded-[24px] gap-x-4">
              <strong class="text-gray-800 text-base">{{ $t('جایگاه تبلیغ') }}</strong>
            </div>
          </swiper-slide>
        </swiper>
        <div class="w-full flex flex-row justify-center items-center relative transform -translate-y-full z-10">
          <div class="w-max">
            <div class="pagination-wrapper-3 w-max rounded-full flex flex-row justify-center items-start gap-x-2 xl:gap-x-4 p-2 xl:p-4">
              <div class="custom-bullet-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  Slider  -->

    <div class="w-full xl:w-3/12 h-full flex flex-col gap-y-4">
      <span class="text-gray-700 text-base">{{ $t('بر اساس جستجوهای شما') }}</span>

      <div class="w-full flex flex-col gap-y-4">
        <div v-for="(product,idx) in products" :key="idx" class="w-full flex flex-row justify-start items-center gap-x-4">
          <img :src="`/junks/home/p-${idx+1}.png`" class="w-[60px] h-[60px]" alt="">

          <div class="flex flex-col justify-center gap-y-2">
            <div class="flex flex-row justify-start items-center gap-x-1">
              <span class="text-xs text-gray-500">{{ $t('دسته‌بندی') }}:</span>
              <strong class="text-gray-700 text-sm">{{ $t(product.name) }}</strong>
            </div>
            <div class="flex flex-row justify-start items-center gap-x-1">
              <span class="text-xs text-gray-500">{{ $t('بیش از') }}</span>
              <strong class="text-gray-700 text-sm">{{ product.suppliersCount }}</strong>
              <span class="text-xs text-gray-500">{{ $t('تامین کننده') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

// Variables
const categories = shallowRef([
    'تجهیزات و قطعات الکترونیکی',
    'باتری و شارژر و منبع تغذیه',
    'محصولات الکترونیکی و هوشمند',
    'دوربین مداربسته',
    'لوازم جانبی وسایل نقلیه',
    'پروفیل',
    'تجهیزات سرمایشی',
    'تجهیزات گرمایشی',
    'تجهیزات آزمایشگاهی',
    'بلندگو و ضبط',
    'میکروفون',
]);
const products = shallowRef([
  {
    name:'پمپ هیدرولیک',
    suppliersCount:'15'
  },
  {
    name:'میز قهوه',
    suppliersCount:'10'
  },
  {
    name:'تصفیه آب',
    suppliersCount:'12'
  },
  {
    name:'مبلمان خانگی',
    suppliersCount:'23'
  },
  {
    name:'اسکوتر',
    suppliersCount:'6'
  },
]);
</script>

<style scoped>

</style>