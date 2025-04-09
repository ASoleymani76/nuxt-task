<template>
  <div>
    <input ref="mediaHandler" class="hidden" type="file" @input="handleFile">
    <div v-if="mediaResult.pictureUrl ===''" class="w-24 h-24 bg-Gray rounded-lg shadow flex gap-3 items-center justify-end flex-col"
         @click="mediaHandler.click()">
      <DynamicIcon icon="tick"></DynamicIcon>
      <small class="mb-2 text-secondary">
        لوگوی
      </small>
    </div>
    <div v-else class="w-24 h-24 bg-Gray rounded-lg shadow flex gap-3 items-center justify-end flex-col"
         @click="mediaHandler.click()">
      <img :src="mediaResult.pictureUrl"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import DynamicIcon from "../components/main/DynamicIcon.vue";

const NuxtApp = useNuxtApp()
let mediaHandler = ref(null)
let mediaResult = ref({
  pictureUrl: '',
  base64: '',
  file: ''
})

async function handleFile() {
  if (mediaHandler?.value?.files && mediaHandler?.value?.files[0]) {
    mediaResult.value.file = mediaHandler.value.files[0]
    mediaResult.value.pictureUrl = URL.createObjectURL(mediaHandler.value.files[0])
    mediaResult.value.base64 = await NuxtApp.$makeBase64(mediaHandler.value.files[0])

  }
}
</script>

<style scoped>

</style>
