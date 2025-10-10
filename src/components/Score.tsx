import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #E0E0E0;
`;

const ScoreText = styled.p`
  font-size: 16px;
  color: #666;
  font-weight: 500;
`;

const ScoreValue = styled.span`
  color: #2196F3;
  font-weight: bold;
`;

interface ScoreProps {
  score: number;
  total: number;
}

const Score: React.FC<ScoreProps> = ({ score, total }) => {
  return (
    <ScoreContainer>
      <ScoreText>
        スコア: <ScoreValue>{score}</ScoreValue> / <ScoreValue>{total}</ScoreValue>
      </ScoreText>
    </ScoreContainer>
  );
};

export default Score;
