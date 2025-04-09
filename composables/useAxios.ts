import type {AxiosError} from "axios";
import axios from "axios";
import {useAuthStore} from "@/stores/auth.store";
import {useToast} from "@/composables/useToast";

export const useAxios = (form: Boolean) => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const route = useRoute();
    const router = useRouter();
    const cookieToken = useCookie("token");
    const authHeader = ref({});
    const {token} = storeToRefs(authStore);
    if (token.value) {
        Object.assign(authHeader.value, {Authorization: token.value});
    } else if (cookieToken.value) {
        Object.assign(authHeader.value, {Authorization: cookieToken.value});
    } else {
        // Object.assign(authHeader.value, {'Authorization': ''});
    }
    const axiosInstance = axios.create({
        baseURL:
            process.env.NODE_ENV === "production"
                ? config.public.apiBaseUrlBuild + "api/v1/"
                : config.public.apiBaseUrlDev + "api/v1/",
        headers: {
            "Content-type": form ? "multipart/form-data" : "application/json",
            ...authHeader.value,
        },
    });
    axiosInstance.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            const axiosError = error as AxiosError;
            if (axiosError) {
                throw {
                    status:axiosError.response?.status,
                    message:axiosError.response?.statusText
                }
                if (axiosError.response?.status === 401) {
                    //@ts-ignore
                    if (!process.server) {
                        // useToast.toastError("به صفحه ی ورود هدایت می شوید")
                        // authStore.logout();
                    }
                }
                if (axiosError.response?.status === 403) {
                    useToast.toastError(
                        "شما دسترسی های لازم برای مشاهده ی این صفحه یا عملیات را ندارید"
                    );
                    router.push("/");
                }
                if (axiosError.response?.status === 410) {
                    throw {
                        status: 410,
                        message: axiosError.response.data.message
                    }
                }
                if (axiosError.response?.status === 404) {
                    throw {
                        status: 404,
                        message: 'Page Not Found!'
                    }
                }
                if (axiosError.response?.status === 400) {
                    showError({statusCode: 404, statusMessage: "Page Not Found!"});
                }
                if (
                    axiosError.toJSON().message === "Network Error" ||
                    axiosError.code == "ERR_NETWORK" ||
                    axiosError.code == "NS_ERROR_OFFLINE"
                ) {
                    router.push("/");
                    useToast.toastError(
                        "خطا در برقراری ارتباط با سرور ، لطفا اتصال اینترنت خود را بررسی کنید."
                    );
                }
                if (axiosError.response?.status === 500) {
                    useToast.toastError("خطا در ارتباط با سرور");
                    router.push("/");
                }
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};
