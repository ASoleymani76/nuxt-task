// @ts-ignore
import {IAlert} from "../models/IAlert";
import {useAlertStore} from "../stores/alert";

export function useAlert() {
    let alertStore = useAlertStore()
    function openAlert(payload:IAlert) {
        alertStore.openAlert(payload)
    }

    return {openAlert}

}
