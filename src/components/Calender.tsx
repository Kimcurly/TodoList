import { useState } from "react";
import getDateFormat from "../utils/getDateFormat";
import dayjs from "dayjs";
import styled from "styled-components";

const Calender = () => {
  const [currentMoment, setCurrentMoment] = useState(
    getDateFormat(dayjs("2023-04-03"))
  );

  const [selectedMoment, setSelectedMoment] = useState();
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
  }: any = currentMoment;

  const mappedWeekData = [];
  const weekData: any[] = [];
  const weekStart = currentDate - currentDay;
  const firstWeekStart =
    currentFirstDate - (currentFirstDay ? currentFirstDay : 7);

  // for (let i = 0; i < 7; i++) {
  //   weekData[i] = weekStart + i;

  //   if (weekData[i] > currentLastDate) weekData[i] -= currentLastDate;
  // }

  for (let i = 1; i < 8; i++) {
    // 전 월의 마지막 날짜를 포함하지 않는, 아예 출력하지 않는 첫 주 렌더링 로직
    weekData[i - 1] = firstWeekStart + i <= 0 ? undefined : firstWeekStart + i;
  }
  mappedWeekData.push(
    <OneWeekContainer>
      {weekData.map((day) => {
        if (day && day <= currentLastDate) return <div key={day}>{day}</div>;
      })}
    </OneWeekContainer>
  );

  outer: while (1) {
    for (let i = 1; i < 8; i++) {
      weekData[i - 1] = weekData.at(-1) + i;
    }

    console.log(weekData);

    mappedWeekData.push(
      <OneWeekContainer>
        {weekData.map((day) => {
          if (day && day <= currentLastDate) return <div key={day}>{day}</div>;
        })}
      </OneWeekContainer>
    );

    console.log(mappedWeekData);

    if (
      weekData.at(-1) >
        currentLastDate - (currentLastDay ? currentLastDay : 7) + 1 &&
      Math.abs(weekData.at(-1) - currentLastDate) <= 6
    )
      break outer;
  }

  return (
    <CalenderContainer>
      <div>{mappedWeekData}</div>
    </CalenderContainer>
  );
};

export default Calender;

const CalenderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const OneWeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1280px;
`;
