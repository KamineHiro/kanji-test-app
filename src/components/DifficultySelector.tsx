import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { DifficultyLevel } from '../types/kanji';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const SelectorContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 50px;
  line-height: 1.6;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const DifficultyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const DifficultyCard = styled.button<{ 
  difficulty: DifficultyLevel;
  isSelected: boolean;
}>`
  background: ${props => {
    if (props.isSelected) {
      switch (props.difficulty) {
        case 'beginner':
          return 'linear-gradient(135deg, #4CAF50, #45a049)';
        case 'intermediate':
          return 'linear-gradient(135deg, #FF9800, #F57C00)';
        case 'advanced':
          return 'linear-gradient(135deg, #F44336, #D32F2F)';
        default:
          return '#4CAF50';
      }
    }
    return 'linear-gradient(135deg, #f8f9fa, #e9ecef)';
  }};
  color: ${props => props.isSelected ? 'white' : '#495057'};
  border: ${props => props.isSelected ? 'none' : '2px solid #dee2e6'};
  border-radius: 20px;
  padding: 25px 30px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  box-shadow: ${props => props.isSelected 
    ? '0 10px 30px rgba(0, 0, 0, 0.2)' 
    : '0 4px 15px rgba(0, 0, 0, 0.1)'
  };
  position: relative;
  overflow: hidden;
  animation: ${props => css`
    ${fadeInUp} 0.8s ease-out ${props.difficulty === 'beginner' ? '0.4s' : props.difficulty === 'intermediate' ? '0.6s' : '0.8s'} both;
  `};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: ${props => props.isSelected 
      ? '0 15px 40px rgba(0, 0, 0, 0.3)' 
      : '0 8px 25px rgba(0, 0, 0, 0.15)'
    };
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.01);
  }

  ${props => props.isSelected && css`
    animation: ${pulse} 2s infinite;
  `}
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
`;

const DifficultyIcon = styled.div<{ difficulty: DifficultyLevel }>`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: ${props => {
    switch (props.difficulty) {
      case 'beginner':
        return 'rgba(255, 255, 255, 0.2)';
      case 'intermediate':
        return 'rgba(255, 255, 255, 0.2)';
      case 'advanced':
        return 'rgba(255, 255, 255, 0.2)';
      default:
        return 'rgba(0, 0, 0, 0.1)';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const DifficultyInfo = styled.div`
  flex: 1;
`;

const DifficultyTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DifficultyDescription = styled.p`
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.4;
  margin: 0 0 10px 0;
`;

const DifficultyStats = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const StatItem = styled.div`
  font-size: 12px;
  opacity: 0.8;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

const SelectedIndicator = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #4CAF50;
  font-weight: bold;
`;

const StartButton = styled.button<{ $isEnabled: boolean }>`
  background: ${props => props.$isEnabled 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : '#e9ecef'
  };
  color: ${props => props.$isEnabled ? 'white' : '#6c757d'};
  border: none;
  border-radius: 15px;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  cursor: ${props => props.$isEnabled ? 'pointer' : 'not-allowed'};
  transition: all 0.3s ease;
  font-family: inherit;
  box-shadow: ${props => props.$isEnabled 
    ? '0 8px 25px rgba(102, 126, 234, 0.3)' 
    : 'none'
  };
  animation: ${fadeInUp} 0.8s ease-out 1s both;

  &:hover {
    transform: ${props => props.$isEnabled ? 'translateY(-2px)' : 'none'};
    box-shadow: ${props => props.$isEnabled 
      ? '0 12px 35px rgba(102, 126, 234, 0.4)' 
      : 'none'
    };
  }

  &:active {
    transform: ${props => props.$isEnabled ? 'translateY(0)' : 'none'};
  }
`;

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: DifficultyLevel) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ onSelectDifficulty }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | null>(null);

  const difficulties = [
    {
      level: 'beginner' as DifficultyLevel,
      title: '初級',
      description: '基本的な漢字をランダムに出題します',
      questionCount: '10問',
      emoji: '🌱',
      features: ['数字', '曜日', '身体', '方向', '自然', '動物']
    },
    {
      level: 'intermediate' as DifficultyLevel,
      title: '中級',
      description: '日常でよく使う漢字をランダムに出題します',
      questionCount: '10問',
      emoji: '🌿',
      features: ['時間', '家族', '色', '季節', '自然', '学習']
    },
    {
      level: 'advanced' as DifficultyLevel,
      title: '上級',
      description: '複雑で高度な漢字をランダムに出題します',
      questionCount: '10問',
      emoji: '🌳',
      features: ['感情', '行動', '社会', '建物', '自然', '抽象概念']
    }
  ];

  const handleDifficultyClick = (level: DifficultyLevel) => {
    setSelectedDifficulty(level);
  };

  const handleStartQuiz = () => {
    if (selectedDifficulty) {
      onSelectDifficulty(selectedDifficulty);
    }
  };

  return (
    <SelectorContainer>
      <Title>レベルを選択してください</Title>
          <Subtitle>
            あなたのレベルに合った漢字をランダムに出題するクイズで学習を始めましょう
          </Subtitle>
      
      <DifficultyList>
        {difficulties.map((difficulty) => (
          <DifficultyCard
            key={difficulty.level}
            difficulty={difficulty.level}
            isSelected={selectedDifficulty === difficulty.level}
            onClick={() => handleDifficultyClick(difficulty.level)}
          >
            {selectedDifficulty === difficulty.level && (
              <SelectedIndicator>✓</SelectedIndicator>
            )}
            
            <CardContent>
              <DifficultyIcon difficulty={difficulty.level}>
                {difficulty.emoji}
              </DifficultyIcon>
              
              <DifficultyInfo>
                <DifficultyTitle>
                  {difficulty.title}
                  {selectedDifficulty === difficulty.level && ' ✓'}
                </DifficultyTitle>
                
                <DifficultyDescription>
                  {difficulty.description}
                </DifficultyDescription>
                
                <DifficultyStats>
                  <StatItem>{difficulty.questionCount}</StatItem>
                  <StatItem>{difficulty.features.slice(0, 3).join('・')}</StatItem>
                </DifficultyStats>
              </DifficultyInfo>
            </CardContent>
          </DifficultyCard>
        ))}
      </DifficultyList>
      
      <StartButton 
        $isEnabled={selectedDifficulty !== null}
        onClick={handleStartQuiz}
      >
        {selectedDifficulty ? `${selectedDifficulty === 'beginner' ? '初級' : selectedDifficulty === 'intermediate' ? '中級' : '上級'}でクイズを開始` : 'レベルを選択してください'}
      </StartButton>
    </SelectorContainer>
  );
};

export default DifficultySelector;
