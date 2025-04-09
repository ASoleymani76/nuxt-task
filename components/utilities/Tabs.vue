<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex items-center  justify-center">
      <div v-for="(tab,idx) in props.tabs" :key="idx" :class="{'active-tab':activeTab===idx}"
           class="border-b  w-1/2 p-3 flex items-center text-Gray justify-center"
           @click="activeTab = idx">
        {{ tab.label }}
      </div>
    </div>
    <template v-for="(tab,idx) in props.tabs">
    <div v-if="activeTab === idx"  class="w-full tab-height relative p-3">
      <slot :name="tab.key"></slot>
    </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";

const props = defineProps({
  tabs: {
    type: Array
  },
  firstActiveTab:{
    type:Number
  }
})
onMounted(()=>{
  if(props.firstActiveTab){
    activeTab.value = props.firstActiveTab
  }
})
let activeTab = ref(0)
</script>

<style scoped>
.tab-height{
  min-height: calc(100vh - 180px);
}
.active-tab {
  @apply border-secondary text-secondary font-semibold
}
</style>