<template>
  <div class="w-full h-screen flex flex-col items-center justify-start fixed inset-0 z-50 bg-black/75 px-4 2xl:px-[6rem] py-4">
    <div class="w-full flex flex-row justify-end items-center">
      <LazyIconsXIcon @click="closeModal" class="text-primary w-10 h-10"/>
    </div>

    <div class="w-full h-full flex flex-row justify-center items-center">
      <img src="/junks/home/home-ceremonies-junk.jpg" class="rounded-[16px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">

// Emit
const emits = defineEmits(['closeModal']);

// Functions
function closeModal(){
  emits('closeModal');
}
</script>

<style scoped>

</style>