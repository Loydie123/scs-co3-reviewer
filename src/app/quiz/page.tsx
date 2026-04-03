"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar, DomainCard, QuestionCard, QuizProgress } from "@/components";
import { domains } from "@/data/domains";
import detectionQuiz from "@/data/quizzes/detection.json";
import { initializeQuiz, shuffleQuestions, answerQuestion, nextQuestion, previousQuestion, submitQuiz, isQuizComplete, getProgress } from "@/lib";
import type { DomainId, QuizState, Question } from "@/types";

export default function QuizPage() {
  const router = useRouter();
  const [selectedDomain, setSelectedDomain] = useState<DomainId | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  const handleStartQuiz = (domainId: DomainId) => {
    let questions: Question[] = [];

    if (domainId === "detection") {
      questions = detectionQuiz as Question[];
    }

    if (questions.length > 0) {
      const shuffled = shuffleQuestions(questions);
      setQuizState(initializeQuiz(shuffled));
      setSelectedDomain(domainId);
    }
  };

  const handleSelectAnswer = (answer: string) => {
    if (!quizState) return;
    const currentQuestion = quizState.questions[quizState.currentIndex];
    setQuizState(answerQuestion(quizState, currentQuestion.id, answer));
  };

  const handleNext = () => {
    if (!quizState) return;
    setQuizState(nextQuestion(quizState));
  };

  const handlePrevious = () => {
    if (!quizState) return;
    setQuizState(previousQuestion(quizState));
  };

  const handleSubmit = () => {
    if (!quizState) return;
    const updatedState = submitQuiz(quizState);
    setQuizState(updatedState);
    
    localStorage.setItem("quizState", JSON.stringify(updatedState));
    router.push("/results");
  };

  if (!quizState) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Practice Quiz
              </h1>
              <p className="text-slate-600">
                Select a domain to start practicing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {domains.map((domain) => (
                <DomainCard
                  key={domain.id}
                  domain={domain}
                  onClick={() => handleStartQuiz(domain.id)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentIndex];
  const progress = getProgress(quizState);
  const isComplete = isQuizComplete(quizState);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <QuizProgress
            current={quizState.currentIndex}
            total={quizState.questions.length}
            answered={progress.answered}
          />

          <div className="mt-6">
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={quizState.answers[currentQuestion.id]}
              onSelectAnswer={handleSelectAnswer}
              showResult={false}
              isSubmitted={false}
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={quizState.currentIndex === 0}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex gap-3">
              {quizState.currentIndex < quizState.questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Next Question
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isComplete}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
