<template>
  <footer id="footer" class="w-full h-max dark:bg-mainDark border-t-2 border-gray-200">
    <section class="w-full">
      <div class="w-full grid grid-cols-10 gap-4 p-4 2xl:px-2/12 ">
        <div class="col-span-5 xl:col-span-2 flex flex-col gap-y-4">
          <img src="/logo.png" class="w-[60px] h-[55px]" alt="">

          <div class="w-full flex flex-col gap-y-2">
            <span class="text-base text-gray-700">{{$t('پشتیبانی مشتریان')}} :</span>
            <a href="tel:(+98)21-979571" class="text-sm text-gray-600">21-979571 (98+)</a>
          </div>

          <div class="w-full flex flex-col gap-y-2">
            <span class="text-base text-gray-700">{{ $t('آدرس‌ها') }} :</span>
            <span class="text-sm text-gray-600">{{ $t('ایران, تهران, قلهک, کدویی, نبش باغانی') }}</span>
          </div>
        </div>

        <div class="col-span-5 xl:col-span-2 flex flex-col gap-y-4">
          <strong class="text-gray-800">{{ $t('خدمات مشتریان') }}</strong>

          <div class="w-full flex flex-col gap-y-2">
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('تماس با ما') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('سیاست حفظ حریم خصوصی') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('مرکز یادگیری') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('نمایشگاه‌های تجاری') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('خدمات نمایشگاه‌های تجاری') }}</NuxtLink>
          </div>
        </div>

        <div class="col-span-5 xl:col-span-2 flex flex-col gap-y-4">
          <strong class="text-gray-800">{{ $t('درباره ما') }}</strong>

          <div class="w-full flex flex-col gap-y-2">
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('درباره شتابیک') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('نظرات مشتریان') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('به ما بپیوندید') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('خبرنامه شرکت') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('بلاگ') }}</NuxtLink>
          </div>
        </div>

        <div class="col-span-5 xl:col-span-2 flex flex-col gap-y-4">
          <strong class="text-gray-800">{{ $t('خرید در شتابیک') }}</strong>

          <div class="w-full flex flex-col gap-y-2">
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('خریداران') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('دسته‌بندی‌ها') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('معاملات') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('نکات معامله') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('منبع‌یابی آسان') }}</NuxtLink>
          </div>
        </div>

        <div class="col-span-5 xl:col-span-2 flex flex-col gap-y-4">
          <strong class="text-gray-800">{{ $t('فروش در شتابیک') }}</strong>

          <div class="w-full flex flex-col gap-y-2">
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('خدمات برتر') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('شرایط و ضوابط') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('سیاست حقوق مالکیت معنوی') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('سیاست ارسال محصول') }}</NuxtLink>
            <NuxtLink class="text-gray-600 hover:text-gray-800">{{ $t('سوالات متداول') }}</NuxtLink>
          </div>
        </div>
      </div>

      <div class="w-full grid grid-cols-12 gap-4 p-4 2xl:px-2/12 shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]">
        <div class="col-span-12 xl:col-span-3 flex flex-row justify-center xl:justify-start items-center gap-x-2">
          <LazyIcon name="icon:email-green" size="20"/>
          <LazyIcon name="icon:telegram-green" size="20"/>
          <LazyIcon name="icon:whatsapp-green" size="20"/>
          <LazyIcon name="icon:instagram-green" size="20"/>
        </div>
        <div class="col-span-12 xl:col-span-6 flex flex-row justify-center items-center gap-x-2 direction-ltr">
          <span class="text-xs xl:text-sm text-gray-500">© 2024</span>
          <span class="text-xs xl:text-sm text-gray-500">All rights reserved to Shetabic Design by</span>
          <a href="simagar.com" class="text-xs xl:text-sm text-gray-500">SIMAGAR</a>
        </div>
        <div class="col-span-3"></div>
      </div>
    </section>
  </footer>
</template>

<script setup>


</script>

<style scoped>

</style>
