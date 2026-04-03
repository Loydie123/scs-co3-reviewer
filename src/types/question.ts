import type { DomainId } from "./domain";

export type QuestionDifficulty = "easy" | "medium" | "hard";
export type QuestionType = "single" | "multiple";

export interface Question {
  id: string;
  domain: DomainId;
  question: string;
  choices: string[];
  answer: string | string[];
  explanation: string;
  difficulty: QuestionDifficulty;
  type: QuestionType;
}

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  answers: Record<string, string | string[]>;
  isSubmitted: boolean;
  startTime?: number;
  endTime?: number;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  score: number;
  percentage: number;
  domainBreakdown: DomainPerformance[];
  incorrectQuestions: QuestionResult[];
}

export interface DomainPerformance {
  domain: DomainId;
  total: number;
  correct: number;
  percentage: number;
}

export interface QuestionResult {
  question: Question;
  userAnswer: string | string[];
  isCorrect: boolean;
}

export interface MockExamState extends QuizState {
  timeLimit: number;
  timeRemaining: number;
}
