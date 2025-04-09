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
    <section class="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center gap-2">
      <div class="w-full flex flex-row justify-start items-center gap-x-4 overflow-x-auto pb-2">
        <div class="min-w-max flex flex-row justify-start items-center gap-2">
          <LazyIcon name="icon:sort" size="15"/>
          <span class="text-base text-gray-700">{{ $t('مرتب‌سازی') }}:</span>
        </div>

        <span v-for="(sort,idx) in sorts" :key="idx" :class="[sort.value === selectedSort ? 'text-primary' : 'text-gray-600']" @click="selectedSort = sort.value" class="min-w-max text-sm cursor-pointer">
          {{ $t(sort.name) }}
        </span>
      </div>
      <div class="hidden xl:flex flex-row justify-start items-center gap-2 text-gray-600 text-sm">
        <span class="text-base text-gray-700 text-nowrap">{{ $t('نحوه نمایش') }}:</span>
        <LazyIcon name="icon:list" :class="{'[&_*]:fill-primary':!isGrid}" @click="isGrid = false" class="cursor-pointer" size="20"/>
        <LazyIcon name="icon:grid" :class="{'[&_*]:fill-primary':isGrid}" @click="isGrid = true" class="cursor-pointer" size="20"/>
      </div>
    </section>
    <!--  Sorts  -->

    <!--  List  -->
    <section :class="[isGrid ? 'grid-cols-1 xl:grid-cols-3' : 'grid-cols-1 xl:grid-cols-1']" class="w-full grid gap-4">
      <div v-for="(i,idx) in 6" class="w-full flex flex-col bg-white rounded-[8px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] p-4 gap-4">

        <div class="w-full flex flex-row justify-start items-center gap-4">
          <div class="flex flex-row justify-start items-center gap-2">
            <span class="text-base text-primary">#894120</span>
            <span class="text-gray-700 text-base">:SDPS</span>
          </div>
          <div class="flex flex-row justify-start items-center gap-2">
            <img src="/flags/fr.png" class="w-[30px] h-[20px]" alt="">
            <span class="text-gray-700 text-base">{{ $t('فرانسه') }}</span>
          </div>
        </div>

        <div :class="[isGrid ? 'flex-col xl:flex-col items-start xl:items-start' : 'flex-col xl:flex-row items-start xl:items-center']" class="w-full flex justify-between gap-4">
          <div class="flex flex-row justify-start items-center gap-2 flex-wrap">
            <span class="text-gray-600 text-base text-nowrap">{{ $t('دسته‌بندی‌های شاخص') }}:</span>
            <span class="flex flex-row justify-center items-center px-4 py-2 bg-[#F8F8F8] text-secondary text-sm rounded-lg">{{ $t('غذایی') }}</span>
            <span class="flex flex-row justify-center items-center px-4 py-2 bg-[#F8F8F8] text-secondary text-sm rounded-lg">{{ $t('کشاورزی') }}</span>
            <span class="flex flex-row justify-center items-center px-4 py-2 bg-[#F8F8F8] text-secondary text-sm rounded-lg">{{ $t('مبلمان') }}</span>
          </div>

          <button :class="{'!w-full':isGrid}" class="w-full xl:w-auto flex flex-row justify-center items-center rounded-lg py-2 px-6 text-secondary border border-secondary hover:bg-secondary hover:text-white">{{ $t('ارتباط با تامین‌کننده') }}</button>
        </div>
      </div>
    </section>
    <!--  List  -->

    <!--  Commercials  -->
    <section class="w-full h-[200px] bg-[#868686] rounded-[16px] flex flex-row justify-center items-center">
      <span class="text-2xl text-gray-800">{{ $t('جایگاه تبلیغ') }}</span>
    </section>
    <!--  Commercials  -->
  </main>
</template>

<script setup lang="ts">

const {locale, localeProperties, t: $t} = useI18n();
useHead({
  title:$t('تامین‌کنندگان')
})

// Variables
const breadcrumbs = ref<IBreadCrumb[]>([
  {
    title: "تامین‌کنندگان",
    link: "#",
  },
]);
const isGrid = ref(false);
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
</script>

<style scoped>

</style>