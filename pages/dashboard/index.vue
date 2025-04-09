<script setup lang="ts">
const breadcrumbs = ref<IBreadCrumb[]>([
  {
    title: "پنل کاربری",
    link: "#",
  },
  {
    title: "داشبورد",
    link: "/dashboard",
  },
]);
</script>

<template>
  <div class="w-full">
    <UtilitiesBreadcrumb
      class="mt-4"
      :breadcrumbs="breadcrumbs"
    ></UtilitiesBreadcrumb>
    <div class="mr-14 grid grid-cols-4">
      <!-- My Profile Start -->
      <div class="w-full">
        <DashboardProfileUserProfile></DashboardProfileUserProfile>
      </div>
      <!-- My Profile End -->
    </div>
  </div>
</template>
