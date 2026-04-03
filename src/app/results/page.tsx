"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar, ResultSummary, ScoreBreakdown, QuestionCard } from "@/components";
import { calculateQuizResult } from "@/lib";
import type { QuizState, QuizResult } from "@/types";

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  useEffect(() => {
    const loadResults = () => {
      const savedState = localStorage.getItem("quizState");
      if (savedState) {
        const state: QuizState = JSON.parse(savedState);
        setQuizState(state);
        const calculatedResult = calculateQuizResult(state);
        setResult(calculatedResult);
      } else {
        router.push("/quiz");
      }
    };
    
    loadResults();
  }, [router]);

  const handleRetake = () => {
    localStorage.removeItem("quizState");
    router.push("/quiz");
  };

  if (!result || !quizState) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-slate-600">Loading results...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Quiz Results
          </h1>

          <div className="space-y-6">
            <ResultSummary result={result} />

            {result.domainBreakdown.length > 0 && (
              <ScoreBreakdown domainBreakdown={result.domainBreakdown} />
            )}

            {result.incorrectQuestions.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-5">
                  Review Incorrect Answers ({result.incorrectQuestions.length})
                </h3>
                <div className="space-y-6">
                  {result.incorrectQuestions.map((questionResult, index) => (
                    <div key={questionResult.question.id}>
                      <div className="text-xs font-medium text-slate-500 mb-3">
                        Question {index + 1}
                      </div>
                      <QuestionCard
                        question={questionResult.question}
                        selectedAnswer={questionResult.userAnswer}
                        onSelectAnswer={() => {}}
                        showResult={true}
                        isSubmitted={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 justify-center pt-4">
              <button
                onClick={handleRetake}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => router.push("/")}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium rounded-lg transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
