<template>
  <main
      id="main"
      ref="el"
      class="w-full grid grid-cols-1 p-4 2xl:px-2/12 relative mx-auto bg-white dark:bg-mainDark gap-6 xl:gap-8"
  >
    <!--  Categories  -->
    <LazyPagesHomeCategories/>
    <!--  Categories  -->

    <!--  Suppliers and prices  -->
    <LazyPagesHomeSuppliersAndPrices/>
    <!--  Suppliers and prices  -->

    <!--  NewProducts  -->
    <LazyPagesHomeNewProducts/>
    <!--  NewProducts  -->

    <!--  Suggestions  -->
    <LazyPagesHomeSuggestions/>
    <!--  Suggestions  -->

    <!--  LastSuggestions  -->
    <LazyPagesHomeLastSuggestions/>
    <!--  LastSuggestions  -->

    <!--  PopularProducts  -->
    <LazyPagesHomePopularProducts/>
    <!--  PopularProducts  -->

    <!--  Partners  -->
    <LazyPagesHomePartners/>
    <!--  Partners  -->

    <!--  Magazine  -->
    <LazyPagesHomeMagazine/>
    <!--  Magazine  -->
  </main>
</template>

<script setup lang="ts">

const {locale, localeProperties, t: $t} = useI18n();
useHead({
  title:$t('صفحه اصلی')
})
</script>

<style scoped>

</style>
