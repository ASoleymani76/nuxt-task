<template>
  <div class="faq-container w-full">
    <section
        class="faq-header cursor-pointer grid grid-cols-6 items-center px-2 justify-between w-full rounded-lg"
        :class="[isOpen ? 'border-none rounded-b-none' : 'rounded-lg']"
        :style="`background-color:${bgColor}`"
        @click="toggleIsOpen"
    >
      <span class="text-lg z-10 col-span-5 flex flex-row justify-start items-center" :style="`color:${textColor}`">
        <slot name="title"></slot>
      </span>
      <div class="col-span-1 flex flex-row justify-end items-center z-10" :style="`color:${textColor}`">
        <div class="p-1 rounded-full bg-third w-6 h-6 flex flex-row justify-center items-center">
          <LazyIconsMinusIcon :class="{'!block':isOpen}" class="hidden w-full h-full [&_*]:fill-white [&_*]:stroke-white"/>
          <LazyIconsPlusIcon :class="{'!block':!isOpen}" class="hidden w-full h-full [&_*]:fill-white [&_*]:stroke-white"/>
        </div>
      </div>
    </section>
    <transition name="slide" mode="out-in">
      <section
          v-show="isOpen"
          :class="paddingX"
          class=" rounded-b-md main-section"
      >
        <div class="">
          <slot name="content"></slot>
        </div>
      </section>
    </transition>
  </div>
</template>
<script>
export default {
  props:{
    paddingX:{
      type:String,
      required:false,
      default:'px-6'
    },
    bgColor:{
      type:String,
      required:false,
      default:'#FFFFFF'
    },
    textColor:{
      type:String,
      required:false,
      default:'#FFFFFF'
    },
  },
  name:'Dropdown',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    arrowDirection() {
      if (this.isOpen) {
        return "arrowUp";
      }
    },
    headerBackgroundColor() {
      if (this.isOpen) {
        return "faq-header-active";
      }
    },
  },
};
</script>

<style scoped>
.arrow {
  transition: all 0.2s !important;
}
.arrowUp {
  transform: rotate(180deg) !important;
}
.faq-header {
  width: 100%;
  /*height: 100%;*/
  background-size: 100% 200%;
  /*background-image: linear-gradient(to bottom, #fff 50%, #31acff 50%);*/
  transition: all 0.3s;
}
.faq-header-active {
  background-position: 0 -100%;
  color: #fff;
  transition: all 0.3s;
}
.slide-enter-active {
  animation: slide-down 2s ease-out;
  overflow: hidden;
}
.slide-leave-active {
  animation: slide-up .6s ease-out;
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
  50% {
    display: block;
    max-height: 50px;
  }
  100% {
    display: hidden;
    max-height: 0px;
  }
}
</style>
