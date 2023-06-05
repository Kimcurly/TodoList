import { useAppSelector } from "@src/hooks/index";
import React, { useState } from "react";
import styled from "styled-components";
import GoalList from "./GoalList";

const TodoList = () => {
  const goals = useAppSelector((state) => state.getSchedule.goals);

  const [input, setInput] = useState("");
  const [isClicked, setIsClicked] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <ScheduleContainer>
      <GoalList
        goalData={goals}
        setIsClicked={setIsClicked}
        setInput={setInput}
        onChange={handleChange}
        hasInput={isClicked}
        inputValue={input}
      />
    </ScheduleContainer>
  );
};

export default TodoList;

const ScheduleContainer = styled.div`
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
