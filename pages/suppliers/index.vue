<template>
  <main
      id="main"
      ref="el"
      class="w-full grid grid-cols-1 p-4 2xl:px-2/12 relative mx-auto bg-[#F8F8F8] dark:bg-mainDark gap-6 xl:gap-4"
  >

    <!--  BreadCrumb  -->
    <LazyUtilitiesBreadcrumb :breadcrumbs="breadcrumbs"/>
    <!--  BreadCrumb  -->

    <!--  Commercials  -->
    <section class="w-full h-[200px] bg-[#868686] rounded-[16px] flex flex-row justify-center items-center">
      <span class="text-2xl text-gray-800">{{ $t('جایگاه تبلیغ') }}</span>
    </section>
    <!--  Commercials  -->

    <!--  Countries  -->
    <section class="w-full flex flex-col gap-y-4">
      <div class="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center gap-2">
        <h2 class="text-lg xl:text-xl text-gray-800 font-bold">{{ $t('تامین‌کنندگان به تفکیک کشور') }}</h2>
        <NuxtLinkLocale to="/suppliers/list" class="flex flex-row justify-start items-center gap-x-2">
          <span class="text-xs xl:text-sm text-secondary">{{ $t('نمایش لیست تمام خریداران') }}</span>
          <LazyIcon name="icon:arrow-left" class="transform ltr:rotate-180" size="10"/>
        </NuxtLinkLocale>
      </div>

      <div class="w-full grid grid-cols-2 xl:grid-cols-4 gap-4 p-4 bg-white rounded-[8px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)]">
        <NuxtLinkLocale to="/suppliers/list" v-for="(country,idx) in countries" :key="idx" class="w-full flex flex-row justify-start items-center gap-2">
          <img :src="`/flags/${country.picture}.png`" class="w-[30px] h-[20px]" :alt="$t(country.name)">
          <span class="text-sm text-gray-700">{{ $t(country.name) }}</span>
        </NuxtLinkLocale>
      </div>
    </section>
    <!--  Countries  -->

    <!--  industries  -->
    <section class="w-full flex flex-col gap-y-4">
      <div class="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center gap-2">
        <h2 class="text-lg xl:text-xl text-gray-800 font-bold">{{ $t('تامین‌کنندگان به تفکیک صنعت') }}</h2>
      </div>

      <div class="w-full grid grid-cols-2 xl:grid-cols-4 gap-4 p-4 bg-white rounded-[8px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)]">
        <NuxtLinkLocale to="/suppliers/list" v-for="(industry,idx) in industries" :key="idx" class="w-full flex flex-row justify-start items-center gap-2">
          <LazyIcon :name="`icon:${industry.icon}`" size="20"/>
          <span class="text-sm text-gray-700">{{ $t(industry.name) }}</span>
        </NuxtLinkLocale>
      </div>
    </section>
    <!--  industries  -->

    <p class="w-full text-gray-700 text-base text-justify">
      {{ $t('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.') }}
    </p>
  </main>
</template>

<script setup lang="ts">

const {locale, localeProperties, t: $t} = useI18n();
useHead({
  title:$t('تامین‌کنندگان')
})

// Variables
const breadcrumbs = ref<IBreadCrumb[]>([
  {
    title: "تامین‌کنندگان",
    link: "#",
  },
]);
const countries = shallowRef([
  {
    name:'عربستان',
    picture:'ar'
  },
  {
    name:'بنگلادش',
    picture:'bn'
  },
  {
    name:'انگلیس',
    picture:'br'
  },
  {
    name:'برزیل',
    picture:'bz'
  },
  {
    name:'چین',
    picture:'ch'
  },
  {
    name:'انگلیس',
    picture:'en'
  },
  {
    name:'ایران',
    picture:'fa'
  },
  {
    name:'فرانسه',
    picture:'fr'
  },
  {
    name:'عربستان',
    picture:'ar'
  },
  {
    name:'بنگلادش',
    picture:'bn'
  },
  {
    name:'انگلیس',
    picture:'br'
  },
  {
    name:'برزیل',
    picture:'bz'
  },
  {
    name:'چین',
    picture:'ch'
  },
  {
    name:'انگلیس',
    picture:'en'
  },
  {
    name:'ایران',
    picture:'fa'
  },
  {
    name:'فرانسه',
    picture:'fr'
  },
])
const industries = shallowRef([
  {
    name:'غذایی',
    icon:'food'
  },
  {
    name:'دارویی',
    icon:'pill'
  },
  {
    name:'تکنولوژی',
    icon:'nano-technology'
  },
  {
    name:'مبلمان',
    icon:'furniture-store'
  },
  {
    name:'کشاورزی',
    icon:'farm-tractor'
  },
  {
    name:'بهداشتی',
    icon:'healthy'
  },
  {
    name:'بسته‌بندی',
    icon:'packaging'
  },
  {
    name:'لوازم تحریر',
    icon:'pen'
  },
  {
    name:'غذایی',
    icon:'food'
  },
  {
    name:'دارویی',
    icon:'pill'
  },
  {
    name:'تکنولوژی',
    icon:'nano-technology'
  },
  {
    name:'مبلمان',
    icon:'furniture-store'
  },
  {
    name:'کشاورزی',
    icon:'farm-tractor'
  },
  {
    name:'بهداشتی',
    icon:'healthy'
  },
  {
    name:'بسته‌بندی',
    icon:'packaging'
  },
  {
    name:'لوازم تحریر',
    icon:'pen'
  },
])
</script>

<style scoped>

</style>