import { useEffect, useState } from "react";
import getDateFormat from "../../utils/getDateFormat";
import dayjs from "dayjs";
import styled from "styled-components";
import DayOfTheWeek from "./DayOfTheWeek";
import CalenderHeader from "./CalenderHeader";
import CalenderRenderCell from "./CalenderRenderCell";
import { DateType } from "../../utils/getDateFormat";

const Calender = () => {
  const [currentMoment, setCurrentMoment] = useState<DateType>(
    getDateFormat(dayjs())
  );

  const [selectedMoment, setSelectedMoment] = useState(0);

  useEffect(() => {
    const prevMonth = dayjs().subtract(-selectedMoment, "month");
    const nextMonth = dayjs().add(selectedMoment, "month");

    if (selectedMoment < 0)
      setCurrentMoment(getDateFormat(dayjs(prevMonth.format())));
    else if (selectedMoment > 0)
      setCurrentMoment(getDateFormat(dayjs(nextMonth.format())));
    else setCurrentMoment(getDateFormat(dayjs()));
  }, [selectedMoment]);

  const { currentYear, currentMonth } = currentMoment;

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
  padding: 0.5rem;
  margin-bottom: 4rem;
  box-sizing: border-box;

  @media (min-width: 700px) {
    width: 40%;
    height: 100%;
  }
`;
