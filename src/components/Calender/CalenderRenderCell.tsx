import React from "react";
import Progress from "../UI/Progress";
import styled from "styled-components";
import { Date } from "./Calender";

type DateProps = {
  currentMoment: Date;
};

const CalenderRenderCell = ({ currentMoment }: DateProps) => {
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
  } = currentMoment;
  const mappedWeekData = [];
  const weekData: any[] = [];
  const firstWeekStart =
    currentFirstDate - (currentFirstDay ? currentFirstDay : 7);

  for (let i = 1; i < 8; i++) {
    // 첫 주 렌더링 로직
    weekData[i - 1] = firstWeekStart + i;
  }
  // 현재 개월을 벗어난 날짜를 undefined 로 렌더링하지 않으니, 스타일링에 문제가 발생. weekData 배열에 값은 넣되, 조건부로 visibility: hidden을 주어 자리를 차지하도록 함.
  mappedWeekData.push(
    <OneWeekContainer>
      {weekData.map((day) => {
        return (
          <>
            {day <= 0 ? (
              <DayCell color="white" key={day}>
                {day}
              </DayCell>
            ) : (
              <DayCell>
                <Progress />
                <div key={day}>{day}</div>
              </DayCell>
            )}
          </>
        );
      })}
    </OneWeekContainer>
  );

  outer: while (1) {
    for (let i = 1; i < 8; i++) {
      weekData[i - 1] = weekData.at(-1) + i;
    }

    // mappedWeekData 에 푸쉬하는 부분 좀 더 깔끔하게 할 수 있을 듯. 이제 본격적인 CSS 노가다 시작... 대략적인 레이아웃 구성이 끝나면 일정 CRUD 들어갈 예정

    mappedWeekData.push(
      <OneWeekContainer>
        {weekData.map((day) => {
          return (
            <>
              {day <= currentLastDate ? (
                <DayCell>
                  <Progress />
                  <div key={day}>{day}</div>
                </DayCell>
              ) : (
                <DayCell color="white" key={day}>
                  {day}
                </DayCell>
              )}
            </>
          );
        })}
      </OneWeekContainer>
    );

    if (
      weekData.at(-1) >
        currentLastDate - (currentLastDay ? currentLastDay : 7) + 1 &&
      Math.abs(weekData.at(-1) - currentLastDate) <= 6
    )
      break outer;
  }
  return <div>{mappedWeekData}</div>;
};

export default CalenderRenderCell;

const OneWeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  margin-bottom: 15px;
`;

const DayCell = styled.div`
  text-align: center;
  flex-basis: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.color || "black"};
`;
