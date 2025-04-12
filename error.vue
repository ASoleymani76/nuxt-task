<template>
  <main class="main bg-stone-100 dark:bg-mainDark relative">
    <div
        :class="[xlAndSmaller ? 'min-h-[92dvh] max-h-[92dvh]' : '']"
        class="w-full h-full grid grid-cols-1"
    >
      <LazyMainHeader/>
      <div
          class="min-h-[80dvh] flex flex-col items-center justify-around xl:gap-10 gap-1 pt-[4.5rem] xl:pt-[10rem] pb-4"
      >
        <div class="w-full flex flex-row justify-center items-center">
          <h1
              class="text-primary dark:text-secondary text-base xl:text-xl 2xl:text-2xl font-bold"
          >
            {{ props.error.statusCode }}
            {{
              props.error.statusCode === 410 ? 'به نظر میاد صفحه ای که دنبالشی دیگه وجود نداره! بیا برگردیم به دنیای خودمون' : 'اینجا چیزی پیدا نمیشه! بیا برگردیم به دنیای خودمون'
            }}
          </h1>
        </div>

        <div class="w-full grid grid-cols-12 xl:mt-10">
          <div
              class="hidden col-span-3 xl:flex flex-row justify-center items-center"
          >
<!--            <img src="/junks/wire.webp" alt=""/>-->
          </div>
          <div
              v-if="props.error.statusCode===410"
              class="col-span-12 xl:col-span-6 xl:gap-8 flex flex-row justify-center items-center"
          >
<!--            <img-->
<!--                src="/junks/animation.gif"-->
<!--                class="w-[6rem] h-[6rem] xl:w-auto xl:h-[14rem] ml-6"-->
<!--                alt=""-->
<!--            />-->
<!--            <img-->
<!--                src="/junks/1-light.webp"-->
<!--                class="dark:hidden  w-[5.57rem] xl:w-auto"-->
<!--                alt=""-->
<!--            />-->
<!--            <img-->
<!--                src="/junks/1.webp"-->
<!--                class="hidden dark:block  w-[5.57rem] xl:w-auto"-->
<!--                alt=""-->
<!--            />-->
<!--            <img-->
<!--                src="/junks/four-blue.webp"-->
<!--                class="dark:hidden w-[8rem] xl:w-auto"-->
<!--                alt=""-->
<!--            />-->
<!--            <img-->
<!--                src="/junks/four.webp"-->
<!--                class="hidden dark:block w-[8rem] xl:w-auto"-->
<!--                alt=""-->
<!--            />-->


          </div>

          <div
              v-else
              class="col-span-12 xl:col-span-6 flex flex-row justify-center items-center"
          >
<!--            <img-->
<!--                src="/junks/four-blue.webp"-->
<!--                class="dark:hidden w-[8rem] xl:w-auto"-->
<!--                alt=""-->
<!--            />-->
<!--            <img-->
<!--                src="/junks/four.webp"-->
<!--                class="hidden dark:block w-[8rem] xl:w-auto"-->
<!--                alt=""-->
<!--            />-->
<!--            <img-->
<!--                src="/junks/animation.gif"-->
<!--                class="w-[6rem] h-[6rem] xl:w-auto xl:h-[10rem] ml-6"-->
<!--                alt=""-->
<!--            />-->
<!--            <img-->
<!--                src="/junks/four-blue.webp"-->
<!--                class="dark:hidden w-[8rem] xl:w-auto"-->
<!--                alt=""-->
<!--            />-->
<!--            <img-->
<!--                src="/junks/four.webp"-->
<!--                class="hidden dark:block w-[8rem] xl:w-auto"-->
<!--                alt=""-->
<!--            />-->
          </div>

          <div
              class="col-span-3 hidden xl:flex flex-row justify-center items-center"
          >
<!--            <img src="/junks/plug.webp" alt=""/>-->
          </div>
        </div>

      </div>
      <LazyMainFooter></LazyMainFooter>
    </div>

  </main>
</template>

<script setup lang="ts">
import type {NuxtError} from "#app";

definePageMeta({
  // layout:'login'
});
const props = defineProps({
  error: Object as () => NuxtError
})
useHead({
  bodyAttrs: {
    dir: "rtl",
  },
});

// Variables
const xlAndSmaller = useUtils().xlAndSmaller;
const mobileRotated = ref(false);

// Hooks
onMounted(() => {
  let innerHeight = window.innerHeight ? window.innerHeight : null;
  let innerWidth = window.innerWidth ? window.innerWidth : null;
  if (window) {
    if (innerWidth < 940 && innerHeight < 450) {
      mobileRotated.value = true;
    }
  }
});
// SEO
useHead({
  title: props.error?.statusCode === 410 ? '410 صفحه در دسترس نیست' : props.error?.statusCode === 404 ?  '404 صفحه یافت نشد' : '',
});

</script>

<style scoped>

</style>
