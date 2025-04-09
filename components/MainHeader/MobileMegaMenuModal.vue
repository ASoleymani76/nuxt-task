<template>
  <!-- Put this part before </body> tag -->
  <aside class="modal modal-open w-full h-screen max-h-screen z-50">
    <div class="modal-box !w-full !max-w-full h-screen max-h-screen rounded-none flex flex-col justify-start items-start bg-white">
      <div class="w-full flex flex-row justify-between items-center mb-5">
        <strong
            class="col-span-2 flex flex-row justify-end items-center text-gray-600"
        >
          منو
        </strong>
        <div class="flex flex-row justify-center items-center">
          <label class="" for="showMobileSearch" @click="hideModal">
            <LazyIcon name="icon:task-close-square" size="36" class="text-gray-700"></LazyIcon>
          </label>
        </div>
      </div>

      <div class="w-full flex flex-col justify-start items-start h-full">
        <div
            v-for="(p, idx) in data"
            :class="[idx === data.length - 1 ? '' : 'border-b']"
            class="w-full flex flex-col justify-start items-center py-3 border-gray-200 dark:border-gray-600"
        >
          <NuxtLink
              :title="p.title"
              :to="p.link"
              class="text-base text-gray-600 dark:text-white font-semibold ShortDescriptionIndex1 text-center"
              exact-active-class="!text-primary"
              @click="hideModal"
          >
            {{ p.title }}
          </NuxtLink>
<!--          <NuxtLink-->
<!--              v-for="c in p.children"-->
<!--              :title="c.title"-->
<!--              :to="c.link"-->
<!--              class="text-sm text-gray-500 dark:text-gray-300 my-1 ShortDescriptionIndex1 text-center"-->
<!--              exact-active-class="!text-primary dark:!text-secondary"-->
<!--          >- {{ c.title }}-->
<!--          </NuxtLink>-->
        </div>

      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
// Variables
const isOpen = ref(false);
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const emits = defineEmits(["hideSearchModal"]);

function hideModal() {
  const body: any = document.querySelector("body");
  body.classList.remove("fixed-body");
  emits("hideSearchModal");
}
</script>

<style scoped></style>
