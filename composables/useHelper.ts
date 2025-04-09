// v1.0.0
export const useHelper = {
    makeBase64(data: object | any) {
        return new Promise((resolve, reject) => {
            const fr = new FileReader();
            fr.onerror = reject;
            fr.onload = () => {
                // @ts-ignore
                resolve(fr?.result?.split(",")[1]);
            }
            fr.readAsDataURL(data);
        });
    },
    makeFormData(data: any) {
        let myForm = new FormData()
        for (let key in data) {
            if (!Array.isArray(data[key])) {
                myForm.append(key, data[key])
            } else {
                data[key].forEach((item: any) => {
                    myForm.append(key, item)
                })
            }
        }
        return myForm
    },
    getTotalPages: (totalCount: number, perPage: number): number => {
        let totalPages = [];
        const result = Math.ceil(totalCount / perPage)
        for (let i = 1; i <= result; i++) {
            totalPages.push(i);
        }
        return totalPages.length
    },
    isAdded(array:[],param:any) {
        return array === param;
    },
    arrayRemove(arr:[],value:any) {
        return arr.filter(function (ele) {
            return ele !== value;
        });
    },
    generateExcel(response:any) {
        const file = new Blob([response.data], {
            type: "application/vnd.ms-excel"
        });
        return {file};
    },
    convertNumbers2English(number:any) {
        return number.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (c:any) {
            return c.charCodeAt(0) & 0xf;
        });
    },
    toFarsiNumber(n:any) {
        const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        return n.toString().replace(/\d/g, (x:any) => farsiDigits[x]);
    },
    kFormatter(num:any){ return num > 999 ? `${(num / 1000).toFixed(1)}k` : num},
    detectBaseUrl(){
        const config = useRuntimeConfig();
        return process.env.NODE_ENV === 'production' ? config.public.apiBaseUrlBuild : config.public.apiBaseUrlDev;
    }
}
