import "./App.css";
import Calender from "./components/Calender/Calender";
import TodoList from "./components/Todo/TodoList";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <SectionContainer>
        <RootContainer>
          <Calender />
          <TodoList />
        </RootContainer>
      </SectionContainer>
    </Provider>
  );
}

export default App;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 390px) {
    width: auto;
    height: 100%;
    padding: 1rem;
  }
`;

const RootContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 390px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
