import "./App.css";
import Calender from "./components/Calender";
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
  justify-content: space-between;
  min-width: 1200px;
  background-color: #fff;
`;
