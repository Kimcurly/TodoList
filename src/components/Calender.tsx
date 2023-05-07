import { useEffect, useState } from "react";
import getDateFormat from "../utils/getDateFormat";
import dayjs from "dayjs";
import styled from "styled-components";
import DayOfTheWeek from "./Calender/DayOfTheWeek";
import CalenderHeader from "./Calender/CalenderHeader";
import CalenderRenderCell from "./Calender/CalenderRenderCell";

export interface Date {
  currentYear: string;
  currentMonth: string;
  currentDate: string;
  currentDay: string;
  currentFirstDate: number;
  currentFirstDay: number;
  currentFirstWeekDay: string;
  currentLastDate: number;
  currentLastDay: number;
  lastMonthDate: string;
}

export type DateTypes = {
  currentYear: string;
  currentMonth: string;
  currentDate: string;
  currentDay: string;
  currentFirstDate: number;
  currentFirstDay: number;
  currentFirstWeekDay: string;
  currentLastDate: number;
  currentLastDay: number;
  lastMonthDate: string;
};

const Calender = () => {
  const [currentMoment, setCurrentMoment] = useState(getDateFormat(dayjs()));

  const [selectedMoment, setSelectedMoment] = useState(0);

  useEffect(() => {
    const prevMonth = dayjs().subtract(-selectedMoment, "month");
    const nextMonth = dayjs().add(selectedMoment, "month");
    if (selectedMoment < 0) {
      setCurrentMoment(getDateFormat(dayjs(prevMonth.format())));
    } else if (selectedMoment > 0) {
      setCurrentMoment(getDateFormat(dayjs(nextMonth.format())));
    } else {
      setCurrentMoment(getDateFormat(dayjs()));
    }
    console.log("effect!");
    console.log(selectedMoment);
  }, [selectedMoment]);

  const {
    currentYear,
    currentMonth,
    currentDate,
    currentDay,
    currentFirstDate,
    currentFirstDay,
    currentFirstWeekDay,
    currentLastDate,
    currentLastDay,
    lastMonthDate,
  }: Date = currentMoment;

  const leftButtonClickHandler = () => {
    setSelectedMoment((prev) => prev - 1);
  };

  const rightButtonClickHandler = () => {
    setSelectedMoment((prev) => prev + 1);
  };

  return (
    <CalenderContainer>
      <CalenderHeader
        currentYearData={currentYear}
        currentMonthData={currentMonth}
        onLeftButtonClicked={leftButtonClickHandler}
        onRightButtonClicked={rightButtonClickHandler}
      />
      <DayOfTheWeek />
      <CalenderRenderCell currentMoment={currentMoment} />
    </CalenderContainer>
  );
};

export default Calender;

const CalenderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
