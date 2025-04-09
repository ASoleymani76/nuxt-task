<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object as PropType<object>
  }
})
</script>

<template>
  <div
      :style="`background: url('${item.image ? item.image : '/no-picture.webp'}') no-repeat center `"
      class="flex rounded-xl 2xl:min-h-[36rem] min-h-[27rem] 2xl:max-h-[36rem] max-h-[27rem] overflow-hidden bg-cover flex-col justify-end  blog-card">
    <div
        class="blog-card-title group rounded-b-xl z-[6] w-full flex flex-col justify-start  items-start px-4 pt-6 pb-2
        bg-[#F1F1F1]
        dark:bg-[#2A303F]
         dark:hover:bg-black/60 hover:bg-white/60
        backdrop-blur relative"
    >
                  <span
                      class="rounded-full z-[8] bg-[#F1F1F1] absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-2 flex flex-row justify-center items-center"
                  >
                       <LazyIconsFancyIcon
                           class="fancy-svg group-hover:[&_*]:!fill-primary [&_*]:!fill-primary dark:group-hover:[&_*]:!fill-secondary dark:[&_*]:!fill-secondary transform group-hover:!rotate-180
                           transition-all duration-200"
                       />
                  </span>
      <div class="overflow-y-auto">
      <span
          class=" text-xs w-full rounded-xl dark:text-white text-black custom-wrapper  text-justify pl-3 custom-content-wrapper line-clamp-5 group-hover:!line-clamp-none"
          v-html="item.description"
      ></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.w {
  margin: 0 auto;
  white-space: nowrap;
  max-width: 1200px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-size: cover;
  z-index: 5;
  font-size: 0;
}

.i {
  width: 40px;
  height: 500px;
  display: inline-block;
  position: relative;
  z-index: 4;
  transition: all 1.3s ease-in-out;
  background: url('/px-conversions/px-1.webp') repeat fixed;
  background-size: contain;
  border-radius: 0%;

  &:hover {
    transition: all 0s linear;
    opacity: 0;
  }
}

.dark .mobile-blog {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.06) 99.99%,
      rgba(255, 255, 255, 0) 100%
  );
}

.blog-card-title {
  max-height: 10rem;
  height: 10rem;
  transition: all 0.75s;
}

.blog-card-title:hover {
  @apply 2xl:max-h-[30rem] 2xl:h-[30rem] h-[25rem] max-h-[25rem];
}

.custom-wrapper p {
  text-align: justify !important;
}
</style>


