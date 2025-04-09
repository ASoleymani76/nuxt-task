<template>
  <section class="w-full flex flex-col">
    <div class="w-full flex flex-col shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] bg-white rounded-lg gap-4">
      <div class="w-full flex flex-row justify-start items-center gap-2 px-4 py-2 bg-[#F2F4F5] rounded-tr-lg rounded-tl-lg overflow-x-auto">
        <div v-for="(item,idx) in informationTypes" :key="idx"
             @click="selectedInformationType = item.value"
             :class="[item.value === selectedInformationType ? 'bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)]' : '']"
             class="min-w-max flex flex-row justify-center items-center p-2 rounded-lg text-base text-gray-700 cursor-pointer">
          {{ $t(item.name) }}
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col gap-4 bg-white p-4 rounded-br-lg rounded-bl-lg shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)]">
      <template v-if="selectedInformationType === 1">
        <p class="w-full text-gray-600 text-base text-justify">
          {{ $t(
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        ) }}
        </p>
      </template>

      <template v-if="selectedInformationType === 2">
        <div class="w-full flex flex-col xl:flex-row justify-start items-center rounded-lg shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] overflow-hidden">
          <div class="w-full xl:w-1/6 flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] xl:rounded-r-lg ltr:xl:rounded-none  p-2">
            <span class="text-sm text-gray-600">{{ $t('نوع لپ‌تاپ و الترابوک') }}</span>
          </div>
          <div class="w-full xl:w-5/6 flex flex-row justify-between items-center gap-2 bg-white xl:rounded-l-lg p-2">
            <span class="text-sm text-gray-600">{{ $t('نوت بوک') }}</span>
          </div>
        </div>
        <div class="w-full flex flex-col xl:flex-row justify-start items-center rounded-lg shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] overflow-hidden">
          <div class="w-full xl:w-1/6 flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] xl:rounded-r-lg ltr:xl:rounded-none p-2">
            <span class="text-sm text-gray-600">{{ $t('کاستوم (ارتقا یافته)') }}</span>
          </div>
          <div class="w-full xl:w-5/6 flex flex-row justify-between items-center gap-2 bg-white xl:rounded-l-lg p-2">
            <span class="text-sm text-gray-600">{{ $t('خیر') }}</span>
          </div>
        </div>
        <div class="w-full flex flex-col xl:flex-row justify-start items-center rounded-lg shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] overflow-hidden">
          <div class="w-full xl:w-1/6 flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] xl:rounded-r-lg ltr:xl:rounded-none p-2">
            <span class="text-sm text-gray-600">{{ $t('نوع حافظه داخلی') }}</span>
          </div>
          <div class="w-full xl:w-5/6 flex flex-row justify-between items-center gap-2 bg-white xl:rounded-l-lg p-2">
            <span class="text-sm text-gray-600">SSD</span>
          </div>
        </div>
        <div class="w-full flex flex-col xl:flex-row justify-start items-center rounded-lg shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] overflow-hidden">
          <div class="w-full xl:w-1/6 flex flex-row justify-between items-center gap-2 bg-[#F2F4F5] xl:rounded-r-lg ltr:xl:rounded-none p-2">
            <span class="text-sm text-gray-600">{{ $t('نوع صفحه نمایش (پنل)') }}</span>
          </div>
          <div class="w-full xl:w-5/6 flex flex-row justify-between items-center gap-2 bg-white xl:rounded-l-lg p-2">
            <span class="text-sm text-gray-600">Liquid Retina XDR</span>
          </div>
        </div>
      </template>

      <template v-if="selectedInformationType === 3">
        <div class="w-full flex flex-col xl:flex-row justify-start items-start gap-4">
          <img src="/junks/products/sp-4.png" alt="">

          <div class="w-full flex flex-col gap-4">
            <div class="flex flex-row justify-start items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
              <span class="text-sm text-gray-600">{{ $t('نام شرکت') }}:</span>
              <div class="text-sm flex flex-row justify-center items-center gap-1 text-gray-800 font-bold">
                <span>Apple</span>
              </div>
            </div>
            <div class="flex flex-row justify-start items-center gap-2 bg-[#F2F4F5] rounded-lg p-2 border border-gray-200">
              <span class="text-sm text-gray-600">{{ $t('آدرس') }}:</span>
              <div class="text-sm flex flex-row justify-center items-center gap-1 text-gray-800 font-bold">
                <span>USA, CA</span>
              </div>
            </div>
          </div>
        </div>
        <p class="w-full text-gray-600 text-base text-justify">
          {{ $t(
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        ) }}
        </p>
      </template>

      <template v-if="selectedInformationType === 4">
        <div class="w-full flex flex-col xl:flex-row justify-start items-center gap-4">
          <img src="/junks/products/sp-5.png" class="rounded-[16px]" alt="">
          <img src="/junks/products/sp-6.png" class="rounded-[16px]" alt="">
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">

const informationTypes = shallowRef([
  {
    name:'معرفی',
    value:1,
  },
  {
    name:'مشخصات',
    value:2,
  },
  {
    name:'اطلاعات شرکت',
    value:3,
  },
  {
    name:'ویدیو معرفی محصول',
    value:4,
  },
])
const selectedInformationType = ref(1);
</script>

<style scoped>

</style>