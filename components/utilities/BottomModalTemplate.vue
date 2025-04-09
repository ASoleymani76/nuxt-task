<template>
  <dialog ref="modal" id="modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-white">
      <div class="w-full flex flex-row justify-between items-center">
        <strong  v-if="props.title" class="text-gray-700 text-base">{{props.title}}</strong>
        <span @click="closeModal" class="text-gray-700 text-xl font-bold cursor-pointer">
          <i class="ri-close-line"></i>
        </span>
      </div>
      <slot></slot>
    </div>
    <form method="dialog" class="modal-backdrop bg-gray-400/25 backdropBlur">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
//Variables
const modal = ref<any>(null)

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
  // if (props.fixedBody){
  //   const body:any = document.querySelector('body');
  //   body.classList.add('fixed-body');
  // }
});

// Emits
const emits = defineEmits(['onHide','onSubmit'])

// Expose
defineExpose({
  showModal,
  closeModal
})

// Methods
function showModal(){
  modal.value.showModal();
}
function submitModal() {
  const body:any = document.querySelector('body');
  body.classList.remove('fixed-body');
  emits('onSubmit');
}

function closeModal(){
  modal.value.close();
  emits('onHide');
}

function hideModal() {
  const body:any = document.querySelector('body');
  body.classList.remove('fixed-body');
  emits('onHide');
}
</script>

