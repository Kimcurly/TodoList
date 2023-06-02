import { useState } from "react";
import Progress from "../UI/Progress";
import styled from "styled-components";
import { DateType } from "utils/getDateFormat";

type DateProps = {
  currentMoment: DateType;
};

const CalenderRenderCell = ({ currentMoment }: DateProps) => {
  const {
    currentDate,
    currentFirstDate,
    currentFirstDay,
    currentLastDate,
    currentLastDay,
  } = currentMoment;
  const [todayCell, setTodeyCell] = useState(currentDate);
  const [select, setSelect] = useState();

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
          <DayCell
            key={day}
            onClick={() => {
              setSelect(day);
            }}
          >
            {!(day <= 0) && <Progress />}
            <DaySection
              display={`${day <= 0 && "hidden"}`}
              today={`${todayCell === day ? "black" : "white"}`}
              isSelect={`${select === day ? "#506ef0" : "unSelect"}`}
            >
              {day}
            </DaySection>
          </DayCell>
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
            <DayCell
              key={day}
              onClick={() => {
                setSelect(day);
              }}
            >
              {day <= currentLastDate && <Progress />}
              <DaySection
                display={`${day <= currentLastDate || "hidden"}`}
                today={`${todayCell === day ? "black" : "white"}`}
                isSelect={`${select === day ? "#506ef0" : "unSelect"}`}
              >
                {day}
              </DaySection>
            </DayCell>
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
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
`;

const DayCell = styled.div`
  text-align: center;
  flex-basis: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.color || "black"};

  &:hover {
    cursor: pointer;
  }
`;

const DaySection = styled.div<{
  display: string;
  isSelect: string;
  today: string;
}>`
  visibility: ${(props) => props.display || "visibility"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.isSelect === "unSelect"
      ? props.today === "black"
        ? "white"
        : "black"
      : "white"};
  background-color: ${(props) =>
    props.isSelect === "#506ef0"
      ? "#506ef0"
      : props.today === "black"
      ? "black"
      : "white"};
  border-radius: 1.5rem;
  font-size: 13px;
  width: 26px;
  height: 26px;
`;
