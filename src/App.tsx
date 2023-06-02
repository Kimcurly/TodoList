import "./App.css";
import Calender from "./components/Calender/Calender";
import TodoList from "./components/Todo/TodoList";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <RootContainer>
        <Calender />
        <TodoList />
      </RootContainer>
    </Provider>
  );
}

export default App;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  height: auto;

  @media (min-width: 700px) {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
