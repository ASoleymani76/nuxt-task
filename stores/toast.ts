import {defineStore} from "pinia";

export const useToastStore = defineStore("toast", {
    // persist:true,
    state: () => ({
        toastData: ''
    }),

    actions: {
        success(content: string) {
            this.toastData = content;
        },
        error(content: string) {
            this.toastData = content;
        },
        info(content: string) {
            this.toastData = content;
        },
        clearToastData() {
            this.toastData = ''
        },
    },
});
