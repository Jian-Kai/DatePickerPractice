import React from "react";
import Block from "./Block";
import "../styles/date.scss";

interface I_WeekDays {
  firstDay?: "Sun" | "Mon";
}

const SunFirst = ["Su", "Mo", "Th", "We", "Tu", "Fr", "Sa"];
const MonFrist = ["Mo", "Th", "We", "Tu", "Fr", "Sa", "Su"];

const WeekDays: React.FC<I_WeekDays> = props => {
  const { firstDay = "Sun" } = props;

  const renderWeek = (weekDay: string[]) => {
    return weekDay.map((day, i) => {
      return <Block key={`${weekDay}-${i}`} value={day} canHover={false} />;
    });
  };

  return (
    <section className="Dates">
      {firstDay === "Sun" ? renderWeek(SunFirst) : renderWeek(MonFrist)}
    </section>
  );
};

export default WeekDays;
