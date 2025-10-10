import { KanjiQuestion } from '../types/kanji';

/**
 * Fisher-Yatesシャッフルアルゴリズムを使用して配列をランダムに並び替える
 * @param array シャッフルする配列
 * @returns シャッフルされた新しい配列
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * 漢字問題をランダムにシャッフルし、指定された数だけ返す
 * @param questions 全問題の配列
 * @param count 返す問題数（指定しない場合は全問題）
 * @returns ランダムにシャッフルされた問題の配列
 */
export const getRandomQuestions = (
  questions: KanjiQuestion[], 
  count?: number
): KanjiQuestion[] => {
  const shuffled = shuffleArray(questions);
  return count ? shuffled.slice(0, count) : shuffled;
};

/**
 * 選択肢をランダムにシャッフルする
 * @param options 選択肢の配列
 * @returns シャッフルされた選択肢の配列
 */
export const shuffleOptions = (options: string[]): string[] => {
  return shuffleArray(options);
};

/**
 * 問題の選択肢をランダムに並び替える
 * @param question 問題オブジェクト
 * @returns 選択肢がシャッフルされた問題オブジェクト
 */
export const randomizeQuestionOptions = (question: KanjiQuestion): KanjiQuestion => {
  return {
    ...question,
    options: shuffleOptions(question.options)
  };
};

/**
 * 問題セット全体をランダム化する
 * @param questions 問題の配列
 * @param count 返す問題数
 * @returns ランダム化された問題の配列
 */
export const randomizeQuestions = (
  questions: KanjiQuestion[], 
  count?: number
): KanjiQuestion[] => {
  const randomQuestions = getRandomQuestions(questions, count);
  return randomQuestions.map(randomizeQuestionOptions);
};
