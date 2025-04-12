import useRepositoryRequests from "~/composables/useRepositoryRequests";

export const useApi = {
    // SignUp & Login
    search: useRepositoryRequests('sample1/', 'GET'),
    getProductBySeoUrl: useRepositoryRequests('Products/GetBySeoUrl','GET'),
}
