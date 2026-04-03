import type { DomainId } from "./domain";

export interface Question {
  id: string;
  domain: DomainId;
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
}

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  answers: Record<string, string>;
  isSubmitted: boolean;
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
  userAnswer: string;
  isCorrect: boolean;
}
