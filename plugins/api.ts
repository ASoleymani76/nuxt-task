export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const authStore = useAuthStore()
    let {token} = storeToRefs(authStore)
    const cookieToken = useCookie('token')
    const api = $fetch.create({
        baseURL:
            process.env.NODE_ENV === "production"
                ? config.public.apiBaseUrlBuild + "api/"
                : config.public.apiBaseUrlDev + "api/",
        onRequest({request, options, error}) {
            if (cookieToken.value) {
                options.headers.set('Authorization', cookieToken.value)
            } else if (!cookieToken.value && token.value) {
                options.headers.set('Authorization', token.value)
            }
        },
        async onResponseError({response}) {
            nuxtApp.runWithContext(() => {
                showError({
                    statusCode: response.status ? response.status : 500,
                    statusMessage: response.statusText ? response.statusText : 'Error Happened While Parsing Request Error In useFetch',
                    fatal: true
                })
            })
        }
    })
    return {
        provide: {
            api
        }
    }
})
