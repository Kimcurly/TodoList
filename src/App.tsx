import "./App.css";
import MainPage from "@src/pages/MainPage";
import GoalRegistrationPage from "@src/pages/GoalRegistrationPage";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "@src/store/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <RootContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/goalreg" element={<GoalRegistrationPage />} />
        </Routes>
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
