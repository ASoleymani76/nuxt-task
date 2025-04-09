<template>
  <div>
    <span class="font-semibold ">{{ label }} </span>
    <div :class="{'mt-2':label}" class="relative rounded-lg  bg-Gray ">
      <div :class="{'!border-red-500':error}" class="rounded-lg flex items-center border border-transparent  ">
        <input
            :class="[customCss]"
            :maxlength="maxLength"
            :placeholder="placeHolder"
            :type="dataType"
            :value="modelValue"
            :vname="vname"
            class="w-full rounded-lg bg-Gray placeholder:text-right  leading-10 ring-0 text-[14px] pr-2 placeholder:text-[14px] outline-0 px-2"
            dir="auto"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <DynamicIcon v-if="iconName" class="ml-2" :icon="iconName"></DynamicIcon>
      </div>
    </div>
    <small v-if="error" class="text-red-500">{{ validationMessage }}</small>
  </div>
</template>


<script setup>


import DynamicIcon from "../components/main/DynamicIcon.vue";

let props = defineProps({
  modelValue:{},
  dataType: {
    type: String,
    default: 'text'
  },
  maxLength: {
    type: String
  },
  error: {
    type: Boolean,
    default: false
  },
  vname:{
    type:String,
    required:true
  },
  placeHolder: {
    type: String,
  },
  iconName: {
    type: String,
  },
  label: {
    type: String
  },
  customCss: {
    type: String
  },
  validationMessage: {
    type: String
  }
})
const emits = defineEmits(['update:modelValue'])


</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>
