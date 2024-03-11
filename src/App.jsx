import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import SchedulePage from "./Pages/SchedulePage";
import {Routes, Route } from "react-router-dom";
import NextTrainingPage from "./Pages/NextTrainingPage";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Routes>
          {/* <Route path="/" element={<SchedulePage />} /> */}
          <Route path="/nextTraining" element={<NextTrainingPage />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #fafafa;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1440px;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
`;
