import React from "react";
import Block from "./Block";
import "../styles/date.scss";

import { I_Calendar, I_Date } from "../interface/index";

interface I_Dates {
  targetDate?: string;
  calendarArr: I_Calendar;
  onClick: (date: string) => void;
}

const Dates: React.FC<I_Dates> = (props) => {
  const { targetDate, calendarArr, onClick } = props;

  return (
    <section className="Dates">
      {calendarArr.map((date: I_Date, i: number) => {
        const key = `${date}-${i}`;
        return (
          <div key={key} onClick={() => onClick(date.value)}>
            <Block
              value={date.value}
              display={date.display}
              canHover={date.display}
              active={date.value === targetDate}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Dates;
