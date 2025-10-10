import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { KanjiQuestion, QuizState, QuizResult, DifficultyLevel } from '../types/kanji';
import { getKanjiByDifficulty } from '../data/kanjiData';
import { randomizeQuestions } from '../utils/quizUtils';
import DifficultySelector from './DifficultySelector';
import Question from './Question';
import Options from './Options';
import Result from './Result';
import Score from './Score';
import FinalResults from './FinalResults';

const QuizContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 600px) {
    padding: 30px 20px;
    margin: 10px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  letter-spacing: 0.5px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const QuizHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
`;

const LevelBadge = styled.div<{ difficulty: DifficultyLevel }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  background: ${props => {
    switch (props.difficulty) {
      case 'beginner': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 'intermediate': return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      case 'advanced': return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      default: return '#667eea';
    }
  }};
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const ChangeLevelButton = styled.button`
  padding: 8px 16px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #333;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Quiz: React.FC = () => {
  const { difficulty } = useParams<{ difficulty: DifficultyLevel }>();
  const navigate = useNavigate();
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 0,
    isAnswered: false,
    isQuizComplete: false,
    selectedDifficulty: null
  });

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<KanjiQuestion[]>([]);
  const isInitialized = useRef(false);

  const currentQuestion: KanjiQuestion | undefined = currentQuestions[quizState.currentQuestionIndex];

  // 状態をlocalStorageに保存
  const saveQuizState = useCallback((state: QuizState, questions: KanjiQuestion[], answer: string | null, result: boolean) => {
    if (state.selectedDifficulty) {
      const saveData = {
        quizState: state,
        currentQuestions: questions,
        selectedAnswer: answer,
        showResult: result
      };
      localStorage.setItem(`kanji-quiz-${state.selectedDifficulty}`, JSON.stringify(saveData));
    }
  }, []);

  const handleSelectDifficulty = useCallback((difficulty: DifficultyLevel) => {
    const allQuestions = getKanjiByDifficulty(difficulty);
    // ランダムにシャッフルして、10問に制限
    const questions = randomizeQuestions(allQuestions, 10);
    setCurrentQuestions(questions);
    const newState = {
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: questions.length,
      isAnswered: false,
      isQuizComplete: false,
      selectedDifficulty: difficulty
    };
    setQuizState(newState);
    setSelectedAnswer(null);
    setShowResult(false);
    
    // URLを更新
    navigate(`/quiz/${difficulty}`);
    
    // 状態を保存
    saveQuizState(newState, questions, null, false);
  }, [navigate, saveQuizState]);

  const handleSelectAnswer = useCallback((answer: string) => {
    if (quizState.isAnswered || !currentQuestion) return;

    setSelectedAnswer(answer);
    const newState = { ...quizState, isAnswered: true };
    setQuizState(newState);

    // 1秒後に結果を表示
    setTimeout(() => {
      setShowResult(true);
      const finalState = answer === currentQuestion.correctAnswer 
        ? { ...newState, score: newState.score + 1 }
        : newState;
      setQuizState(finalState);
      
      // 状態を保存
      saveQuizState(finalState, currentQuestions, answer, true);
    }, 1000);
  }, [quizState, currentQuestion, currentQuestions, saveQuizState]);

  const handleNextQuestion = useCallback(() => {
    const nextIndex = quizState.currentQuestionIndex + 1;
    
    if (nextIndex >= quizState.totalQuestions) {
      const completeState = { ...quizState, isQuizComplete: true };
      setQuizState(completeState);
      // クイズ完了時は状態をクリア
      if (quizState.selectedDifficulty) {
        localStorage.removeItem(`kanji-quiz-${quizState.selectedDifficulty}`);
      }
    } else {
      const nextState = {
        ...quizState,
        currentQuestionIndex: nextIndex,
        isAnswered: false
      };
      setQuizState(nextState);
      setSelectedAnswer(null);
      setShowResult(false);
      
      // 状態を保存
      saveQuizState(nextState, currentQuestions, null, false);
    }
  }, [quizState, currentQuestions, saveQuizState]);

  const handleRestart = useCallback(() => {
    if (!quizState.selectedDifficulty) return;
    
    // 新しいランダム問題を生成（10問）
    const allQuestions = getKanjiByDifficulty(quizState.selectedDifficulty);
    const newQuestions = randomizeQuestions(allQuestions, 10);
    setCurrentQuestions(newQuestions);
    
    const restartState = {
      ...quizState,
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: newQuestions.length,
      isAnswered: false,
      isQuizComplete: false
    };
    setQuizState(restartState);
    setSelectedAnswer(null);
    setShowResult(false);
    
    // 状態を保存
    saveQuizState(restartState, newQuestions, null, false);
  }, [quizState, saveQuizState]);

  const handleChangeLevel = useCallback(() => {
    // 現在のレベルの保存データを削除
    if (quizState.selectedDifficulty) {
      localStorage.removeItem(`kanji-quiz-${quizState.selectedDifficulty}`);
    }
    
    // 状態をリセット
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: 0,
      isAnswered: false,
      isQuizComplete: false,
      selectedDifficulty: null
    });
    setCurrentQuestions([]);
    setSelectedAnswer(null);
    setShowResult(false);
    isInitialized.current = false; // 初期化フラグをリセット
    
    // ホームにリダイレクト
    navigate('/');
  }, [quizState.selectedDifficulty, navigate]);

  const getLevelLabel = (difficulty: DifficultyLevel): string => {
    switch (difficulty) {
      case 'beginner': return '🌱 初級';
      case 'intermediate': return '🌿 中級';
      case 'advanced': return '🌳 上級';
      default: return difficulty;
    }
  };

  // URLパラメータから難易度を復元
  useEffect(() => {
    // 既に初期化済みの場合はスキップ
    if (isInitialized.current) return;
    
    if (difficulty && ['beginner', 'intermediate', 'advanced'].includes(difficulty)) {
      const savedState = localStorage.getItem(`kanji-quiz-${difficulty}`);
      if (savedState) {
        try {
          const parsedState = JSON.parse(savedState);
          setQuizState(parsedState.quizState);
          setCurrentQuestions(parsedState.currentQuestions);
          setSelectedAnswer(parsedState.selectedAnswer);
          setShowResult(parsedState.showResult);
          isInitialized.current = true;
        } catch (error) {
          console.error('Failed to restore quiz state:', error);
          // エラーの場合は新しく開始
          handleSelectDifficulty(difficulty as DifficultyLevel);
          isInitialized.current = true;
        }
      } else {
        // 保存された状態がない場合は新しく開始
        handleSelectDifficulty(difficulty as DifficultyLevel);
        isInitialized.current = true;
      }
    }
  }, [difficulty, handleSelectDifficulty]);

  // 難易度が選択されていない場合は難易度選択画面を表示
  if (!quizState.selectedDifficulty) {
    return (
      <QuizContainer>
        <DifficultySelector onSelectDifficulty={handleSelectDifficulty} />
      </QuizContainer>
    );
  }

  // クイズが完了した場合
  if (quizState.isQuizComplete) {
    return (
      <QuizContainer>
        <FinalResults
          score={quizState.score}
          total={quizState.totalQuestions}
          onRestart={handleRestart}
          onChangeLevel={handleChangeLevel}
        />
      </QuizContainer>
    );
  }

  // 現在の問題が存在しない場合
  if (!currentQuestion) {
    return (
      <QuizContainer>
        <Title>漢字の読み方クイズ</Title>
        <p>問題を読み込み中...</p>
      </QuizContainer>
    );
  }

  return (
    <QuizContainer>
      <QuizHeader>
        <LevelBadge difficulty={quizState.selectedDifficulty}>
          {getLevelLabel(quizState.selectedDifficulty)}
        </LevelBadge>
        <ChangeLevelButton onClick={handleChangeLevel}>
          📚 レベル変更
        </ChangeLevelButton>
      </QuizHeader>

      <Title>漢字の読み方クイズ</Title>
      
      <Question
        kanji={currentQuestion.kanji}
        image={currentQuestion.image}
      />
      
      <Options
        options={currentQuestion.options}
        correctAnswer={currentQuestion.correctAnswer}
        selectedAnswer={selectedAnswer}
        isAnswered={quizState.isAnswered}
        onSelectAnswer={handleSelectAnswer}
      />
      
      {showResult && (
        <Result
          isCorrect={selectedAnswer === currentQuestion.correctAnswer}
          correctAnswer={currentQuestion.correctAnswer}
          kanji={currentQuestion.kanji}
          onNext={handleNextQuestion}
        />
      )}
      
      <Score
        score={quizState.score}
        total={quizState.totalQuestions}
      />
    </QuizContainer>
  );
};

export default Quiz;
