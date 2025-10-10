import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const popIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const drawCircle = keyframes`
  0% {
    stroke-dashoffset: 300;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const drawX = keyframes`
  0% {
    stroke-dashoffset: 200;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
`;

const CircleMarker = styled.div<{ isCorrect: boolean }>`
  width: 300px;
  height: 300px;
  animation: ${popIn} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 10px 30px ${props => props.isCorrect ? 'rgba(76, 175, 80, 0.5)' : 'rgba(244, 67, 54, 0.5)'});
  }

  circle {
    stroke: ${props => props.isCorrect ? '#4CAF50' : 'transparent'};
    stroke-width: 12;
    fill: none;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: ${props => props.isCorrect ? drawCircle : 'none'} 0.8s ease-out 0.2s forwards;
  }

  line {
    stroke: #f44336;
    stroke-width: 12;
    stroke-linecap: round;
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: ${drawX} 0.5s ease-out forwards;
  }

  line:nth-child(2) {
    animation-delay: 0.25s;
  }

  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;

const ResultMessage = styled.div<{ isCorrect: boolean }>`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 20px 30px;
  border-radius: 15px;
  background: ${props => props.isCorrect ? '#E8F5E8' : '#FFEBEE'};
  color: ${props => props.isCorrect ? '#2E7D32' : '#C62828'};
  border: 3px solid ${props => props.isCorrect ? '#4CAF50' : '#f44336'};
  box-shadow: 0 4px 15px ${props => props.isCorrect ? 'rgba(76, 175, 80, 0.3)' : 'rgba(244, 67, 54, 0.3)'};
  animation: ${popIn} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s both;
`;

const KanjiDisplay = styled.div<{ isCorrect: boolean }>`
  font-size: 48px;
  font-weight: bold;
  padding: 25px 40px;
  border-radius: 15px;
  background: white;
  color: ${props => props.isCorrect ? '#2E7D32' : '#C62828'};
  border: 3px solid ${props => props.isCorrect ? '#4CAF50' : '#f44336'};
  box-shadow: 0 6px 20px ${props => props.isCorrect ? 'rgba(76, 175, 80, 0.4)' : 'rgba(244, 67, 54, 0.4)'};
  animation: ${popIn} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s both;
  text-align: center;
  
  .kanji {
    font-size: 48px;
    display: block;
    margin-bottom: 10px;
  }
  
  .reading {
    font-size: 24px;
    color: ${props => props.isCorrect ? '#4CAF50' : '#f44336'};
  }
`;

const NextButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  animation: ${popIn} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

interface ResultProps {
  isCorrect: boolean;
  correctAnswer: string;
  kanji: string;
  onNext: () => void;
}

const Result: React.FC<ResultProps> = ({ isCorrect, correctAnswer, kanji, onNext }) => {
  return (
    <Overlay>
      <ResultContainer>
        <CircleMarker isCorrect={isCorrect}>
          {isCorrect ? (
            // 正解の○マーク
            <svg viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
              <circle cx="50" cy="50" r="42" />
            </svg>
          ) : (
            // 不正解の×マーク
            <svg viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
              <line x1="25" y1="25" x2="75" y2="75" />
              <line x1="75" y1="25" x2="25" y2="75" />
            </svg>
          )}
        </CircleMarker>

        <ResultMessage isCorrect={isCorrect}>
          {isCorrect ? '正解！🎉' : `不正解 😢`}
        </ResultMessage>

        <KanjiDisplay isCorrect={isCorrect}>
          <span className="kanji">{kanji}</span>
          <span className="reading">「{correctAnswer}」</span>
        </KanjiDisplay>

        <NextButton onClick={onNext}>
          次の問題へ →
        </NextButton>
      </ResultContainer>
    </Overlay>
  );
};

export default Result;
