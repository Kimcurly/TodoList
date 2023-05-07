import React from "react";
import styled from "styled-components";

const dayOfTheWeekData = ["월", "화", "수", "목", "금", "토", "일"];

const DayOfTheWeek = () => {
  return (
    <DayOfTheWeekContainer>
      {dayOfTheWeekData.map((day) => {
        return <DayOfTheWeekCell>{day}</DayOfTheWeekCell>;
      })}
    </DayOfTheWeekContainer>
  );
};

export default DayOfTheWeek;

const DayOfTheWeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const DayOfTheWeekCell = styled.span`
  flex-basis: 26px;
  text-align: center;
`;
