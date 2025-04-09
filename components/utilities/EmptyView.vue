<template>
  <div class="w-full flex flex-col justify-center items-center mx-auto">
    <SadFaceIcon class="w-20 h-20 dark:fill -white fill-gray-600"></SadFaceIcon>
    <span class="text-gray-600 dark:text-white font-extrabold text-xl">{{
      props.emptyText
    }}</span>
  </div>
</template>

<script setup>
import SadFaceIcon from "@/components/icons/SadFaceIcon.vue";

const props = defineProps({
  emptyText: {
    type: String,
    default: "موردی یافت نشد",
  },
});
</script>

<style scoped></style>
