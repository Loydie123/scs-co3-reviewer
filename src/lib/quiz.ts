import type { Question, QuizState } from "@/types";

export function initializeQuiz(questions: Question[], shuffleAnswers: boolean = true): QuizState {
  const processedQuestions = shuffleAnswers ? questions.map(shuffleQuestionChoices) : questions;
  
  return {
    questions: processedQuestions,
    currentIndex: 0,
    answers: {},
    isSubmitted: false,
  };
}

export function shuffleQuestions(questions: Question[]): Question[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function shuffleQuestionChoices(question: Question): Question {
  const shuffledChoices = [...question.choices];
  for (let i = shuffledChoices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
  }
  
  return {
    ...question,
    choices: shuffledChoices,
  };
}

export function answerQuestion(
  state: QuizState,
  questionId: string,
  answer: string | string[]
): QuizState {
  return {
    ...state,
    answers: {
      ...state.answers,
      [questionId]: answer,
    },
  };
}

export function nextQuestion(state: QuizState): QuizState {
  if (state.currentIndex < state.questions.length - 1) {
    return {
      ...state,
      currentIndex: state.currentIndex + 1,
    };
  }
  return state;
}

export function previousQuestion(state: QuizState): QuizState {
  if (state.currentIndex > 0) {
    return {
      ...state,
      currentIndex: state.currentIndex - 1,
    };
  }
  return state;
}

export function goToQuestion(state: QuizState, index: number): QuizState {
  if (index >= 0 && index < state.questions.length) {
    return {
      ...state,
      currentIndex: index,
    };
  }
  return state;
}

export function submitQuiz(state: QuizState): QuizState {
  return {
    ...state,
    isSubmitted: true,
  };
}

export function isQuizComplete(state: QuizState): boolean {
  return Object.keys(state.answers).length === state.questions.length;
}

export function getProgress(state: QuizState): {
  answered: number;
  total: number;
  percentage: number;
} {
  const answered = Object.keys(state.answers).length;
  const total = state.questions.length;
  const percentage = total > 0 ? Math.round((answered / total) * 100) : 0;

  return { answered, total, percentage };
}

export function createReviewQuiz(incorrectQuestions: Question[]): QuizState {
  return initializeQuiz(incorrectQuestions, false);
}

export function filterQuestionsByDifficulty(
  questions: Question[],
  difficulty: "easy" | "medium" | "hard"
): Question[] {
  return questions.filter((q) => q.difficulty === difficulty);
}
