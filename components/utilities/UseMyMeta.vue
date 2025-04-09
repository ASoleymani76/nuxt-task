<template>

</template>

<script lang="ts" setup>
import type {PropType} from "vue";

let props = defineProps({
  pageData: {
    type: Object as PropType<object | any>
  }
})
let seoTitle = ref(null)
let seoDescription = ref(null)
let seoMeta = ref(null)
let computedSeoTitle = computed(() => {
  return seoTitle.value
})
let computedSeoDescription = computed(() => {
  return seoDescription.value
})
let computedSeoMeta = computed(() => {
  return seoTitle.value
})
if (process.client) {
  onMounted(() => {
    seoTitle.value = props.pageData.seoTitle
    seoDescription.value = props.pageData.seoDescription
    // seoTitle.value  = props.pageData.seoTitle
  })
  const route = useRoute()
  useHead({
    title: computedSeoTitle,
    link:[
      {
        rel:'canonical',
        href:`https://simagar.com${route.path}`
      }
    ],
    meta: [
      {
        name: "description",
        content: computedSeoDescription,
      },
    ]
  })
}
useServerSeoMeta({
  title: props.pageData.seoTitle,
  description: props.pageData.seoDescription,
})
</script>

<style scoped>

</style>
