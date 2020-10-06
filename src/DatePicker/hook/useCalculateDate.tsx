import React from "react";
import dayjs from "dayjs";

import { I_Calendar } from "../interface/index";

type I_Calculate = (year: string, month: string) => I_Calendar;

const useCalculateDate: I_Calculate = (year, month) => {
  const [calendarArr, setCalendarArr] = React.useState<I_Calendar>([]);
  React.useEffect(() => {
    const dateArr: I_Calendar = new Array(7 * 6);
    console.log(`${year}-${month}`);
    // 該月份總天數
    const monthDays = dayjs(`${year}-${month}`).daysInMonth();
    // 該月份第一天是星期幾
    let firstDay = dayjs(`${year}-${month}-01`).day();

    let dateCount = 1;
    for (let i = 0; i < 42; i++) {
      if (i === firstDay && dateCount <= monthDays) {
        dateArr[i] = {
          value: String(dateCount),
          display: true
        };
        dateCount++;
        firstDay++;
      } else {
        dateArr[i] = {
          value: "",
          display: false
        };
      }
    }
    setCalendarArr(dateArr);
  }, [year, month]);
  return calendarArr;
};

export default useCalculateDate;
