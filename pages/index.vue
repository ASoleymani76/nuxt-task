<template>
  <main
      id="main"
      ref="el"
      class="w-full grid grid-cols-1 relative mx-auto bg-white dark:bg-mainDark gap-6 xl:gap-8"
  >
    <!--  BannerSlider  -->
    <LazyPagesHomeBannerSlider/>
    <!--  BannerSlider  -->
  </main>
</template>

<script setup lang="ts">

useHead({
  title:'Main page'
})
</script>

<style scoped>

</style>
