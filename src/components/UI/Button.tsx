import React from "react";
import styled from "styled-components";

type HandlerProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Button = ({ onSubmit }: HandlerProps) => {
  return (
    <ButtonContainer>
      <AddButton onClick={onSubmit}>+</AddButton>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  width: 3rem;
  height: 3rem;
  padding-bottom: 1rem;
`;

const AddButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
