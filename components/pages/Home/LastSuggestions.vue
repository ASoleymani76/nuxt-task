<template>
  <section class="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
    <!--  Sail  -->
    <div class="w-full flex flex-col gap-y-4">
      <div class="w-full flex flex-row justify-between items-center border border-gray-300 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] py-2 px-4 rounded-md">
        <h4 class="text-base xl:text-lg text-gray-700">{{ $t('آخرین پیشنهادات فروش') }}</h4>
        <span class="text-secondary text-sm xl:text-base">{{ $t('مشاهده همه') }}</span>
      </div>

      <div class="w-full max-h-[300px] flex flex-col gap-y-4 border border-gray-300 bg-[#F2F4F5] p-4 rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-300">
        <div v-for="(suggest,idx) in suggestions" :key="idx" class="w-full flex flex-row justify-center items-center gap-4">
          <div class="flex flex-row justify-center items-center bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] p-2 rounded-md">
            <img :src="`/flags/${suggest.picture}.png`" class="w-[30px] h-[20px]" alt="">
          </div>
          <div class="w-full flex flex-row justify-between items-center bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] p-2 rounded-md">
            <span class="text-sm xl:text-base text-gray-700">{{ $t(suggest.product) }}</span>
            <div class="flex flex-row justify-start items-center gap-1 text-gray-500 text-2xs xl:text-xs">
              <span>2</span>
              <span>{{ $t('دقیقه پیش') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  Sail  -->

    <!--  Buy  -->
    <div class="w-full flex flex-col gap-y-4">
      <div class="w-full flex flex-row justify-between items-center border border-gray-300 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] py-2 px-4 rounded-md">
        <h4 class="text-base xl:text-lg text-gray-700">{{ $t('آخرین پیشنهادات خرید') }}</h4>
        <span class="text-secondary text-sm xl:text-base">{{ $t('مشاهده همه') }}</span>
      </div>

      <div class="w-full max-h-[300px] flex flex-col gap-y-4 border border-gray-300 bg-[#F2F4F5] p-4 rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-300">
        <div v-for="(suggest,idx) in suggestions" :key="idx" class="w-full flex flex-row justify-center items-center gap-4">
          <div class="flex flex-row justify-center items-center bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] p-2 rounded-md">
            <img :src="`/flags/${suggest.picture}.png`" class="w-[30px] h-[20px]" alt="">
          </div>
          <div class="w-full flex flex-row justify-between items-center bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] p-2 rounded-md">
            <span class="text-sm xl:text-base text-gray-700">{{ $t(suggest.product) }}</span>
            <div class="flex flex-row justify-start items-center gap-1 text-gray-500 text-xs">
              <span>2</span>
              <span>{{ $t('دقیقه پیش') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  Buy  -->
  </section>
</template>

<script setup lang="ts">

// Variables
const suggestions = shallowRef([
  {
    product:'کارت گرافیک',
    picture:'ar'
  },
  {
    product:'زعفران',
    picture:'bn'
  },
  {
    product:'تصفیه آب',
    picture:'br'
  },
  {
    product:'مبلمان خانگی',
    picture:'bz'
  },
  {
    product:'اسکوتر',
    picture:'ch'
  },
  {
    product:'میز قهوه',
    picture:'en'
  },
  {
    product:'پمپ هیدرولیک',
    picture:'fa'
  },
])
</script>

<style scoped>

</style>