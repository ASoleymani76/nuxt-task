export interface ICustomFetch {
    post(
        requestUrl: string,
        body?: object | null,
        params?: object | null,
        headers?: object | null
    ): Promise<AsyncData<unknown, unknown>>;

    get(
        requestUrl: string,
        params?: object | null,
        headers?: object | null
    ): Promise<AsyncData<unknown, unknown>>;

    put(
        requestUrl: string,
        body?: object | null,
        params?: null,
        headers?: object | null
    ): Promise<AsyncData<unknown, unknown>>;
}

type AsyncData<DataT, ErrorT> = {
    data: Ref<DataT | null>;
    pending: Ref<boolean>;
    refresh: (opts?: AsyncDataExecuteOptions) => Promise<void>;
    execute: (opts?: AsyncDataExecuteOptions) => Promise<void>;
    error: Ref<ErrorT | null>;
    status: Ref<AsyncDataRequestStatus>;
};

interface AsyncDataExecuteOptions {
    dedupe?: boolean;
}

type AsyncDataRequestStatus = "idle" | "pending" | "success" | "error";
