import React from "react";
import styled from "styled-components";

const Progress = () => {
  return (
    <ProgressContainer>
      <FirstProgressCircle
        width="17"
        height="17"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
      </FirstProgressCircle>
      <SecondProgressCircle
        width="17"
        height="17"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
      </SecondProgressCircle>
      <ThirdProgressCircle
        width="17"
        height="17"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
      </ThirdProgressCircle>
      <FourthProgressCircle
        width="17"
        height="17"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
      </FourthProgressCircle>
    </ProgressContainer>
  );
};

export default Progress;

const ProgressContainer = styled.div`
  width: 26px;
  height: 26px;
  position: relative;
  margin-bottom: 0.5rem;
`;

const FirstProgressCircle = styled.svg`
  position: absolute;
  left: 0;
`;

const SecondProgressCircle = styled.svg`
  position: absolute;
  right: 0;
`;

const ThirdProgressCircle = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const FourthProgressCircle = styled.svg`
  position: absolute;
  right: 0;
  bottom: 0;
`;
