import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/goalreg");
  };

  return (
    <ModalContainer>
      <FlexContainer>
        <GoalRegister onClick={handleClick}>
          <div>목표 등록</div>
          <FontAwesomeIcon icon={faPlus} />
        </GoalRegister>
        <GoalManage>목표 관리</GoalManage>
      </FlexContainer>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  width: 12rem;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0px 0px 4.5px #444;
  background-color: white;
  z-index: 1000;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 0.8rem;
`;

const GoalRegister = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;
  cursor: pointer;

  &::after {
    content: "";
    width: 99%;
    opacity: 0.5;
    border: 1px solid #d9d9d9;
    position: absolute;
    top: 2.9rem;
    left: 0;
  }
`;

const GoalManage = styled.div``;
