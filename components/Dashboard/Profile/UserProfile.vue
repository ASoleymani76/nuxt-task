<template>
  <div
    class="bg-white w-70 border border-[#E0E4E8] rounded-2xl p-4 flex flex-col items-center justify-center"
  >
    <h3 class="text-[#1A1A1A] text-lg font-bold text-center mb-6">
      پروفایل من
    </h3>
    <div class="w-24 h-24 relative mb-3">
      <div
        class="relative w-full h-full overflow-hidden border border-[#E0E4E8] rounded-full"
      >
        <Icon
          name="icon:user-fat"
          class="w-full h-full absolute -bottom-1 text-[#0B420D]"
        />
      </div>
      <button
        type="button"
        class="w-6 h-6 bg-white rounded-[4px] absolute bottom-0 left-0 p-1"
      >
        <Icon name="icon:edit-v1" class="text-black" />
      </button>
    </div>
    <p class="text-[#1A1A1A] font-bold mb-4">سیماگر دیزاین</p>
    <div
      class="w-full flex items-center justify-center gap-x-2 text-[#656565] mb-4"
    >
      <Icon name="icon:location" size="20" />
      <p>تهران</p>
    </div>

    <div class="w-full flex items-center justify-center gap-x-3 cursor-pointer">
      <p class="text-primary text-[15px]">مشاهده جزئیات حساب کاربری</p>
      <Icon
        name="icon:chevron-down-v1"
        size="9"
        class="rotate-90 text-primary"
      />
    </div>
  </div>
</template>
