<template>
  <div class="main bg-white dark:bg-mutedDark relative h-screen">
    <Toast></Toast>
    <loading-spinner></loading-spinner>
    <LazyMainHeader/>
    <div
        :class="[xlAndSmaller ? 'min-h-[92dvh] max-h-[92dvh]' : '']"
        class="w-full h-full grid grid-cols-1"
    >
      <div class="">
        <slot />
      </div>
      <LazyMainFooter></LazyMainFooter>
    </div>
    <NuxtPwaManifest />
  </div>
</template>

<script setup>
import Toast from "@/components/utilities/Toast.vue";
import LoadingSpinner from "../components/utilities/loadingSpinner.vue";

// Variables
const { locale, localeProperties } = useI18n();
const route = useRoute();
const xlAndSmaller = useUtils().xlAndSmaller;

// Computed
const direction = computed(() => {
  return localeProperties.value.dir;
});

useHead({
  bodyAttrs: {
    dir: direction,
  },
});

</script>

<style scoped>

</style>
