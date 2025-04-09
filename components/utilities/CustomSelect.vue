<template>
  <div :class="customClasses"
       class="w-full relative" dir="rtl">
    <div v-if="isDropdownOpen" class="fixed w-full h-full !font-medium top-0 right-0 bg-transparent z-[1]"
         @click="isDropdownOpen = false"></div>
    <div :class="inputClass"
        class="bg-semiDark !z-[2] !font-medium relative px-2 p-3 border border-gray-600 cursor-text flex flex-wrap justify-between rounded-lg text-gray-600 text-sm"
        @click="handleDropdown">

      <small v-if="prepend && !isDropdownOpen" class="border-r pr-2 font-bold text-gray-600 bg-white">{{ prepend }}</small>

      <slot v-if="selectedItem && !isDropdownOpen &&!multiple" :data="selectedItem" class="px-4 w-full text-gray-600 !font-medium"
            name="selected-option">
        {{ selectedItem ? selectedItem[label] : 'انتخاب کنید' }}
      </slot>
      <template v-if="selectedItems.length>0 && !isDropdownOpen && multiple">
        <slot v-for="(item,idx) in selectedItems" :data="item"
              name="selected-option">
          <div class="text-gray-600 !rounded-xl bg-textDark mb-1 !font-medium flex items-center gap-1">
            <small class="line-clamp-1  p-2 ">
              {{ item[label] }}
            </small>
            <div @click.stop="removeItem(idx)">
              <LazyMainDynamicIcon class="!w-6 !h-6 cursor-pointer fill-red-500"
                                   icon="Close"></LazyMainDynamicIcon>
            </div>
          </div>
        </slot>
      </template>
      <small v-else-if="selectedItems.length===0 && !isDropdownOpen && multiple" class="text-[#475c75] font-bold">
        انتخاب کنید</small>
      <input v-if="showSearch && isDropdownOpen" ref="searchInput"
             v-model="debouncedSearchQuery" :placeholder="selectedItem ? '' :`انتخاب کنید`"
             class=" w-11/12 bg-semiDark font-medium text-gray-600 bg-white" type="text">
      <div class="icons flex items-center gap-1" @click="handleDropdown">
        <svg v-if="(selectedItem &&!isDropdownOpen )&& clearable" class="w-5 h-5 cursor-pointer fill-gray-600"
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" @click.stop="removeItem">
          <path
              d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
        </svg>

        <svg :class="{'transform rotate-180':isDropdownOpen}" class="w-5 h-5 transition-all delay-100 fill-gray-600"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
        </svg>
      </div>
    </div>
    <transition name="slide-down">
      <div v-if="isDropdownOpen"
           :class="{'max-h-[15rem]':filteredOptions.length>0}"
           class=" bg-white rounded absolute flex flex-col scrollbar text-sm scrollbar-thumb-lightDark scrollbar-thumb-rounded-xl scrollbar-thin scrollbar-track-semiDark overflow-y-auto  -bottom-22 z-[3] right-0 w-full shadow">
        <template v-if="filteredOptions.length>0">
          <div v-for="(item,idx) in filteredOptions"
               class="hover:bg-primary cursor-pointer !font-medium transition-all hover:text-white p-3 text-gray-600"
               @click="setItem(item)">
            <slot :data="item" name="option">{{ item[label] }}</slot>
          </div>
        </template>
        <div v-else class="w-full p-5 flex items-center justify-center">
          <span class="text-gray-400">
          موردی یافت نشد!
          </span>
        </div>

      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
let modelValue = defineModel()
let searchInput = ref(null)
const props = defineProps({
  inputClass: {
    type: String,
    required: false,
  },
  prepend: {
    type: String,
    required: false,
  },
  extract: {
    type: String,
    default: '',
    required: false,
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  options: {
    type: Array,
    default: [],
    required: true,
  },
  label: {
    type: String,
    default: '',
    required: true,
  },
  customClasses: {
    type: String,
    default: '',
    required: false,
  },
  toggleAble: {
    type: Boolean,
    required: false,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true
  },
  default: {},
  multiple: {
    type: Boolean,
    default: false
  }
})
onMounted(() => {
  if (props.default) {
    if (typeof props.default !== 'object') {
      let idx = props.options?.findIndex(e=> e[props.extract] ===props.default)
      if(idx>-1){
        selectedItem.value = props.options[idx]
      }
    } else {
      selectedItem.value = props.default
    }
  }
})
const emits = defineEmits<{
  (e: 'searched', searchQuery: string): void,

}>()
let isDropdownOpen = ref<Boolean>(false)
let searchQuery = ref<string>('')
let selectedItem = ref<any>(null)
let selectedItems = ref<[]>([])
let timeout = ref<any>(null)
let filteredOptions = computed(() => {
  return props.options.filter((el: any) => {
    return el[props.label?.toLowerCase()].includes(searchQuery.value?.toLowerCase())
  })
})

let debouncedSearchQuery = computed({
  get() {
    return searchQuery.value
  },
  set(val) {
    if (timeout.value) {
      clearTimeout(timeout.value)
    }
    timeout.value = setTimeout(() => {
      searchQuery.value = val
      emits('searched', searchQuery.value)
    }, 600)

  }
})

function setItem(item: any) {
  searchQuery.value = ''
  if (props.multiple) {
    let idx = selectedItems.value.findIndex(e => e[props.extract] === item[props.extract])
    if (idx > -1) {

    } else {
      selectedItems.value.push(item)
      modelValue.value = props.extract ? getArrayItems() : selectedItems.value
    }
  } else {
    selectedItem.value = item
    modelValue.value = props.extract ? selectedItem.value[props.extract] : selectedItem.value
  }
  isDropdownOpen.value = false
}

function getArrayItems(): [] {
  let result: [] = []
  selectedItems.value.forEach((item) => {
    result.push(item[props.extract])
  })
  return result
}

function handleDropdown() {
  if (props.toggleAble) {
    isDropdownOpen.value = !isDropdownOpen.value
    setTimeout(() => {
      searchInput.value.focus()
    }, 200)
  } else {
    setTimeout(() => {
      searchInput.value.focus()
    }, 200)
    isDropdownOpen.value = true
  }
}

function removeItem(idx?: number) {
  searchQuery.value = ''
  if (idx !== null || idx !== undefined) {
    selectedItems.value.splice(idx, 1)
    modelValue.value = getArrayItems()
  } else {
    selectedItem.value = null
    modelValue.value = ''
  }
}
</script>

<style scoped>
.slide-down-enter-active {
  animation: slideDownAnm 0.2s ease-in-out;
}

.slide-down-leave-active {
  animation: slideDownAnm reverse 0.2s ease-in-out;
}

@keyframes slideDownAnm {
  0% {
    opacity: 0;
    /*transform: translatey(-100%);*/
  }
  100% {
    opacity: 1;
    /*transform: translateX(0);*/
  }
}

</style>
