<template>
  <div class="overflow-x-auto col-span-12">

    <table class="w-full !overflow-x-scroll">
      <!-- head -->
      <thead class="bg-Gray-600 text-white h-[3.5rem] text-xs md:text-base">
      <tr>
        <th class="min-w-[5rem]" v-for="(item,idx) in props.fields" :key="idx">{{ item['label'] }}</th>
      </tr>
      </thead>
      <tbody class="text-xs md:text-base">
        <tr v-for="(row,idx) in props.items" :key="idx" :class="computedColors(+idx)">
          <td v-for="(td,idx) in props.fields" :key="idx">
            <slot :items="row" :name="td?.key">
              <span v-if="row[td?.key]">{{ row[td?.key] }}</span>
              <span v-else>-</span>
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup lang="ts">
// import helper from "@/plugins/helper";
import {computed} from "vue";
const props = defineProps({
  items: Object,
  fields: Object,
  emptyText: String
})

function  computedColors(idx:number){
  if(idx%2===0){
    return '!bg-white  dark:!bg-Gray-800'
  }else{
    return '!bg-Gray-100 dark:!bg-Gray-700'
  }
}



</script>
<style scoped>
table {
  vertical-align: center;
  text-align: center;
}
table td {
  line-height: 3rem!important;
}
table thead th {
  @apply dark:bg-dark-muted;
  @apply dark:text-white;
}

table tbody td {
  line-height: 3.5rem!important;
  vertical-align: center!important;
  horiz-align: center!important;

  @apply dark:text-white;
}

</style>
