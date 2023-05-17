import { addTodo } from "../../store/index";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import Button from "../UI//Button";
import React, { useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const todos = useAppSelector((state) => state.getTodos.todos);
  console.log(todos);
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <GoalContainer>
      <div></div>
      <div>
        {todos.map((todo) => {
          return (
            <TodoContainer>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8147 0H2.35521C1.09653 0 0 0.78846 0 1.83333V18.0833C0 19.1282 1.09653 20 2.35521 20H11.444C11.6911 20 11.9305 19.9039 12.1081 19.7628L19.7761 13.3526C19.9537 13.2051 20 13 20 12.7949V1.83333C20 0.78846 19.0734 0 17.8147 0ZM1.85328 18.0833V1.83333C1.85328 1.64743 2.13127 1.53846 2.35521 1.53846H17.8147C18.0386 1.53846 18.1467 1.64743 18.1467 1.83333V11.6667H12.3166C11.0579 11.6667 9.96139 12.4744 9.96139 13.5192V18.4615H2.35521C2.13127 18.4615 1.85328 18.2692 1.85328 18.0833ZM11.8147 17.7115V13.5192C11.8147 13.3333 12.0927 13.2051 12.3166 13.2051H17.3668L11.8147 17.7115Z"
                  fill="#444444"
                />
              </svg>
              <div>{todo.title}</div>
            </TodoContainer>
          );
        })}
      </div>
      <form>
        <input value={input} onChange={handleChange} />
      </form>
      <Button onSubmit={handleSubmit} />
    </GoalContainer>
  );
};

export default TodoList;

const GoalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: 150px;
`;

const TodoContainer = styled.div`
  display: flex;
  padding: 15px 0 15px 0;
`;
