import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "@src/hooks";
import { addGoal } from "@src/store";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GoalRegistration = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    navigate(-1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addGoal(inputValue));
    setInputValue("");
    navigate(-1);
  };

  const handleSubmitFromHeader = () => {
    dispatch(addGoal(inputValue));
    setInputValue("");
    navigate(-1);
  };

  return (
    <GoalRegistrationContainer>
      <FlexContainer>
        <HeaderContainer>
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="2xl"
            onClick={handleClick}
          />
          <div style={{ fontSize: "1.3rem" }}>목표</div>
          <div onClick={handleSubmitFromHeader} style={{ cursor: "pointer" }}>
            확인
          </div>
        </HeaderContainer>
        <GoalInputContainer>
          <form onSubmit={handleSubmit}>
            <Input placeholder="목표 입력" autoFocus onChange={handleChange} />
          </form>
        </GoalInputContainer>
        <PublicOrPrivateContainer>
          <div style={{ opacity: "0.7" }}>공개설정</div>
          <div>
            <select name="공개설정">
              <option value="">나만보기</option>
              <option>전체 공개</option>
              <option>팔로워 공개</option>
              <option>일부 공개</option>
            </select>
          </div>
        </PublicOrPrivateContainer>
        <ColorContainer>
          <div style={{ opacity: "0.7" }}>색상</div>
          <div>
            <select name="색상">
              <option value="">색상</option>
              <option>전체 공개</option>
              <option>팔로워 공개</option>
              <option>일부 공개</option>
            </select>
          </div>
        </ColorContainer>
      </FlexContainer>
    </GoalRegistrationContainer>
  );
};

export default GoalRegistration;

const GoalRegistrationContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.7rem;
  box-sizing: border-box;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const HeaderContainer = styled(FlexContainer)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const GoalInputContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  &::after {
    content: "";
    position: absolute;
    border-bottom: 2px solid #000;
    width: 99%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  border: none;
  outline: none;
  padding-left: 0.3rem;
  padding-bottom: 0.6rem;
`;

const PublicOrPrivateContainer = styled(GoalInputContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  &::after {
    border-bottom: 1px solid #000;
    opacity: 0.3;
    bottom: 3.6rem;
  }
`;

const ColorContainer = styled(PublicOrPrivateContainer)`
  &::after {
    bottom: -7px;
  }
`;
