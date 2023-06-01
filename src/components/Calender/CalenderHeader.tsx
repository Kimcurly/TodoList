import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

type DateTypes = {
  currentYearData: string;
  currentMonthData: string;
  onLeftButtonClicked: () => void;
  onRightButtonClicked: () => void;
};

const CalenderHeader = ({
  currentYearData,
  currentMonthData,
  onLeftButtonClicked,
  onRightButtonClicked,
}: DateTypes) => {
  return (
    <HeaderContainer>
      <CurrentMomentContainer>
        <FontFormat>{currentYearData}년</FontFormat>
        <FontFormat>{currentMonthData + 1}월</FontFormat>
      </CurrentMomentContainer>
      <MonthChangeButtonContainer>
        <MonthChangeButton
          icon={faAngleLeft}
          size="xl"
          onClick={onLeftButtonClicked}
        />
        <MonthChangeButton
          icon={faAngleRight}
          size="xl"
          onClick={onRightButtonClicked}
        />
      </MonthChangeButtonContainer>
    </HeaderContainer>
  );
};

export default CalenderHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (min-width: 390px) {
    display: flex;
    width: 100%;
  }
`;

const CurrentMomentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
`;

const FontFormat = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const MonthChangeButtonContainer = styled.div`
  display: flex;
  min-width: 60px;
  justify-content: space-between;
  align-items: center;
`;

const MonthChangeButton = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;
