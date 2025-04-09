<template>
  <header
    id="main-header"
    class="w-full h-max flex flex-col justify-center items-center bg-white dark:bg-mutedDark dark:shadow-white"
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
            v-if="locale === 'fa'"
            class="w-max h-[3rem] object-contain"
            src="/logo.png"
            :alt="$t('شتابیک')"
          />
          <img
            v-if="locale === 'en'"
            class="w-max h-[3rem] object-contain"
            src="/logo.png"
            :alt="$t('شتابیک')"
          />
        </nuxt-link>
      </div>

      <div class="col-span-2 flex flex-row justify-end items-center">
        <div
          class="rounded-full bg-secondary text-white px-4 py-2 text-nowrap cursor-pointer text-xs"
        >
          {{ $t("ورود / ثبت‌نام") }}
        </div>
      </div>
    </nav>
    <!--  Mobile Navbar  -->

    <!--  Desktop Navbar  -->
    <nav class="w-full hidden xl:flex flex-col">
      <div
        class="w-full flex flex-row justify-center items-center p-4 bg-[linear-gradient(180deg,#0B420D_0%,#0B590E_50%,#0B420D_100%)]"
      >
        <strong class="text-white text-lg">{{
          $t(
            "امروز به ما بپیوندید تا در سریعترین زمان ممکن به زنجیره تامین الکترونیکی ملحق شوید."
          )
        }}</strong>
      </div>

      <div
        class="w-full flex flex-row justify-start items-center gap-x-4 p-4 2xl:px-2/12 bg-[#F6F8FB] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
      >
        <NuxtLinkLocale class="w-[90px] h-[42px]" to="/">
          <img
            src="/logo.png"
            class="w-[90px] h-[42px] object-contain"
            alt=""
          />
        </NuxtLinkLocale>

        <LazyMainHeaderSearchBar />

        <NuxtLink class="text-gray-700 text-base text-nowrap">{{
          $t("درخواست قیمت")
        }}</NuxtLink>

        <NuxtLink class="text-gray-700 text-base text-nowrap flex flex-row justify-center items-center gap-1">{{
          $t("راهنما و آموزش") }}
          <LazyIcon name="icon:question" size="20"/>
        </NuxtLink>

        <NuxtLink class="text-gray-700 text-base text-nowrap">{{
          $t("درباره ما")
        }}</NuxtLink>

        <div class="w-1 h-6 border-l border-gray-500"></div>

        <LazyBaseLanguageSwitcher />

        <div
          class="rounded-full bg-secondary text-white px-4 py-2 text-nowrap cursor-pointer"
        >
          {{ $t("ورود / ثبت‌نام") }}
        </div>
      </div>

      <div
        class="w-full flex flex-row justify-start items-center gap-x-4 py-2 px-4 2xl:px-2/12 bg-[#F6F8FB] border-b-2 border-gray-200 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
      >
        <div class="flex flex-row justify-start items-center gap-x-2">
          <LazyIcon name="icon:hamburger-menu" size="10" />
          <span class="text-base text-gray-700">{{
            $t("دسته‌بندی محصولات")
          }}</span>
        </div>

        <div class="dropdown dropdown-bottom flex items-center">
          <label
            class="flex justify-center border-none items-center border rounded-sm p-2 cursor-pointer gap-2"
            tabindex="0"
          >
            <span class="text-base text-gray-700">{{ $t("گروه ها") }}</span>
            <LazyIcon name="icon:chevron-down-v1" size="8" />
          </label>
          <ul
            ref="QtyModal"
            class="dropdown-content menu p-1 shadow bg-white mt-1 rounded-md w-40 z-[2]"
            tabindex="0"
          >
            <li>
              <span class="text-gray-700 text-sm">{{ $t("لورم ایپسوم") }}</span>
            </li>
          </ul>
        </div>

        <NuxtLink class="text-gray-700 text-base text-nowrap">{{
          $t("خرید")
        }}</NuxtLink>
        <NuxtLink class="text-gray-700 text-base text-nowrap">{{
          $t("فروش")
        }}</NuxtLink>
        <NuxtLink class="text-gray-700 text-base text-nowrap">{{
          $t("خدمات")
        }}</NuxtLink>
        <div class="dropdown dropdown-bottom flex items-center">
          <label
            class="flex justify-center border-none items-center border rounded-sm p-2 cursor-pointer gap-2"
            tabindex="0"
          >
            <span class="text-base text-gray-700">{{
              $t("آکادمی وانیا")
            }}</span>
            <LazyIcon name="icon:chevron-down-v1" size="8" />
          </label>
          <ul
            ref="QtyModal"
            class="dropdown-content menu p-1 shadow bg-white mt-1 rounded-md w-40 z-[2]"
            tabindex="0"
          >
            <li>
              <span class="text-gray-700 text-sm">{{ $t("لورم ایپسوم") }}</span>
            </li>
          </ul>
        </div>
        <NuxtLink class="text-gray-700 text-base text-nowrap">{{
          $t("گزارشات")
        }}</NuxtLink>
        <NuxtLink class="text-gray-700 text-base text-nowrap">{{
          $t("تماس با ما")
        }}</NuxtLink>
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
          :categories="categories"
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
const { locale, localeProperties } = useI18n();
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
  body.value = document ? document?.getElementsByTagName("body")[0] : null;
  if (body.value) {
    body.value.addEventListener("scroll", handleScroll);
  }
});
onBeforeUnmount(() => {
  body.value.removeEventListener("scroll", handleScroll);
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
