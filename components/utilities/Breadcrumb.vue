<script setup lang="ts">
interface IProps {
  breadcrumbs: IBreadCrumb[];
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="w-full">
    <div class="breadcrumbs text-sm">
      <ul class="text-sm text-[#A9AEB8]">
        <li>
          <NuxtLinkLocale to="/">
            <Icon name="icon:home-v1" />
          </NuxtLinkLocale>
        </li>
        <li v-for="(breadcrumb, index) in props.breadcrumbs" :key="index">
          <NuxtLink :to="breadcrumb.link || ''">
            {{ $t(breadcrumb.title) }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.breadcrumbs > ul :not(:last-child)::after {
  content: "/";
  margin: 0 4px;
}
.breadcrumbs > ul > li + *:before,
.breadcrumbs > ol > li + *:before {
  border: none;
  display: none;
}
</style>
