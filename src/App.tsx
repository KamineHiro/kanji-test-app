import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Quiz from './components/Quiz';

const AppContainer = styled.div`
  font-family: 'Hiragino Sans', 'Yu Gothic UI', 'Meiryo UI', sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 40px 20px;
  min-height: calc(100vh - 200px);

  @media (max-width: 768px) {
    padding: 30px 15px 30px 15px;
    min-height: calc(100vh - 180px);
  }

  @media (max-width: 480px) {
    padding: 20px 10px 20px 10px;
    min-height: calc(100vh - 150px);
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/quiz/:difficulty" element={<Quiz />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
