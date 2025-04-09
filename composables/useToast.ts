import {useToastStore} from "../stores/toast";


export const useToast = {
    toastSuccess(content:string) {
        let toastStore = useToastStore()
        toastStore.success(content)
    },
    toastError(content:string){
        let toastStore = useToastStore()
        toastStore.error(content)
    },
    toastInfo(content:string){
        let toastStore = useToastStore()
        toastStore.info(content)
    }

}
