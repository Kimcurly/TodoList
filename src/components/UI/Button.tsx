import React from "react";
import styled from "styled-components";

type HandlerProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ onClick }: HandlerProps) => {
  return (
    <ButtonContainer>
      <AddButton onClick={onClick}>+</AddButton>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  padding-right: 0.5rem;
  z-index: 1;
`;

const AddButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff;
  font-size: large;
  color: #000;
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
