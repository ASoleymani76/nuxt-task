import {useAxios} from "@/composables/useAxios";

type HTTPMethods = "POST" | "GET" | "PUT" | "DELETE";
export default (url: string, method: HTTPMethods = "POST") => ({
    async setTag() {
        try {
            const res = await useAxios()(url, {
                method: method,
            });
            return res.data;
            // if (res.data.isSuccess) {
            //     return res.data;
            // } else {
            //     if (res.data.message) {
            //         useToast.toastError(res.data.message);
            //     }
            // }
        } catch (error: any) {
            errorHandler(error.response);
        }
    },
    async setParams(params: object | null) {
        try {
            const res = await useAxios()(url, {
                method: method,
                params: params ? JSON.parse(JSON.stringify(params)) : "",
            });

            return res.data;
            // if (res.data.isSuccess) {
            //     return res.data;
            // } else {
            //     if (res.data.message) {
            //         useToast.toastError(res.data.message);
            //     }
            // }
        } catch (error: any) {
            errorHandler(error.response);
            throw createError({
                status: error.status,
                message: error.message
            })
            // if (error.status) {
            //     throw createError({
            //         status: error.status,
            //         message: error.status
            //     })
            // } else {
            // }

        }
    },
    async setBody(body: object) {
        try {
            const res = await useAxios()(url, {
                method: method,
                data: JSON.parse(JSON.stringify(body)),
            });
            return res.data;
            // if (res.data.isSuccess) {
            //     return res.data;
            // } else {
            //     if (res.data.message) {
            //         useToast.toastError(res.data.message);
            //     }
            // }
        } catch (error: any) {
            errorHandler(error.response);
        }
    },
    async setPartial(params: object) {
        let partialString = "";
        Object.values(params).forEach((value) => {
            partialString += `/${value}`;
        });
        try {
            const res = await useAxios()(url + partialString, {
                method: method,
            });
            return res.data;
            // if (res.data.isSuccess) {
            //     return res.data;
            // } else {
            //     if (res.data.message) {
            //         useToast.toastError(res.data.message);
            //     }
            // }
        } catch (error: any) {
            errorHandler(error.response);
        }
    },
    async setFormData(body: any, progressCallback: (ProgressEvent: any) => void) {
        try {
            const res = await useAxios(true)(url, {
                method: method,
                data: body,
                onUploadProgress: (progressEvent) => {
                    return progressCallback(progressEvent);
                },
            });
            return res.data;
            // if (res.data.isSuccess) {
            //     return res.data;
            // } else {
            //     if (res.data.message) {
            //         useToast.toastError(res.data.message);
            //     }
            // }
        } catch (error: any) {
            errorHandler(error.response);
        }
    },
});
