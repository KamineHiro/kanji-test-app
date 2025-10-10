export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface KanjiQuestion {
  kanji: string;
  correctAnswer: string;
  options: string[];
  image: string;
  difficulty: DifficultyLevel;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
  isAnswered: boolean;
  isQuizComplete: boolean;
  selectedDifficulty: DifficultyLevel | null;
}

export interface QuizResult {
  isCorrect: boolean;
  selectedAnswer: string;
  correctAnswer: string;
}
