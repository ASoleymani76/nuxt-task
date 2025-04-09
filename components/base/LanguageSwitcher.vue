<template>
  <div class="dropdown dropdown-bottom flex items-center">
    <label
      ref="dropDown"
      class="w-[5rem] flex justify-center border-none items-center border rounded-sm p-2 cursor-pointer gap-2"
      tabindex="0"
    >
      <img
        :src="localeProperties.flag"
        :alt="localeProperties.name"
        class="w-8"
      />
      <LazyIcon name="icon:chevron-down-v1" size="8" />
    </label>
    <ul
      ref="QtyModal"
      class="dropdown-content menu p-1 shadow bg-white mt-1 rounded-md w-24 z-[2]"
      tabindex="0"
      @click="closeDropDown"
    >
      <li v-for="locale in locales" class="">
        <NuxtLink
          :to="switchLocalePath(locale.code)"
          class="text-sm active:!bg-transparent cursor-pointer"
        >
          <img :src="locale.flag" :alt="locale.name" class="w-10" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// Variables
const { locale, locales, localeProperties } = useI18n();

// methods
function closeDropDown() {
  dropDown.value.focus();
  dropDown.value.blur();
}
</script>

<style scoped></style>
