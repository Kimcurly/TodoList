import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Button from "@UI/Button";
import { Goals } from "@src/store/index";
import { useAppDispatch, useAppSelector } from "@src/hooks/index";
import { addTodo } from "@src/store/index";

// 투두 로직 마저 완성 후, 디자인 삽입하면 끝.

type ListProps = {
  goalData: Goals[];
  setIsClicked: Dispatch<SetStateAction<string>>;
  setInput: Dispatch<SetStateAction<string>>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasInput: string;
  inputValue: string;
};

const GoalList = ({
  goalData,
  setIsClicked,
  setInput,
  onChange,
  hasInput,
  inputValue,
}: ListProps) => {
  const todos = useAppSelector((state) => state.getSchedule.todos);

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo({ goalId: hasInput, title: inputValue }));
    setInput("");
  };
  const handleClick = (title: string) => {
    setIsClicked(title);
  };
  return (
    <>
      {goalData.map(({ id, title }) => {
        return (
          <Wrapper key={id}>
            <ConainerLength>
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
                <TextContainer>{title}</TextContainer>
                <Button onClick={() => handleClick(title)} />
              </TodoContainer>
            </ConainerLength>
            {todos.map((todo) => {
              return (
                <React.Fragment key={todo.keyId}>
                  {todo.goalId === title ? <TodoList todoData={todo} /> : null}
                </React.Fragment>
              );
            })}

            {hasInput === title ? (
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
                <form style={{ width: "93%" }} onSubmit={handleSubmit}>
                  <StyledInput
                    placeholder="입력"
                    value={inputValue}
                    autoFocus
                    onChange={onChange}
                  />
                </form>
              </InputContainer>
            ) : null}
          </Wrapper>
        );
      })}
    </>
  );
};

export default GoalList;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 1.5rem;
`;

const ConainerLength = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
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
  width: auto;
  padding: 0 0.7rem 0 0.5rem;
  font-size: 15px;
  font-weight: 520;
  white-space: nowrap;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  padding-top: 1rem;
  &::after {
    content: "";
    position: absolute;
    border-bottom: 2px solid #000;
    width: 90%;
    left: 2.2rem;
    bottom: 0.8rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding-left: 0.6rem;
  font-size: medium;
`;
