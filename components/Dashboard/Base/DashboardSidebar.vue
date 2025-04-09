<script setup lang="ts">
interface IMenuItem {
  text: string;
  icon: string;
  isParent?: boolean;
  bgClass?: string;
  textClass?: string;
  isOpen?: boolean;
  iconColor?: string;
  hasBadge?: boolean;
  badgeContent?: string;
  childs?: IMenuItem[];
}

const menuItems = ref<IMenuItem[]>([
  {
    text: "جزئیات حساب کاربری",
    icon: "icon:book",
  },

  {
    text: "تبلیغات",
    icon: "icon:commercials",
  },

  {
    text: "ارتقاء و تعرفه عضویت",
    icon: "icon:raise-icon",
  },

  {
    text: "راهنما و آموزش",
    icon: "icon:question-circle",
  },

  {
    text: "پنل خدمات",
    icon: "icon:shop-v1",
    isParent: true,
    bgClass: "bg-[#0E4C75]",
    textClass: "text-white",
    isOpen: true,
    iconColor: "text-white",
    childs: [
      {
        text: "کیف پول",
        icon: "icon:wallet",
      },

      {
        text: "پیام‌ها",
        icon: "icon:commercials",
        hasBadge: true,
        badgeContent: "2",
      },

      {
        text: "درخواست جدید",
        icon: "icon:commercials",
      },

      {
        text: "گردش حساب",
        icon: "icon:credit-card",
      },

      {
        text: "آمار",
        icon: "icon:increase-up",
      },

      {
        text: "ویرایش اطلاعات",
        icon: "icon:edit-v1",
      },
    ],
  },

  {
    text: "پنل تولیدکننده",
    icon: "icon:shop-v1",
    isParent: true,
    bgClass: "bg-[#0B420D]",
    textClass: "text-[#DFBD69]",
    iconColor: "text-[#DFBD69]",
    isOpen: true,
    childs: [
      {
        text: "کیف پول",
        icon: "icon:wallet",
      },

      {
        text: "داشبورد",
        icon: "icon:user",
      },

      {
        text: "مدیریت فروشگاه",
        icon: "icon:commercials",
      },

      {
        text: "پیام‌ها",
        icon: "icon:phone-hand",
      },

      {
        text: "پیام‌های خریداران",
        icon: "icon:message-square",
        hasBadge: true,
        badgeContent: "5",
      },

      {
        text: "سفارشات من",
        icon: "icon:cart",
      },

      {
        text: "گردش حساب",
        icon: "icon:credit-card",
      },

      {
        text: "آمار",
        icon: "icon:increase-up",
      },

      {
        text: "تیکت‌",
        icon: "icon:ticket",
      },

      {
        text: "محصولات محبوب",
        icon: "icon:heart",
      },

      {
        text: "ویرایش اطلاعات",
        icon: "icon:edit-v1",
      },
    ],
  },

  {
    text: "پنل بازرگان",
    icon: "icon:dollar-box",
    isParent: true,
    bgClass: "bg-[#DFBD69]",
    textClass: "text-[#0B420D]",
    iconColor: "text-[#0B420D]",
    isOpen: true,
    childs: [
      {
        text: "کیف پول",
        icon: "icon:wallet",
      },

      {
        text: "داشبورد",
        icon: "icon:user",
      },

      {
        text: "درخواست قیمت (RFQ)",
        icon: "icon:rfq",
      },

      {
        text: "پیام‌ها",
        icon: "icon:phone-hand",
      },

      {
        text: "پیام‌ها به تامین‌کنندگان",
        icon: "icon:message-square",
        hasBadge: true,
        badgeContent: "3",
      },

      {
        text: "سفارشات من",
        icon: "icon:cart",
      },

      {
        text: "گردش حساب",
        icon: "icon:credit-card",
      },

      {
        text: "آمار",
        icon: "icon:increase-up",
      },

      {
        text: "تیکت‌",
        icon: "icon:ticket",
      },

      {
        text: "محصولات محبوب",
        icon: "icon:heart",
      },

      {
        text: "ویرایش اطلاعات",
        icon: "icon:edit-v1",
      },
    ],
  },
]);
</script>

<template>
  <div
    class="w-full h-full bg-white custom-sidebar-box-shadow border border-[#E4E7E9] pt-2 rounded-[4px] flex flex-col"
  >
    <!-- User Avatar Start -->
    <div class="w-full flex items-center justify-between px-3">
      <div class="flex items-center gap-x-3">
        <img
          src="/junks/avatar.png"
          class="w-9 h-9 rounded-full object-contain"
        />
        <p class="text-sm text-[#363636] font-bold">علی یارمحمدی</p>
      </div>
      <div class="flex items-center justify-end gap-x-2 text-[#5F6C72]">
        <button type="button" class="flex items-center">
          <Icon name="icon:settings" size="21" />
        </button>
        <button type="button" class="flex items-center">
          <Icon name="icon:logout" size="18" />
        </button>
      </div>
    </div>
    <!-- User Avatar End -->

    <!-- Subscribtion Box Start -->
    <div class="w-full px-3">
      <div
        class="w-full flex items-center justify-between gap-x-4 p-2 mt-4 rounded-lg custom-subscribtion-box-shadow"
      >
        <div class="flex items-center gap-x-1">
          <Icon name="icon:coin-v1" />
          <p class="text-xs text-[#5F6C72] whitespace-nowrap">
            <span class="font-bold"> 20 روز </span>
            تا پایان اشتراک
          </p>
        </div>

        <button
          type="button"
          class="text-[#DFBD69] text-xs font-bold whitespace-nowrap bg-[#0B420D] px-2 py-1 rounded-lg"
        >
          تمدید اشتراک
        </button>
      </div>
    </div>
    <!-- Subscribtion Box End -->

    <!-- Menu Items Start -->
    <div class="w-full mt-6 flex flex-col gap-y-5">
      <div class="w-full" v-for="(menu, index) in menuItems" :key="index">
        <DashboardBaseSimpleMenuItem
          v-if="!menu.isParent"
          :menu-item="menu"
        ></DashboardBaseSimpleMenuItem>
        <div v-else>
          <DashboardBaseParentMenuItem
            :menu-item="menu"
          ></DashboardBaseParentMenuItem>
        </div>
      </div>
    </div>
    <!-- Menu Items End -->
  </div>
</template>

<style scoped>
.custom-sidebar-box-shadow {
  box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.08);
}
.custom-subscribtion-box-shadow {
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
