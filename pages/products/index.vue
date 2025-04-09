<template>
  <main
      id="main"
      ref="el"
      class="w-full grid grid-cols-1 p-4 2xl:px-2/12 relative mx-auto bg-[#F8F8F8] dark:bg-mainDark gap-6 xl:gap-4"
  >

    <!--  BreadCrumb  -->
    <LazyUtilitiesBreadcrumb :breadcrumbs="breadcrumbs"/>
    <!--  BreadCrumb  -->

    <!--  Commercials  -->
    <section class="w-full h-[200px] bg-[#868686] rounded-[16px] flex flex-row justify-center items-center">
      <span class="text-2xl text-gray-800">{{ $t('جایگاه تبلیغ') }}</span>
    </section>
    <!--  Commercials  -->

    <!--  Sorts  -->
    <section class="w-full flex flex-row justify-between items-center">
      <div class="w-full flex flex-row justify-start items-center gap-x-4 overflow-x-auto pb-2">
        <div class="min-w-max flex flex-row justify-start items-center gap-2">
          <LazyIcon name="icon:sort" size="15"/>
          <span class="text-base text-gray-700">{{ $t('مرتب‌سازی') }}:</span>
        </div>

        <span v-for="(sort,idx) in sorts" :key="idx" :class="[sort.value === selectedSort ? 'text-primary' : 'text-gray-600']" @click="selectedSort = sort.value" class="min-w-max text-sm cursor-pointer">
          {{ $t(sort.name) }}
        </span>
      </div>
      <div class="hidden xl:flex flex-row justify-start items-center gap-1 text-gray-600 text-sm">
        <span>120</span>
        <span>{{ $t('مورد') }}</span>
      </div>
    </section>
    <!--  Sorts  -->

    <!--  Products Grid  -->
    <section class="w-full grid grid-cols-1 xl:grid-cols-3 gap-4">

      <NuxtLinkLocale :to="`/products/${$t(product.name)}`" v-for="(product,idx) in products" :key="idx" class="w-full flex flex-row justify-between items-center p-4 bg-white border border-gray-200 rounded-[12px] gap-2">
        <div class="w-full h-full flex flex-col justify-between">
          <h2 class="text-base text-gray-800">{{ $t(product.name) }}</h2>
          <span class="text-sm text-gray-600">{{ $t('تهران, ایران') }}</span>
          <div class="flex flex-row justify-start items-center gap-1 text-sm text-gray-600">
            <span>{{ $t('حداقل سفارش') }}:</span>
            <span>100</span>
            <span>{{ $t('کیلوگرم') }}</span>
          </div>
          <div class="flex flex-row justify-start items-center gap-1 text-sm text-gray-600">
            <span>{{ $t('حداکثر سفارش') }}:</span>
            <span>2300</span>
            <span>{{ $t('کیلوگرم') }}</span>
          </div>
          <div class="w-full flex flex-row justify-between items-center gap-1 text-sm text-gray-600">
            <div class="flex flex-row justify-between items-center gap-1">
              <span>{{ $t('قیمت') }}:</span>
              <span>{{ $t('پیام دهید') }}</span>
            </div>
            <LazyIcon name="icon:massage-green" size="15"/>
          </div>
        </div>
        <img :src="product.picture" class="w-[120px] h-[100px] xl:w-[160px] xl:h-[144px] rounded-[8px]" :alt="$t(product.name)">
      </NuxtLinkLocale>
    </section>
    <!--  Products Grid  -->
  </main>
</template>

<script setup lang="ts">

const {locale, localeProperties, t: $t} = useI18n();
useHead({
  title:$t('همه محصولات')
})

// Variables
const breadcrumbs = ref<IBreadCrumb[]>([
  {
    title: "همه محصولات",
    link: "#",
  },
]);
const sorts = shallowRef([
  {
    name:'جدیدترین',
    value: 1
  },
  {
    name:'پربازدیدترین',
    value: 2
  },
  {
    name:'بالاترین امتیاز',
    value: 3
  },
  {
    name:'پرفروش‌ترین‌',
    value: 4
  },
  {
    name:'منتخب',
    value: 5
  },
]);
const selectedSort = ref(1);
const products = shallowRef([
  {
    name:'بذر برنج',
    picture:'/junks/products/p-1.png'
  },
  {
    name:'پرتقال تو سرخ',
    picture:'/junks/products/p-2.png'
  },
  {
    name:'زرشک',
    picture:'/junks/products/p-3.png'
  },
  {
    name:'کدو تنبل',
    picture:'/junks/products/p-4.png'
  },
  {
    name:'بادمجان',
    picture:'/junks/products/p-5.png'
  },
  {
    name:'انار',
    picture:'/junks/products/p-6.png'
  },
  {
    name:'پوره هویج',
    picture:'/junks/products/p-7.png'
  },
  {
    name:'کیوی',
    picture:'/junks/products/p-8.png'
  },
  {
    name:'بادام درختی',
    picture:'/junks/products/p-9.png'
  },
]);
</script>

<style scoped>

</style>