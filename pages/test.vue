<template>
test
</template>

<script setup lang="ts">
import {useApi} from "~/composables/useApi";

async function getProduct() {
  try {
    useOverlay.show();
    const {data: response} = await useApi.getProductBySeoUrl.setParams({
      SeoUrl: 'jxshbaxb',
      languageId: 1
    },false)
    if (response.value) {
      console.log(response.value,'response.value')
    }
  } catch (e) {
    console.error(e)
  } finally {
    useOverlay.close();
  }
}
getProduct()
</script>

<style scoped>

</style>