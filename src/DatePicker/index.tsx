import dayjs from "dayjs";
import React from "react";

import Dates from "./components/Dates";
import WeekDays from "./components/WeekDays";

import useCalculateDate from "./hook/useCalculateDate";

import { I_DatePicker } from "./interface/index";

const Index: React.FC<I_DatePicker> = (props) => {
  const { pickDate, onPick } = props;
  const calendarArr = useCalculateDate(
    dayjs(pickDate).format("YYYY"),
    dayjs(pickDate).format("MM")
  );

  return (
    <div>
      <WeekDays />
      <Dates
        targetDate={!!pickDate && dayjs(pickDate).format("DD")}
        calendarArr={calendarArr}
        onClick={(date) => onPick(date)}
      />
    </div>
  );
};

export default Index;
