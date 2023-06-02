import { addTodo } from "../../store/index";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import Button from "../UI//Button";
import React, { useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const todos = useAppSelector((state) => state.getTodos.todos);
  console.log(todos);
  const [input, setInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [goals, setGoals] = useState([]);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   dispatch(addTodo(input));
  //   setInput("");
  // };

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <GoalContainer>
      {todos.map((todo) => {
        return (
          <Wrapper>
            <TodoContainer>
              <SvgContainer>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8147 0H2.35521C1.09653 0 0 0.78846 0 1.83333V18.0833C0 19.1282 1.09653 20 2.35521 20H11.444C11.6911 20 11.9305 19.9039 12.1081 19.7628L19.7761 13.3526C19.9537 13.2051 20 13 20 12.7949V1.83333C20 0.78846 19.0734 0 17.8147 0ZM1.85328 18.0833V1.83333C1.85328 1.64743 2.13127 1.53846 2.35521 1.53846H17.8147C18.0386 1.53846 18.1467 1.64743 18.1467 1.83333V11.6667H12.3166C11.0579 11.6667 9.96139 12.4744 9.96139 13.5192V18.4615H2.35521C2.13127 18.4615 1.85328 18.2692 1.85328 18.0833ZM11.8147 17.7115V13.5192C11.8147 13.3333 12.0927 13.2051 12.3166 13.2051H17.3668L11.8147 17.7115Z"
                    fill="#444444"
                  />
                </svg>
              </SvgContainer>
              <TextContainer>{todo.title}</TextContainer>
              <Button onClick={handleClick} />
            </TodoContainer>
            {isClicked ? (
              <InputContainer>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
                  <circle cx="5" cy="12" r="5" fill="#D9D9D9" />
                  <path
                    d="M16 5C16 7.76142 13.7614 10 11 10C8.23858 10 6 7.76142 6 5C6 2.23858 8.23858 0 11 0C13.7614 0 16 2.23858 16 5Z"
                    fill="#D9D9D9"
                  />
                  <circle cx="11" cy="12" r="5" fill="#D9D9D9" />
                </svg>
                <form style={{ width: "93%" }}>
                  <StyledInput
                    placeholder="입력"
                    value={input}
                    autoFocus
                    onChange={handleChange}
                  />
                </form>
              </InputContainer>
            ) : null}
          </Wrapper>
        );
      })}
    </GoalContainer>
  );
};

export default TodoList;

const GoalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;

  @media (min-width: 700px) {
    width: 50%;
  }
`;

const Wrapper = styled.div`
  padding-bottom: 1.5rem;
`;

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: auto;
  padding: 7px 0 7px 0;
  background-color: #f1f1f1;
  border-radius: 5rem;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
`;

const TextContainer = styled.div`
  padding: 0 0.5rem 0 0.5rem;
  font-weight: 500;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  transition: all 2s;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding-bottom: 14px;
  font-size: medium;

  &:focus {
    border-bottom: 1px solid #000;
  }
`;
