<template>
  <div
      class="w-full btn-group flex items-center justify-center"
      v-if="pages && pages.length > 1"
  >
    <button
        v-if="activePage !== 1"
        :disabled="activePage == 1"
        @click="setNewPage(activePage - 1)"
        class=" w-9 text-gray-600 h-9 cursor-pointer flex flex-row justify-center items-center shadow-lg dark:text-white border border-gray-200 dark:border-gray-400"
    >
      <ArrowLeftIcon class="transform rotate-180"></ArrowLeftIcon>
      <!--      <svg-->
      <!--        xmlns="http://www.w3.org/2000/svg"-->
      <!--        class="h-6 w-6"-->
      <!--        fill="none"-->
      <!--        viewBox="0 0 24 24"-->
      <!--        stroke="currentColor"-->
      <!--        stroke-width="1"-->
      <!--      >-->
      <!--        <path-->
      <!--          stroke-linecap="round"-->
      <!--          stroke-linejoin="round"-->
      <!--          d="M13 7l5 5m0 0l-5 5m5-5H6"-->
      <!--        />-->
      <!--      </svg>-->
      <!--      <span>قبلی</span>-->
    </button>
    <!--    <button-->
    <!--      v-if="pages.length > 3 && activePage > 3"-->
    <!--      @click="setNewPage(1)"-->
    <!--      class="m-3 w-9 h-9 cursor-pointer shadow-lg dark:text-white border border-gray-200 dark:border-gray-400"-->
    <!--      :class="-->
    <!--        activePage == 1-->
    <!--          ? 'rounded-none bg-gray-600 text-white dark:text-white !border-none'-->
    <!--          : ''-->
    <!--      "-->
    <!--    >-->
    <!--      {{ 1 }}-->
    <!--    </button>-->
    <!--    <span-->
    <!--      v-if="pages.length > 4 && activePage > 4"-->
    <!--      class="m-3 w-9 h-9 cursor-text dark:text-white text-center"-->
    <!--    >-->
    <!--      ...-->
    <!--    </span>-->
    <template v-for="i in pages">
      <button

          :key="i"
          v-if="i !== 0 && !links"
          class=" w-9 h-9 text-gray-600 cursor-pointer shadow-lg dark:text-white border border-gray-200 dark:border-gray-400"
          :class="
          activePage == i
            ? ' rounded-none bg-gray-600 text-white dark:text-white !border-none'
            : ''
        "
          @click="setNewPage(i)"
      >
        {{ i }}
      </button>
      <nuxt-link
          :class="activePage == i? ' rounded-none bg-gray-600 text-white dark:text-white !border-none': ''"
          class=" w-9 h-9 text-gray-600 cursor-pointer shadow-lg flex items-center justify-center dark:text-white border border-gray-200 dark:border-gray-400"
          v-else-if="i !== 0 && links" :to="i===1 ? `/${parent}` : `/${parent}/p-${i}`">
        {{ i }}
      </nuxt-link>
    </template>
    <!--    <span-->
    <!--      v-if="pages.length > 3 && activePage < pages.length - 2"-->
    <!--      class="m-3 w-9 h-9 cursor-text flex flex-row justify-center items-center dark:text-white"-->
    <!--    >-->
    <!--      ...-->
    <!--    </span>-->
    <!--    <button-->
    <!--      v-if="pages.length > 3"-->
    <!--      @click="setNewPage(pages.length)"-->
    <!--      class="m-3 w-9 h-9 text-gray-600 cursor-pointer shadow-lg dark:text-white border border-gray-200 dark:border-gray-400"-->
    <!--      :class="-->
    <!--        activePage == pages.length-->
    <!--          ? ' rounded-none bg-gray-600 text-white dark:text-white !border-none'-->
    <!--          : ''-->
    <!--      "-->
    <!--    >-->
    <!--      {{ pages.length }}-->
    <!--    </button>-->
    <button
        v-if="activePage !== pages.length"
        :disabled="activePage == pages.length"
        @click="setNewPage(activePage + 1)"
        class=" w-9 h-9 text-gray-600 flex flex-row justify-center items-center cursor-pointer shadow-lg dark:text-white border border-gray-200 dark:border-gray-400"
    >
      <ArrowLeftIcon></ArrowLeftIcon>
    </button>
  </div>
</template>

<script>
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";

export default {
  name: "Pagination",
  components: {ArrowLeftIcon},
  emits: ["PageChanged"],
  props: {
    parent: {
      type: String,
      required: true,
    },
    totalCount: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    activePage: {
      type: [Number, String],
      required: true,
    },
    links: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      totalPages: [],
    };
  },
  methods: {
    setNewPage(pageNumber) {
      this.$emit("pageChanged", pageNumber);
    },
  },
  computed: {
    pages() {
      let totalPages = [];
      const result = Math.ceil(this.totalCount / this.perPage);
      for (let i = 1; i <= result; i++) {
        totalPages.push(i);
      }
      return totalPages;
    },
    filteredPage() {
      // Okay, idk what's happening here, but im proud of it
      // Half of credit goes to @amoowily
      // And of curse half of credit for new UI and bug fixes goes to @ASoleymani
      if (this.pages && this.pages.length > 3) {
        let filteredPaginationArray = [];
        if (this.activePage < 3) {
          // Rendering first 8 pages
          for (let i = 1; i <= 3; i++) {
            filteredPaginationArray.push(i);
          }
        } else if (this.activePage < this.pages.length - 2) {
          // Rendering middle pages
          filteredPaginationArray = [];
          for (let i = this.activePage - 2; i <= this.activePage + 2; i++) {
            filteredPaginationArray.push(i);
          }
        } else {
          // Rendering last pages
          filteredPaginationArray = [];
          for (let i = this.activePage - 3; i <= this.pages.length - 1; i++) {
            filteredPaginationArray.push(i);
          }
        }
        return filteredPaginationArray;
      } else {
        return this.pages;
      }
    },
  },
};
</script>
