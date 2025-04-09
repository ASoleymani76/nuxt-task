<script lang="ts" setup>
const isOpen = defineModel<boolean>();

function toggleIsOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="w-full cursor-pointer" @click="toggleIsOpen">
      <slot name="title"></slot>
    </div>
    <Transition mode="in-out" name="slide">
      <div v-show="isOpen" class="w-full transition duration-300">
        <slot name="content"></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-enter-active {
  animation: slide-down 2s ease-out forwards;
  overflow: hidden;
}

.slide-leave-active {
  animation: slide-up 0.3s ease-out forwards;
  overflow: hidden;
}

@keyframes slide-down {
  0% {
    display: hidden;
    max-height: 0px;
  }
  100% {
    display: block;
    max-height: 400px;
  }
}

@keyframes slide-up {
  0% {
    display: block;
    max-height: 100px;
  }
  100% {
    display: hidden;
    max-height: 0px;
  }
}
</style>
