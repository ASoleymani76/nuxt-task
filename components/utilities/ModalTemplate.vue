<template>
  <div class="w-full h-screen flex items-center justify-center fixed inset-0 z-10">
    <div @click="hideModal" class="w-full h-full backdrop-blur-xl bg-gray-800/50 absolute inset-0"></div>
    <div class="rounded-xl bg-white dark:bg-mutedDark mx-1/24 opacity-100 absolute" :class="width">
      <p v-if="props.title" class="py-3 px-3 border-b text-center font-semibold dark:text-white text-gray-700 text-base">{{props.title}}</p>
      <slot></slot>
      <div v-if="hasFooter" class="py-1  flex items-center justify-center border-t">
        <button v-if="props.okBtnText" @click="submitModal" class="w-1/2 px-3 py-2 text-sm lg:text-lg text-primary font-bold border-l" :class='props.warning === true ? "text-red-600 font-bold" : "text=gray-900" '>
          {{ props.okBtnText }}
        </button>
        <span class="h-10 my-1 relative mx-1"></span>
        <button @click="hideModal" class="w-1/2 px-3 py-2 text-sm lg:text-lg text-gray-700 dark:text-gray-300 font-medium">{{props.cancelBtnText ? props.cancelBtnText : 'بستن'}}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//Variables
let showModal = ref<Boolean>(false);

// Props
const props = defineProps({
  width:{
    type:String,
    default:'md:w-6/12'
  },
  title: {
    type:String,
    default:''
  } ,
  okBtnText: {
    type:String,
    default:null
  } ,
  cancelBtnText: {
    type:String,
    default:null
  } ,
  warning: {
    type:Boolean,
    default:false
  },
  hasFooter: {
    type:Boolean,
    default:true
  },
  fixedBody:{
    type:Boolean,
    default:true
  }
})

// Hooks
onMounted(()=>{
  if (props.fixedBody){
    const body:any = document.querySelector('body');
    body.classList.add('fixed-body');
  }
});

// Emits
const emits = defineEmits(['onHide','onSubmit'])

// Methods
function submitModal() {
  const body:any = document.querySelector('body');
  body.classList.remove('fixed-body');
  emits('onSubmit');
}

function hideModal() {
  const body:any = document.querySelector('body');
  body.classList.remove('fixed-body');
  emits('onHide');
}
</script>

