

/*
=====================================
================types================
=====================================

===============date======================
        (d) 04
        (m) 04
        (y) 2024

        (mon) Apr
        (month) April

        (year-month-day) 2024-04-04
        (year/month/day) 2024/04/04
        (day-month-year) 04-04-2024
        (day/month/year) 04/04/2024

        (month-day-year) 04-04-2024
        (month-year-day) 04-2024-04
        (month/day/year) 04/04/2024
        (month/year/day) 04/2024/04

        (long)  Thursday, Apr 4, 2024
        (short) Thu, Apr 4, 2024

=========================================
===============time======================

        (h:m) 5:34 AM
        (h:m:s) 5:34:9 AM

        (hh:mm) 05:34 AM
        (hh:mm:ss) 7:38:05 AM
=========================================
===============date&time=================

        (general) Thu Apr 04 2024 18: 41: 43 GMT +0200(Eastern European Standard Time)
        (local) 4/4/2024, 6:47:34 PM
        (gmt) Thu, 04 Apr 2024 16:41:43 GMT
        (utc) Thu, 04 Apr 2024 16:41:43 GMT
        (iso) 2024-04-04T16:41:43.208Z

=========================================


*/

const formatDate = (date, type) => {
    // variables
    let newDate = new Date(date);
    let day = '' + newDate.getDate();
    let month = '' + (newDate.getMonth() + 1);
    let year = newDate.getFullYear();
    const longMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Septr", "Oct", "Nov", "Dec"];
    // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    // =====================================
    // 04 day
    if (type === 'd') {
        if (day.length < 2) {
            day = '0' + day;
        }
        return day;
    }
    // 04 month
    if (type === 'm') {
        month = '0' + month;
        return month;
    }
    // 2024 year
    if (type === 'y') {
        return year;
    }
    // =====================================

    // Apr
    if (type === 'mon') {
        return shortMonths[newDate.getMonth()];
    }
    // April
    if (type === 'month') {
        return longMonths[newDate.getMonth()];
    }
    // =====================================

    // 04/04/2024
    if (type === 'day/month/year') {
        return newDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
    }
    // 04-04-2024
    if (type === 'day-month-year') {
        month = '0' + month;
        if (day.length < 2) {
            day = '0' + day;
        }
        return [day, month, year].join('-');
    }
    // 2024/04/04
    if (type === 'year/month/day') {
        return newDate.toLocaleDateString('en-ZA');
    }
    // 2024-04-04
    if (type === 'year-month-day') {
        return newDate.toLocaleDateString('en-CA');
    }
    // 2024-04-04
    if (type === 'year-month-day') {
        return newDate.toLocaleDateString('en-CA');
    }
    // 04-04-2024
    if (type === 'month-day-year') {
        month = '0' + month;
        if (day.length < 2) {
            day = '0' + day;
        }
        return [month, day, year].join('-');
    }
    // 04-2024-04
    if (type === 'month-year-day') {
        month = '0' + month;
        if (day.length < 2) {
            day = '0' + day;
        }
        return [month, year, day].join('-');
    }
    // 04/04/2024
    if (type === 'month-day-year') {
        month = '0' + month;
        if (day.length < 2) {
            day = '0' + day;
        }
        return [month, day, year].join('/');
    }
    // 04/2024/04
    if (type === 'month-year-day') {
        month = '0' + month;
        if (day.length < 2) {
            day = '0' + day;
        }
        return [month, year, day].join('/');
    }

    // =====================================

    // Thursday, Apr 4, 2024
    if (type === 'long') {
        return newDate.toLocaleDateString('en-US', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    }
    // Thu, Apr 4, 2024
    if (type === 'short') {
        return newDate.toLocaleDateString('en-US', { weekday: "short", year: "numeric", month: "short", day: "numeric" });
    }

}
const formatTime = (time, type) => {
    // variables
    let newTime = new Date(time);
    let hours = newTime.getHours();
    let minutes = newTime.getMinutes();
    let seconds = newTime.getSeconds();
    // Check whether AM or PM
    let newformat = hours >= 12 ? 'PM' : 'AM';
    // Find current hour in AM-PM Format
    hours = hours % 12;
    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // =====================================

    // 5:34 AM
    if (type === 'h:m') {
        return hours + ':' + minutes + ' ' + newformat
    }
    // 5:34 AM
    if (type === 'h:m:s') {
        return hours + ':' + minutes + ':' + seconds + ' ' + newformat
    }

    // =====================================

    // 05:34 AM
    if (type === 'hh:mm') {
        return newTime.toLocaleString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    // 7:38:05 AM
    if (type === 'hh:mm:ss') {
        return newTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    }

}
const formatDateAndTime = (date, type) => {
    // variables
    let newDate = new Date(date);
    // =====================================

    // Thu Apr 04 2024 18: 41: 43 GMT +0200(Eastern European Standard Time)
    if (type === 'general') {
        return newDate.toString();
    }
    // 4/4/2024, 6:47:34 PM
    if (type === 'local') {
        return newDate.toLocaleString();
    }
    // Thu, 04 Apr 2024 16:41:43 GMT
    if (type === 'gmt') {
        return newDate.toGMTString();
    }
    // Thu, 04 Apr 2024 16:41:43 GMT
    if (type === 'utc') {
        return newDate.toUTCString();
    }
    // 2024-04-04T16:41:43.208Z
    if (type === 'iso') {
        return newDate.toISOString();
    }
}


const date = new Date();

console.log(formatTime(d, 'h:m:s'))

