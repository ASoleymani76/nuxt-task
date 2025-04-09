<template>
  <main
      id="main"
      ref="el"
      class="w-full grid grid-cols-1 p-4 2xl:px-2/12 relative mx-auto bg-[#F8F8F8] dark:bg-mainDark gap-6 xl:gap-4"
  >

    <!--  BreadCrumb  -->
    <LazyUtilitiesBreadcrumb :breadcrumbs="breadcrumbs"/>
    <!--  BreadCrumb  -->

    <section class="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div class="w-full flex flex-col gap-4">
        <div class="w-full flex flex-row justify-between items-start gap-4">
          <div class="flex flex-col gap-2">
            <LazyIcon class="cursor-pointer" name="icon:share" size="20"/>
            <LazyIcon class="cursor-pointer" name="icon:like" size="20"/>
          </div>
          <div class="w-full flex flex-row justify-center items-center bg-white border border-gray-200 rounded-lg p-4">
            <img src="/junks/products/sp-1.png" alt="">
          </div>
        </div>
        <div class="w-full grid grid-cols-6 gap-2 xl:gap-4">
          <div v-for="i in 6" class="w-full h-max flex flex-row justify-center items-center bg-white border border-gray-200 rounded-lg p-2 cursor-pointer">
            <img src="/junks/products/sp-2.png" alt="">
          </div>
        </div>
      </div>
      <div class="w-full h-max flex flex-col border border-gray-200 bg-white p-4 rounded-lg gap-4">
        <h1 class="w-full text-base xl:text-xl text-gray-800">{{ $t('لپ تاپ 13.6 اینچی اپل مدل MacBook Air 2022-M2-8GB RAM-256GB SSD') }}</h1>

        <div class="w-full flex flex-col gap-2">
          <div class="flex flex-row justify-start items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
            <span class="text-sm text-gray-600">{{ $t('تامین‌کننده') }}:</span>
            <span class="text-sm text-primary">#4523</span>
          </div>
        </div>
        <div class="w-full flex flex-col gap-2">
          <div class="flex flex-row justify-start items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
            <span class="text-sm text-gray-600">{{ $t('کشور') }}:</span>
            <span class="text-sm text-gray-800 font-bold">{{ $t('ایران') }}</span>
            <img src="/flags/fa.png" class="w-[20px] h-[15px]" alt="">
          </div>
        </div>
        <div class="w-full flex flex-col gap-2">
          <div class="flex flex-row justify-start items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
            <span class="text-sm text-gray-600">{{ $t('حداقل و حداکثر مقدار سفارش') }}:</span>
            <span class="text-sm text-gray-800 font-bold"> 10-150</span>
            <span class="text-sm text-gray-800 font-bold">{{ $t('عدد') }}</span>
          </div>
        </div>
        <div class="w-full flex flex-col gap-2">
          <div class="flex flex-row justify-start items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
            <span class="text-sm text-gray-600">{{ $t('گارانتی و وارانتی') }}:</span>
            <span class="text-sm text-gray-800 font-bold">{{ $t('دارد') }}</span>
          </div>
        </div>
        <div class="w-full flex flex-col gap-2">
          <div class="flex flex-row justify-start items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
            <span class="text-sm text-gray-600">{{ $t('خدمات پس از فروش') }}:</span>
            <span class="text-sm text-gray-800 font-bold">{{ $t('یک سال') }}</span>
          </div>
        </div>
        <button class="w-full flex flex-row justify-center items-center p-2 bg-secondary border border-secondary text-white hover:text-secondary hover:bg-white rounded-lg">{{ $t('ارتباط با فروشنده') }}</button>
      </div>
    </section>

    <section class="w-full flex flex-col gap-4">
      <h2 class="text-base xl:text-xl text-gray-700">{{ $t('معرفی تامین‌کننده') }}</h2>

      <div class="w-full flex flex-col shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg gap-4">
        <p class="w-full text-gray-700 text-base text-justify">
          {{ $t(
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        ) }}
        </p>
        <div class="w-full flex flex-row justify-start items-center gap-2 flex-wrap">
          <span class="text-gray-600 text-base text-nowrap">{{ $t('دسته‌بندی‌های شاخص') }}:</span>
          <span class="flex flex-row justify-center items-center px-4 py-2 bg-[#F8F8F8] text-secondary text-sm rounded-lg">{{ $t('لوازم الکترونیکی') }}</span>
          <span class="flex flex-row justify-center items-center px-4 py-2 bg-[#F8F8F8] text-secondary text-sm rounded-lg">{{ $t('لوازم برقی') }}</span>
          <span class="flex flex-row justify-center items-center px-4 py-2 bg-[#F8F8F8] text-secondary text-sm rounded-lg">{{ $t('لوازم چوبی') }}</span>
        </div>
      </div>
    </section>

    <section class="w-full flex flex-col gap-4">
      <h2 class="text-base xl:text-xl text-gray-700">{{ $t('مشخصات محصول') }}</h2>

      <div class="w-full grid grid-cols-1 xl:grid-cols-3 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg gap-4">
        <div class="flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
          <span class="text-sm text-gray-600">{{ $t('سری پردازنده') }}</span>
          <span class="text-sm text-gray-800 font-bold">M2</span>
        </div>
        <div class="flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
          <span class="text-sm text-gray-600">{{ $t('ظرفیت حافظه RAM') }}</span>
          <div class="text-sm flex flex-row justify-center items-center gap-1 text-gray-800 font-bold">
            <span>8</span>
            <span>{{ $t('گیگابایت') }}</span>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
          <span class="text-sm text-gray-600">{{ $t('ظرفیت حافظه داخلی') }}</span>
          <div class="text-sm flex flex-row justify-center items-center gap-1 text-gray-800 font-bold">
            <span>256</span>
            <span>{{ $t('گیگابایت') }}</span>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
          <span class="text-sm text-gray-600">{{ $t('سازنده پردازنده گرافیکی') }}</span>
          <div class="text-sm flex flex-row justify-center items-center gap-1 text-gray-800 font-bold">
            <span>Apple</span>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
          <span class="text-sm text-gray-600">{{ $t('دقت صفحه نمایش') }}</span>
          <div class="text-sm flex flex-row justify-center items-center gap-1 text-gray-800 font-bold">
            <span>2560 *1664</span>
            <span>{{ $t('پیکسل') }}</span>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
          <span class="text-sm text-gray-600">{{ $t('نورپردازی صفحه کلید') }}</span>
          <div class="text-sm flex flex-row justify-center items-center gap-1 text-gray-800 font-bold">
            <span>{{ $t('تک رنگ') }}</span>
          </div>
        </div>
      </div>
    </section>

    <LazyPagesProductsSingleProductInfo/>

    <section class="w-full flex flex-col gap-4">
      <div class="w-full grid grid-cols-1 xl:grid-cols-2 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg gap-4">
        <div class="w-full flex flex-col gap-4">
          <h3 class="text-gray-700 text-xl">{{ $t('قوانین و مقررات ثبت درخواست') }}</h3>
          <p class="w-full text-gray-500 text-base text-justify">
            {{ $t(
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
          ) }}
          </p>
        </div>
        <div class="w-full h-max grid grid-cols-12 gap-4">
          <input class="col-span-12 xl:col-span-4 p-2 bg-[#F2F4F5] text-sm text-gray-600 rounded-lg border border-gray-200" type="text" :placeholder="$t('تعداد مورد نظر')">
          <input class="col-span-12 xl:col-span-4 p-2 bg-[#F2F4F5] text-sm text-gray-600 rounded-lg border border-gray-200" type="text" :placeholder="$t('شماره تلفن')">
          <input class="col-span-12 xl:col-span-4 p-2 bg-[#F2F4F5] text-sm text-gray-600 rounded-lg border border-gray-200" type="text" :placeholder="$t('ایمیل')">
          <textarea class="col-span-12 p-2 bg-[#F2F4F5] text-sm text-gray-600 rounded-lg border border-gray-200" type="text" :placeholder="$t('توضیحات')"></textarea>
          <button class="col-span-12 flex flex-row justify-center items-center p-2 bg-secondary border border-secondary text-white hover:text-secondary hover:bg-white rounded-lg">{{ $t('ارسال پیام') }}</button>
        </div>
      </div>
    </section>

    <section class="w-full flex flex-col gap-4">
      <h2 class="text-base xl:text-xl text-gray-700">{{ $t('محصولات مرتبط') }}</h2>

      <div class="w-full grid grid-cols-1 xl:grid-cols-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg gap-4">
        <NuxtLinkLocale v-for="i in 4" :to="`/products/${$t('موس و کیبورد')}`" class="w-full rounded-lg border border-gray-200 flex flex-row justify-start items-center gap-2 p-2">
          <img src="/junks/products/sp-3.png" class="w-[80px] h-[80px]" alt="">
          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-600">{{ $t('موس و کیبورد') }}</span>
            <span class="text-sm text-primary">#1234</span>
          </div>
        </NuxtLinkLocale>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">

// Variables
const route = useRoute();
const breadcrumbs = ref<IBreadCrumb[]>([
  {
    title: "محصولات",
    link: "/products",
  },
  {
    title: route?.params?.name,
    link: "",
  },
]);

useHead({
  title: route.params.name
})
</script>

<style scoped>

</style>