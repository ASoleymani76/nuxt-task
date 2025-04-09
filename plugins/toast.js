import { useToastStore } from "@/stores/toast";

export default defineNuxtPlugin((nuxtApp) => {
  let toastStore = useToastStore();
  // You can alternatively use this format, which comes with automatic type support
  // You Can define helper Functions Here As well
  // make sure to define nuxtApp in Components To Be Able to use It
  return {
    provide: {
      toastSuccess(content) {
        toastStore.success(content);
      },
      toastError(content) {
        toastStore.error(content);
      },
      toastInfo(content) {
        toastStore.info(content);
      },
    },
  };
});
