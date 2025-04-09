<template>
  <Swiper
      v-bind="sliderOptions"
  >
    <SwiperSlide v-for=" (item,idx) in props.items" :key="idx">
      <slot :slideContent="item" name="slide"></slot>
    </SwiperSlide>

  </Swiper>
</template>

<script lang="ts" setup>
const props = defineProps({
  items: {
    type: Array
  },
  sliderOptions: {
    type: Object,
    required: true
  }
})


</script>

<style scoped>

</style>