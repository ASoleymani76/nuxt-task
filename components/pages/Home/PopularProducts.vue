<template>
  <section class="w-full flex flex-col gap-y-6">

    <!--  Header  -->
    <div class="w-full flex flex-row justify-between items-center">
      <h2 class="text-lg xl:text-2xl text-gray-800 font-bold">{{ $t('بالاترین امتیاز') }}</h2>
      <div class="flex flex-row justify-start items-center gap-x-2">
        <span class="text-xs xl:text-sm text-secondary">{{ $t('مشاهده همه') }}</span>
        <LazyIcon name="icon:arrow-left" class="transform ltr:rotate-180" size="10"/>
      </div>
    </div>
    <!--  Header  -->

    <div class="w-full grid grid-cols-1 xl:grid-cols-5 gap-4">
      <div v-for="(cat,idx) in categories" :key="idx" class="w-full border border-gray-300 flex flex-col items-center p-2 rounded-md gap-2">
        <h4 class="w-full text-center text-gray-700 border-b border-gray-300 py-2">{{ $t(cat) }}</h4>
        <div v-for="i in 3" class="w-full flex flex-row justify-start items-center gap-2">
          <img src="/junks/home/p-1.png" class="w-[70px] h-[60px]" alt="">

          <div class="w-full flex flex-col gap-1">
            <div class="flex flex-row gap-1 text-xs text-gray-600">
              <span>{{ $t('امتیاز') }}:</span>
              <span>4.9</span>
            </div>
            <div class="flex flex-row gap-1 text-xs text-gray-500">
              <span>{{ $t('میانگین قیمت') }}:</span>
              <span>200,000</span>
            </div>
            <div class="flex flex-row gap-1 text-xs text-gray-500 font-bold">
              <span>#2365</span>
              <span>SDPS</span>
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
    'کشاورزی و صنعت',
    'آجیل',
    'لوازم الکترونیکی',
    'آرایشی و بهداشتی',
    'کت و شلوار'
])
</script>

<style scoped>

</style>