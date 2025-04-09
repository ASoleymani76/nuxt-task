const fatalErrors: object = {
    404: 'صفحه مورد نظر یافت نشد.',
    500: 'مشکلی در سرور رخ داده است.',
    401: 'شما دسترسی ندارید.',
    403: 'شما دسترسی ندارید.',
    405: 'متود اشتباه است.',
    410:'این صفحه دیگر وجود ندارد.'
}

export default (errorData: any) => {
    // @ts-ignore
    if (fatalErrors[errorData.status]) {
        // @ts-ignore
        useToast.toastError(fatalErrors[errorData.status]);
    } else {
        // if(errorData.status === 400 ) return useToast.toastError(errorData.data.message);
        // @ts-ignore
        throw errorData;
    }

}
