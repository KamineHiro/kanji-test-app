import React from 'react';
import styled, { keyframes } from 'styled-components';

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

const correctPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const incorrectShake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`;

const OptionButton = styled.button<{ 
  $isCorrect?: boolean; 
  $isIncorrect?: boolean; 
  $isDisabled?: boolean;
}>`
  background: ${props => {
    if (props.$isCorrect) return '#4CAF50';
    if (props.$isIncorrect) return '#f44336';
    return '#4CAF50';
  }};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 500;
  cursor: ${props => props.$isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  font-family: inherit;
  pointer-events: ${props => props.$isDisabled ? 'none' : 'auto'};
  animation: ${props => {
    if (props.$isCorrect) return correctPulse;
    if (props.$isIncorrect) return incorrectShake;
    return 'none';
  }} 0.6s ease;

  @media (max-width: 768px) {
    padding: 14px 18px;
    font-size: 17px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 16px;
  }

  &:hover {
    background: ${props => {
      if (props.$isCorrect || props.$isIncorrect) return 'inherit';
      return '#45a049';
    }};
    transform: ${props => {
      if (props.$isCorrect || props.$isIncorrect) return 'none';
      return 'translateY(-2px)';
    }};
    box-shadow: ${props => {
      if (props.$isCorrect || props.$isIncorrect) return 'none';
      return '0 5px 15px rgba(76, 175, 80, 0.3)';
    }};
  }

  &:active {
    transform: ${props => {
      if (props.$isCorrect || props.$isIncorrect) return 'none';
      return 'translateY(0)';
    }};
  }
`;

interface OptionsProps {
  options: string[];
  correctAnswer: string;
  selectedAnswer: string | null;
  isAnswered: boolean;
  onSelectAnswer: (answer: string) => void;
}

const Options: React.FC<OptionsProps> = ({
  options,
  correctAnswer,
  selectedAnswer,
  isAnswered,
  onSelectAnswer
}) => {
  const handleClick = (option: string) => {
    if (!isAnswered) {
      onSelectAnswer(option);
    }
  };

  return (
    <OptionsContainer>
      {options.map((option, index) => {
        const isCorrect = isAnswered && option === correctAnswer;
        const isIncorrect = isAnswered && option === selectedAnswer && option !== correctAnswer;
        
        return (
          <OptionButton
            key={index}
            onClick={() => handleClick(option)}
            $isCorrect={isCorrect}
            $isIncorrect={isIncorrect}
            $isDisabled={isAnswered}
          >
            {option}
          </OptionButton>
        );
      })}
    </OptionsContainer>
  );
};

export default Options;
