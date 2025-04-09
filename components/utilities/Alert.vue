<template>
  <transition name="fade">
    <div v-if="showAlert" class="fixed  z-[9999] w-full h-full bg-black/20 flex items-center justify-center"
         @click="showAlert = false">
      <div class="w-2/3 mx-auto bg-white rounded-lg flex flex-col gap-4 items-center justify-center p-3">
        <span>{{ alertOptions.title }}</span>
        <DynamicIcon :icon="alertOptions.icon ?alertOptions.icon : 'tick' " class="!w-[65px] !h-[65px]"></DynamicIcon>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import DynamicIcon from "../components/main/DynamicIcon.vue";
import type {Store, StoreActions} from "pinia";
import {useAlertStore} from "../../stores/alert";
import type {IAlert} from "../../models/IAlert";

const alertStore: Store = useAlertStore()

onMounted(() => {
  alertStore.$onAction((mutation: StoreActions<any>) => {
    openAlert(mutation)
  })
})
let showAlert = ref<boolean>(false)
let alertOptions = ref<IAlert | null>(null)

function openAlert(mutation: StoreActions<any>): void {
  showAlert.value = true
  alertOptions.value = mutation.args[0]
}
</script>

<style scoped>

</style>