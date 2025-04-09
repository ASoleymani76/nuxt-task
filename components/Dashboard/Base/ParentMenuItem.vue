<script setup lang="ts">
interface ISimpleMenu {
  text: string;
  icon: string;
  hasBadge?: boolean;
  badgeContent?: string;
}
interface IParentMenu {
  text: string;
  icon: string;
  bgClass?: string;
  textClass?: string;
  isOpen?: boolean;
  iconColor?: string;
  childs?: ISimpleMenu[];
}

interface IProps {
  menuItem: IParentMenu;
}

const props = defineProps<IProps>();
</script>

<template>
  <UtilitiesDropDown v-model="props.menuItem.isOpen">
    <template #title>
      <div
        class="w-full flex items-center justify-between pr-6 pl-4 py-3"
        :class="[props.menuItem.bgClass]"
      >
        <div class="flex items-center gap-x-2">
          <Icon
            :name="props.menuItem.icon"
            class="w-5 h-5"
            :class="[props.menuItem.iconColor]"
            color="#ffffff"
            size="20"
          />
          <span class="text-sm" :class="[props.menuItem.textClass]">{{
            props.menuItem.text
          }}</span>
        </div>
        <button
          type="button"
          :class="props.menuItem.isOpen ? 'rotate-180' : ''"
        >
          <Icon
            name="icon:chevron-down-v1"
            size="9"
            :class="[props.menuItem.iconColor]"
          />
        </button>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-y-5">
        <DashboardBaseSimpleMenuItem
          class="first-of-type:mt-[10px] last-of-type:mb-[15px]"
          v-for="(child, index) in props.menuItem.childs"
          :key="index"
          :menu-item="child"
        ></DashboardBaseSimpleMenuItem>
      </div>
    </template>
  </UtilitiesDropDown>
</template>
