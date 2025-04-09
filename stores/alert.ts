import {defineStore} from "pinia";
import {IAlert} from "../models/IAlert";


export const useAlertStore = defineStore("alert", {
    state: () => ({
        config: {
            title: '',
            icon: ''
        } as IAlert,
    }),

    actions: {
        openAlert(payload: IAlert): void {
            this.config = payload
        },
    },
});
