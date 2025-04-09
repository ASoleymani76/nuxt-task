export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            copyClipboard: (text) => {
                navigator.clipboard.writeText(text)
            },
            isArray: (data) => {
                return Array.isArray(data)

            },
            makeBase64: (data) => {
                return new Promise((resolve, reject) => {
                    const fr = new FileReader();
                    fr.onerror = reject;
                    fr.onload = () => {
                        resolve(fr.result.split(",")[1]);
                    }
                    fr.readAsDataURL(data);
                });
            },
            time_ago(time) {
                switch (typeof time) {
                    case 'number':
                        break;
                    case 'string':
                        time = +new Date(time);
                        break;
                    case 'object':
                        if (time.constructor === Date) time = time.getTime();
                        break;
                    default:
                        time = +new Date();
                }
                let time_formats = [
                    [60, 'ثانیه ', 1], // 60
                    [120, '1 دقیقه پیش', 'یک دقیقه پیش'], // 60*2
                    [3600, 'دقیقه ', 60], // 60*60, 60
                    [7200, '1 ساعت پیش', '1 ساعت پیش'], // 60*60*2
                    [86400, 'ساعت ', 3600], // 60*60*24, 60*60
                    [172800, 'دیروز', 'فردا'], // 60*60*24*2
                    [604800, 'روز ', 86400], // 60*60*24*7, 60*60*24
                    [1209600, 'هفته پیش', 'هفته بعد'], // 60*60*24*7*4*2
                    [2419200, 'هفته', 604800], // 60*60*24*7*4, 60*60*24*7
                    [4838400, 'ماه پیش', 'ماه بعد'], // 60*60*24*7*4*2
                    [29030400, 'ماه', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
                    [58060800, 'سال پیش', 'سال بعد'], // 60*60*24*7*4*12*2
                    [2903040000, 'سال', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12

                ];
                let seconds = (+new Date() - time) / 1000,
                    token = 'پیش',
                    list_choice = 1;

                if (seconds == 0) {
                    return 'پیش'
                }
                if (seconds < 0) {
                    seconds = Math.abs(seconds);
                    token = 'پیش';
                    list_choice = 2;
                }
                let i = 0,
                    format;
                while (format = time_formats[i++])
                    if (seconds < format[0]) {
                        if (typeof format[2] == 'string')
                            return format[list_choice];
                        else
                            return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
                    }
                return time;
            }


        }
    }


})
