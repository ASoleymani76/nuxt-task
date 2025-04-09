<template>
  <div class="fixed" style="z-index: 100">
    <div
      class="w-full h-screen flex items-start justify-center fixed inset-0 z-10"
    >
      <div
        class="w-full h-full backdropBlur bg-black/90 absolute inset-0 flex flex-col items-center justify-center"
      />
      <div class="w-full absolute flex flex-col items-center">
        <div class="w-full h-[4rem] lg:h-[10rem] flex flex-row justify-start items-start text-white px-4">
          <LazyIcon name="icon:task-close-square" size="50" class="text-gray-300 cursor-pointer" @click="hideModal"/>
        </div>
        <div class="w-full lg:w-1/2 rounded-sm mx-1/24 opacity-100 h-screen lg:h-min px-4">

          <!--  Search Input  -->
          <div class="w-full flex flex-row justify-between items-center relative p-2 bg-white rounded-xl">
            <input
                v-model="debouncedSearchQuery"
                class="w-full bg-transparent text-sm text-gray-700 p-4"
                placeholder="جستجو کنید ..."
                type="text"
            />
            <button @click="addSuggestion" class="flex flex-row justify-center items-center gap-x-2 bg-[#FF8F00] rounded-xl h-full p-2">
              <span class="text-white text-sm">جستجو</span>
              <LazyIcon name="icon:task-search-normal-2" size="30"/>
            </button>
          </div>
          <!--  Search Input  -->

          <!--   Search results   -->
          <div class="w-full gird grid-cols-1 max-h-[100dvh] lg:max-h-[40dvh] overflow-y-auto">
            <div>
              <template v-if="suggests.length > 0">
                <div v-for="(suggest,idx) in suggests" class="w-full p-4 flex flex-row justify-start items-center gap-x-2">
                  <LazyIcon @click="removeSuggest(suggest)" name="icon:task-close-square" size="30" class="text-gray-300 cursor-pointer"/>
                  <span @click="debouncedSearchQuery = suggest" class="text-white text-base cursor-pointer">{{ suggest }}</span>
                </div>
              </template>
              <LazyUtilitiesEmptyView v-else-if="search !== ''" class="my-4" />
            </div>
          </div>
          <!--   Search results   -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "~/composables/useApi";
import {useAuthStore} from "~/stores/auth.store";

// Variables
const search = ref("");
const timeout = ref(null);
const authStore = useAuthStore();
const suggests = ref([]);

// Computed
const debouncedSearchQuery = computed({
  get() {
    return search.value;
  },
  set(val) {
    if (val !== ''){
      if (timeout.value) {
        clearTimeout(timeout.value);
      }
      timeout.value = setTimeout(() => {
        search.value = val;
        makeSearch();
      }, 600);
    }else {
      return authStore.getSuggestions;
    }
  },
});

// Hooks
onMounted(async () => {
  suggests.value = authStore.getSuggestions;
})

// Emits
const emits = defineEmits(["hideSearchBarModal"]);

// Methods
async function makeSearch() {
  try {
    useOverlay.show();
    const { data: response } = await useAsyncData(async () => {
      return await useApi.search.setParams({
        type: search.value,
      });
    });
    suggests.value = response.value.suggest;
  } catch (e) {
    console.log(e.status);
  } finally {
    useOverlay.close();
  }
}

function addSuggestion() {
  if (search.value !== "") {
    authStore.addToSuggestions(search.value);
  }
}

function removeSuggest(data){
  authStore.removeFromSuggestions(data);
}

function hideModal() {
  emits("hideSearchBarModal");
}
</script>

<style scoped></style>
