import type { Question, QuizState, QuizResult, DomainPerformance, QuestionResult, DomainId } from "@/types";

export function calculateQuizResult(state: QuizState): QuizResult {
  const questionResults: QuestionResult[] = state.questions.map((question) => {
    const userAnswer = state.answers[question.id] || (question.type === "multiple" ? [] : "");
    
    let isCorrect = false;
    if (question.type === "multiple" && Array.isArray(question.answer) && Array.isArray(userAnswer)) {
      const sortedAnswer = [...question.answer].sort();
      const sortedUserAnswer = [...userAnswer].sort();
      isCorrect = JSON.stringify(sortedAnswer) === JSON.stringify(sortedUserAnswer);
    } else {
      isCorrect = userAnswer === question.answer;
    }

    return {
      question,
      userAnswer,
      isCorrect,
    };
  });

  const correctAnswers = questionResults.filter((result) => result.isCorrect).length;
  const incorrectAnswers = questionResults.filter((result) => !result.isCorrect).length;
  const totalQuestions = state.questions.length;
  const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  const domainBreakdown = calculateDomainPerformance(questionResults);
  const incorrectQuestions = questionResults.filter((result) => !result.isCorrect);

  return {
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    score: correctAnswers,
    percentage,
    domainBreakdown,
    incorrectQuestions,
  };
}

function calculateDomainPerformance(results: QuestionResult[]): DomainPerformance[] {
  const domainMap = new Map<DomainId, { total: number; correct: number }>();

  results.forEach((result) => {
    const domain = result.question.domain;
    const current = domainMap.get(domain) || { total: 0, correct: 0 };

    domainMap.set(domain, {
      total: current.total + 1,
      correct: current.correct + (result.isCorrect ? 1 : 0),
    });
  });

  const domainPerformance: DomainPerformance[] = [];

  domainMap.forEach((stats, domain) => {
    const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

    domainPerformance.push({
      domain,
      total: stats.total,
      correct: stats.correct,
      percentage,
    });
  });

  return domainPerformance.sort((a, b) => b.percentage - a.percentage);
}

export function getScoreGrade(percentage: number): {
  grade: string;
  message: string;
  color: string;
} {
  if (percentage >= 90) {
    return {
      grade: "Excellent",
      message: "Outstanding performance! You're well-prepared for the exam.",
      color: "green",
    };
  } else if (percentage >= 80) {
    return {
      grade: "Very Good",
      message: "Great job! Keep reviewing to maintain this level.",
      color: "blue",
    };
  } else if (percentage >= 70) {
    return {
      grade: "Good",
      message: "Good progress. Focus on weak areas to improve further.",
      color: "yellow",
    };
  } else if (percentage >= 60) {
    return {
      grade: "Fair",
      message: "You're getting there. More practice needed.",
      color: "orange",
    };
  } else {
    return {
      grade: "Needs Improvement",
      message: "Keep studying. Review the materials and try again.",
      color: "red",
    };
  }
}

export function isPassingScore(percentage: number, passingThreshold: number = 70): boolean {
  return percentage >= passingThreshold;
}
