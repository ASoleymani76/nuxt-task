<script setup lang="ts">
interface ISimpleMenu {
  text: string;
  icon: string;
  hasBadge?: boolean;
  badgeContent?: string;
}

interface IProps {
  menuItem: ISimpleMenu;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="w-full flex items-center justify-between pr-6 pl-4">
    <div class="flex items-center gap-x-2 text-[#5F6C72] cursor-pointer">
      <Icon :name="props.menuItem.icon" size="20" class="w-5 h-5" />
      <span class="text-sm">{{ props.menuItem.text }}</span>
    </div>
    <div
      v-if="props.menuItem.hasBadge"
      class="w-6 h-6 rounded-full bg-[#DF2626] text-center text-sm text-white flex items-center justify-center"
    >
      {{ props.menuItem.badgeContent }}
    </div>
  </div>
</template>
