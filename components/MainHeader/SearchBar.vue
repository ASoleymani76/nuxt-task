<template>
  <div class="w-full bg-white rounded-full border border-gray-300 px-4 py-1 flex flex-row justify-between items-center gap-x-2">
    <NuxtLinkLocale to="/products" class="text-base text-gray-700">{{ $t('محصولات') }}</NuxtLinkLocale>
    <div class="w-1 h-4 border-l border-gray-300"></div>
    <input class="w-full text-gray-700 placeholder-300 text-sm" :placeholder="$t('هر چه به دنبال آن هستید را تایپ نمایید ...')" type="search">
    <div class="w-1 h-4 border-l border-gray-300"></div>
    <LazyIcon name="icon:search" size="20"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>