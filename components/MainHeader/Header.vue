<template>
  <header
    id="main-header"
    class="w-full h-max flex flex-col justify-center items-center bg-white"
  >
    <!--  Mobile Navbar  -->
    <nav
      class="w-full xl:hidden grid grid-cols-12 justify-between items-center py-2 gap-2 px-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
    >
      <label
        class="col-span-2 flex flex-row justify-start items-center"
        for="showMobileSearch"
        @click="showMobileMegaMenu = true"
      >
        <LazyIcon name="icon:hamburger-menu" size="20" />
      </label>

      <div
        class="col-span-8 flex flex-row justify-center items-center gap-2 relative"
      >
        <nuxt-link
          to="/"
          class="text-gray-800 flex flex-row justify-center items-center font-bold text-xl"
        >
          <img
            class="w-max h-[3rem] object-contain"
            src="/logo.png"
          />
        </nuxt-link>
      </div>

      <div class="col-span-2 flex flex-row justify-end items-center">
        <div class="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] bg-gray-50 cursor-pointer">
          <LazyIcon name="icon:task-search-normal" size="25" class="" />
        </div>
      </div>
    </nav>
    <!--  Mobile Navbar  -->

    <!--  Desktop Navbar  -->
    <nav class="w-full hidden xl:flex flex-col">

      <div
        class="w-full flex flex-row justify-between items-center gap-x-4 p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
      >
        <div class="flex flex-row justify-start items-center gap-x-4">
          <NuxtLinkLocale class="w-[90px] h-[42px]" to="/">
            <img
                src="/logo.png"
                class="w-[90px] h-[42px] object-contain"
                alt=""
            />
          </NuxtLinkLocale>

          <div class="text-gray-700 text-base text-nowrap">
            <div class="dropdown dropdown-bottom dropdown-hover flex items-center">
              <label
                  class="flex justify-center border-none items-center border rounded-sm p-2 cursor-pointer gap-2"
                  tabindex="0"
              >
                <span class="text-base text-gray-700">سرویس ها</span>
                <LazyIcon name="icon:chevron-down-v1" size="6" />
              </label>
              <ul
                  ref="QtyModal"
                  class="dropdown-content menu p-1 shadow bg-white mt-1 rounded-md w-40 z-[2]"
                  tabindex="0"
              >
                <li>
                  <span class="text-gray-700 text-sm">لورم ایپسوم</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-gray-700 text-base text-nowrap">
            <div class="dropdown dropdown-bottom dropdown-hover flex items-center">
              <label
                  class="flex justify-center border-none items-center border rounded-sm p-2 cursor-pointer gap-2"
                  tabindex="0"
              >
                <span class="text-base text-gray-700">آکادمی</span>
                <LazyIcon name="icon:chevron-down-v1" size="6" />
              </label>
              <ul
                  ref="QtyModal"
                  class="dropdown-content menu p-1 shadow bg-white mt-1 rounded-md w-40 z-[2]"
                  tabindex="0"
              >
                <li>
                  <span class="text-gray-700 text-sm">لورم ایپسوم</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-gray-700 text-base text-nowrap">
            <div class="dropdown dropdown-bottom dropdown-hover flex items-center">
              <label
                  class="flex justify-center border-none items-center border rounded-sm p-2 cursor-pointer gap-2"
                  tabindex="0"
              >
                <span class="text-base text-gray-700">فایل های موبیکس کیوب</span>
                <LazyIcon name="icon:chevron-down-v1" size="6" />
              </label>
              <ul
                  ref="QtyModal"
                  class="dropdown-content menu p-1 shadow bg-white mt-1 rounded-md w-40 z-[2]"
                  tabindex="0"
              >
                <li>
                  <span class="text-gray-700 text-sm">لورم ایپسوم</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-gray-700 text-base text-nowrap">
            <span class="text-base text-gray-700">ماشین حساب درآمد</span>
          </div>

          <div class="text-gray-700 text-base text-nowrap">
            <span class="text-base text-gray-700">سوالات متداول</span>
          </div>
        </div>

        <div class="flex flex-row justify-end items-center gap-x-2">

          <div class="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] p-4 bg-gray-50 cursor-pointer">
            <div class="flex justify-center items-center bg-[#EEEEEE] rounded-[4px] w-[20px] h-[20px] p-1.5">
              <LazyIcon name="icon:chevron-left" size="16" class="text-gray-400" />
            </div>
          </div>

          <div class="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] bg-gray-50 cursor-pointer">
            <LazyIcon name="icon:task-notification" size="25" class="" />
          </div>

          <div class="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] bg-gray-50 cursor-pointer">
            <LazyIcon name="icon:task-profile" size="25" class="" />
          </div>

          <div class="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] bg-gray-50 cursor-pointer">
            <LazyIcon name="icon:task-search-normal" size="25" class="" />
          </div>
        </div>
      </div>

    </nav>
    <!--  Desktop Navbar End  -->

    <!-- MobileMegaMenu Modal Region  -->
    <div class="relative">
      <Transition
        enter-active-class="transition-[transform,opacity] duration-200"
        enter-from-class="translate-x-full opacity-0"
        enter-to-class="-translate-x-0 opacity-1"
        leave-active-class="transition-[transform,opacity] duration-200"
        leave-from-class="translate-x-0 opacity-1"
        leave-to-class="translate-x-full opacity-0"
      >
        <MobileMegaMenuModal
          v-if="showMobileMegaMenu"
          :data="pages"
          @hideSearchModal="showMobileMegaMenu = false"
        />
      </Transition>
    </div>
    <!-- MobileMegaMenu Modal Region End  -->
  </header>
</template>

<script lang="ts" setup>
// Imports
import { useRoute } from "vue-router";
import MobileMegaMenuModal from "@/components/MainHeader/MobileMegaMenuModal.vue";

// Variables
const currentScrollState = ref(0);
const xlAndSmaller = useUtils().xlAndSmaller;
const appStore = useAppStore();
const route = useRoute();
const categories = ref([]);
const showMobileMegaMenu = ref(false);
const showSearchModal = ref(false);
const showLoginModal = ref(false);
const authStore = useAuthStore();
const showDesktopSidebar = ref(false);
let body = ref(null);
const showBanner = ref(false);
const pages = shallowRef([
  {
    title:'سرویس ها',
    link:'#'
  },
  {
    title:'آکادمی ',
    link:'#'
  },
  {
    title:'فایل های موبیکس کیوب',
    link:'#'
  },
  {
    title:'ماشین حساب درآمد',
    link:'#'
  },
  {
    title:'سوالات متداول',
    link:'#'
  },
])

// Watches
watch(route, async (val) => {
  showMobileMegaMenu.value = false;
  showSearchModal.value = false;
});

// Props
const props = defineProps({});

// Computed

// Hooks
onMounted(() => {
  // body.value = document ? document?.getElementsByTagName("body")[0] : null;
  // if (body.value) {
  //   body.value.addEventListener("scroll", handleScroll);
  // }
});
onBeforeUnmount(() => {
  // body.value.removeEventListener("scroll", handleScroll);
});

// Methods
function handleScroll() {
  if (body.value.scrollTop > currentScrollState.value + 200) {
    currentScrollState.value = body.value.scrollTop;
    showBanner.value = false;
  }
  if (currentScrollState.value > body.value.scrollTop + 200) {
    currentScrollState.value = body.value.scrollTop;
    showBanner.value = true;
  }
  if (body.value.scrollTop < 100) {
    showBanner.value = true;
  }
}
</script>

<style scoped></style>
