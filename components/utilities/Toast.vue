<template>
  <transition name="slide-left">
    <div
      v-if="toastMessage.showToast && toastMessage.variant === 'success'"
      class="fixed top-10 bg-white border-l-4 border-green-500 left-10 shadow rounded-lg z-[9999] p-3"
    >
      <!--      <div class="flex items-center gap-2">-->
      <!--        <DynamicIcon :icon="`CheckIcon`" class="fill-green-500"></DynamicIcon>-->
      <!--        <span>Success</span>-->
      <!--      </div>-->
      <p class="text-gray-600 px-1">{{ toastMessage.content }}</p>
    </div>
  </transition>
  <transition name="slide-left">
    <div
      v-if="toastMessage.showToast && toastMessage.variant === 'error'"
      class="fixed top-10 border-l-4 bg-white border-red-500 left-10 shadow rounded-lg z-[9999] p-3"
    >
      <!--      <div class="flex items-center gap-2">-->
      <!--        <DynamicIcon :icon="`AlertIcon`" class="fill-red-500"></DynamicIcon>-->
      <!--        <span>Error</span>-->
      <!--      </div>-->
      <p class="text-gray-600 px-1">{{ toastMessage.content }}</p>
    </div>
  </transition>
  <transition name="slide-left">
    <div
      v-if="toastMessage.showToast && toastMessage.variant === 'info'"
      class="fixed top-10 bg-white border-l-4 left-10 shadow rounded-lg z-[9999] p-3"
    >
      <!--      <div class="flex items-center gap-2">-->
      <!--        <DynamicIcon :icon="`AlertIcon`" class="fill-red-500"></DynamicIcon>-->
      <!--        <span>Error</span>-->
      <!--      </div>-->
      <p class="text-white px-1 text-center">{{ toastMessage.content }}</p>
    </div>
  </transition>
</template>

<script setup>
import { useToastStore } from "@/stores/toast";

let toastStore = useToastStore();
let toastMessage = reactive({
  showToast: false,
  variant: "",
  content: "",
  timeout: null,
});
onMounted(() => {
  toastStore.$onAction((mutation) => {
    setToast(mutation);
  });
});

watch(toastMessage, async (val) => {
  if (val) {
    setTimeout(() => {
      toastMessage.showToast = false;
    }, 3000);
  }
});

function setToast(mutation) {
  toastMessage.variant = mutation.name;
  toastMessage.content = mutation.args[0];
  toastMessage.showToast = true;
}
</script>

<style scoped>
.slide-left-enter-active {
  animation: slideRightAnm 0.5s ease-in-out;
}

.slide-left-leave-active {
  animation: slideRightAnm reverse 0.5s ease-in-out;
}

@keyframes slideRightAnm {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
