import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Todos, changeTodoProgress } from "@src/store";
import { useAppDispatch } from "@src/hooks";

type TodoProps = {
  todoData: Todos;
};

const TodoList = ({ todoData }: TodoProps) => {
  const { goalId, keyId, title, done } = todoData;
  const [doneColor, setIsDone] = useState("");

  useEffect(() => {
    if (done) {
      setIsDone("#7F9DFF");
    }
    else if (!done) {
      setIsDone("");
    }
  });

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeTodoProgress({ keyId }));
  };

  return (
    <TodoContainer>
      <svg
        width="26"
        height="26"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <ProgressPath
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 5C16 6.36273 15.4548 7.59814 14.5707 8.5C15.4548 9.40186 16 10.6373 16 12C16 14.7614 13.7615 17 11 17C9.87439 17 8.83569 16.6281 8 16.0004C7.16431 16.6281 6.12561 17 5 17C2.23853 17 0 14.7614 0 12C0 10.6373 0.545166 9.40186 1.42932 8.5C0.545166 7.59814 0 6.36273 0 5C0 2.23859 2.23853 0 5 0C6.12561 0 7.16431 0.371948 8 0.999634C8.83569 0.371948 9.87439 0 11 0C13.7615 0 16 2.23859 16 5Z"
          fill="#D9D9D9"
          doneColor={doneColor}
        />
        {done ? (
          <svg
            width="13"
            height="11"
            viewBox="-4 -9 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 2.54623L15.5984 0L6.72531 8.36904L2.4724 3.81705L0 6.127L6.67915 13.2759L9.15155 10.9659L9.11484 10.9266L18 2.54623Z"
              fill="white"
            />
          </svg>
        ) : null}
      </svg>

      <TodoDescription>{title}</TodoDescription>
    </TodoContainer>
  );
};

export default TodoList;

const TodoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
`;

const ProgressPath = styled.path<{
  fillRule: string;
  clipRule: string;
  d: string;
  fill: string;
  doneColor: string;
}>`
  width: 26px;
  height: 26px;
  fill: ${(props) => props.doneColor};
  &:hover {
    cursor: pointer;
  }
`;

const TodoDescription = styled.div`
  padding-left: 0.6rem;
`;
