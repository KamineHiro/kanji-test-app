import React from 'react';
import styled from 'styled-components';
import Illustration from './Illustration';

const QuestionContainer = styled.div`
  margin-bottom: 30px;
`;

const QuestionText = styled.p`
  font-size: 20px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const ImageContainer = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: center;
`;

interface QuestionProps {
  kanji: string;
  image: string;
}

const Question: React.FC<QuestionProps> = ({ kanji, image }) => {
  return (
    <QuestionContainer>
      <QuestionText>「{kanji}」の読み方はどれ？</QuestionText>
      <ImageContainer>
        <Illustration imageType={image} />
      </ImageContainer>
    </QuestionContainer>
  );
};

export default Question;
