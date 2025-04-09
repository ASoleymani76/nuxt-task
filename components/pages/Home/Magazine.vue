<template>
 <section class="flex flex-col xl:flex-row justify-between items-center p-4 bg-secondary rounded-md gap-4">
   <div class="flex flex-row gap-4">
     <LazyIcon name="icon:magazine" size="30"/>
     <h5 class="text-white text-xl font-bold">{{ $t('عضویت در خبرنامه') }}</h5>
   </div>
   <div class="flex flex-row gap-4">
     <input class="bg-white rounded-md p-2 text-gray-600 text-sm" :placeholder="$t('ایمیل')" type="text">
     <button class="bg-white text-secondary flex flex-row justify-center items-center py-2 px-6 rounded-md">{{ $t('عضویت') }}</button>
   </div>
 </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>