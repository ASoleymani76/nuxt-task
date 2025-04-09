<template>
  <NuxtLayout class="">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const nuxtApp = useNuxtApp()

// Hooks
nuxtApp.hook("page:transition:finish", () => {
  nextTick(()=>{
    try {
      if (import.meta.client && document){
        const body = document.getElementsByTagName('body')[0];
        body.scroll(0,0)
      }
    }catch (e){
      console.error(e)
    }
  })
})
onMounted(()=>{
  useOverlay.close();
})

</script>
