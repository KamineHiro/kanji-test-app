import React from 'react';
import styled from 'styled-components';

const FinalResultsContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const ScoreText = styled.div`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Message = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  align-items: center;
`;

const RestartButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  min-width: 200px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    min-width: 100%;
    font-size: 15px;
    padding: 11px 20px;
  }
`;

const ChangeLevelButton = styled.button`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #333;
  border: none;
  border-radius: 10px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  min-width: 200px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    min-width: 100%;
    font-size: 15px;
    padding: 11px 20px;
  }
`;

interface FinalResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
  onChangeLevel?: () => void;
}

const FinalResults: React.FC<FinalResultsProps> = ({ score, total, onRestart, onChangeLevel }) => {
  const percentage = Math.round((score / total) * 100);
  
  const getMessage = () => {
    if (percentage === 100) {
      return '完璧です！🎉 全問正解！';
    } else if (percentage >= 80) {
      return '素晴らしい！🎊 とても良い成績です！';
    } else if (percentage >= 60) {
      return '良い成績です！👍 もう少し頑張りましょう！';
    } else {
      return 'もう一度挑戦してみましょう！💪';
    }
  };

  return (
    <FinalResultsContainer>
      <Title>クイズ終了！</Title>
      <ScoreText>
        最終スコア: {score}/{total} ({percentage}%)
      </ScoreText>
      <Message>{getMessage()}</Message>
      <ButtonContainer>
        <RestartButton onClick={onRestart}>
          🔄 同じレベルで再挑戦
        </RestartButton>
        {onChangeLevel && (
          <ChangeLevelButton onClick={onChangeLevel}>
            📚 別のレベルに挑戦
          </ChangeLevelButton>
        )}
      </ButtonContainer>
    </FinalResultsContainer>
  );
};

export default FinalResults;
