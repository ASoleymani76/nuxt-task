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
import {useApi} from "~/composables/useApi";

useHead({
  title:'Main page'
})

// Methods
// async function makeSearch() {
//   try {
//     useOverlay.show();
//     const {data: response} = await useApi.search.setParams({
//       type: 'music',
//     })
//     console.log(response.value);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     useOverlay.close();
//   }
// }
// makeSearch();
</script>

<style scoped>

</style>
