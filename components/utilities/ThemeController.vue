<template>
  <div
      @click="toggle($event)"
      class="w-12 xl:w-9 cursor-pointer 2xl:w-12 h-12 xl:h-9 2xl:h-12 relative text-white">
<!--    <img-->
<!--      :class="imageClasses"-->
<!--      class="!cursor-pointer opacity-100 transition-all w-12 xl:w-9 2xl:w-12 h-12 xl:h-9 2xl:h-12 duration-500 ease-in-out transform absolute top-0 right-0"-->
<!--      :src="isDark ? '/junks/light.png' : '/junks/dark.png'"-->
<!--    />-->
  </div>
</template>

<script setup lang="ts">
const { toggle, isDark } = useDarkMode();


const imageClasses = computed(() => {
  return isDark.value ? "rotate-0" : "-rotate-180";
});
</script>
