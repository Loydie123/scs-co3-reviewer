"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar, ResultSummary, ScoreBreakdown, QuestionCard, Confetti, ScrollToTop } from "@/components";
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
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="h-10 bg-slate-200 rounded w-64 mb-8 animate-pulse"></div>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-8 animate-pulse">
                <div className="h-20 bg-slate-200 rounded-full w-20 mx-auto mb-4"></div>
                <div className="h-8 bg-slate-200 rounded w-48 mx-auto mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-64 mx-auto mb-6"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-slate-100 rounded-xl"></div>
                  <div className="h-24 bg-slate-100 rounded-xl"></div>
                  <div className="h-24 bg-slate-100 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const isPassing = result.percentage >= 72;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      <Confetti show={isPassing} />
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-slate-900">
              Quiz Results
            </h1>
            <button
              onClick={handlePrint}
              className="print:hidden px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Results
            </button>
          </div>

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

            <div className="flex gap-3 justify-center pt-4 print:hidden">
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
      <ScrollToTop />
    </div>
  );
}
