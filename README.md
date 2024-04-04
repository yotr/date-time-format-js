# date-time-format-js

## javascript formating functions for all types of date and time formats

![alt text](https://github.com/yotr/date-time-format-js/blob/main/date-time-format-js.png)

# 🤖 Introduction

There are three functions that take two parameters (date and type)

 date is variable type of date
 type is variable type of string

- for date only => formatDate(date,type);
- for time only => formatTime(date,type);
- for date&time => formatDateAndTime(date,type);

# 🚨 Tutorial

-  Types for formatDate(date,type); function

| Type | Output |
| --- | --- |
| `d` | 04 |
| `m` | 05 |
| `y` | 2024 |
| `mon` | Apr |
| `month` | April |
| `year-month-day` | 2024-04-04 |
| `year/month/day` | 2024/04/04 |
| `day-month-year` | 04-04-2024 |
| `day/month/year` | 04/04/2024 |
| `month-day-year` | 04-05-2024 |
| `month-year-day` | 04-2024-04 |
| `month/day/year` | 04/04/2024 |
| `month/year/day` | 04/2024/04 |
| `long` | Thursday, Apr 4, 2024 |
| `short` | Thu, Apr 4, 2024 |

-  Types for formatTime(date,type); function

| Type | Output |
| --- | --- |
| `h:m` | 5:34 AM |
| `h:m:s` | 5:34:9 AM |
| `hh:mm` | 05:34 AM |
| `hh:mm:ss` | 7:38:05 AM |

-  Types for formatDateAndTime(date,type); function

| Type | Output |
| --- | --- |
| `general` | Thu Apr 04 2024 18: 41: 43 GMT +0200(Eastern European Standard Time) |
| `local` | 4/4/2024, 6:47:34 PM |
| `gmt` | Thu, 04 Apr 2024 16:41:43 GMT |
| `utc` | Thu, 04 Apr 2024 16:41:43 GMT |
| `iso` | 2024-04-04T16:41:43.208Z |

# 🤸 Quick Start

- js

```bash
npm install date-time-format-js
```


# 🚀 Examples


```bash
import { formatDate ,formatTime ,formatDateAndTime } from 'date-time-format-js';

const date = new Date();

console.log(formatDate(date, 'year-month-day')) // 2024-04-04
console.log(formatTime(date, 'h:m:s')) // 5:34:9 AM
console.log(formatDateAndTime(date, 'local')) // 4/4/2024, 6:47:34 PM

```