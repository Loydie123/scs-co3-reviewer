"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar, DomainCard, QuestionCard, QuizProgress, QuestionNavigator, ConfirmDialog } from "@/components";
import { domains } from "@/data/domains";
import detectionQuiz from "@/data/quizzes/detection.json";
import incidentResponseQuiz from "@/data/quizzes/incident-response.json";
import infrastructureSecurityQuiz from "@/data/quizzes/infrastructure-security.json";
import iamQuiz from "@/data/quizzes/iam.json";
import dataProtectionQuiz from "@/data/quizzes/data-protection.json";
import governanceQuiz from "@/data/quizzes/governance.json";
import mixedQuiz from "@/data/quizzes/mixed.json";
import { initializeQuiz, shuffleQuestions, answerQuestion, nextQuestion, previousQuestion, submitQuiz, getProgress } from "@/lib";
import type { DomainId, QuizState, Question } from "@/types";

export default function QuizPage() {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<"all" | "easy" | "medium" | "hard">("all");

  useEffect(() => {
    const loadSavedQuiz = () => {
      const savedState = localStorage.getItem("quizInProgress");
      if (savedState) {
        try {
          const state: QuizState = JSON.parse(savedState);
          return state;
        } catch {
          localStorage.removeItem("quizInProgress");
        }
      }
      return null;
    };

    const saved = loadSavedQuiz();
    
    Promise.resolve().then(() => {
      if (saved) {
        setQuizState(saved);
      }
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (quizState && !quizState.isSubmitted) {
      localStorage.setItem("quizInProgress", JSON.stringify(quizState));
    }
  }, [quizState]);

  useEffect(() => {
    if (!quizState || quizState.isSubmitted) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && quizState.currentIndex > 0) {
        setQuizState(previousQuestion(quizState));
      } else if (e.key === "ArrowRight" && quizState.currentIndex < quizState.questions.length - 1) {
        setQuizState(nextQuestion(quizState));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [quizState]);

  const handleStartQuiz = (domainId: DomainId | "mixed") => {
    let questions: Question[] = [];

    if (domainId === "mixed") {
      questions = mixedQuiz as unknown as Question[];
    } else {
      const quizMap: Record<DomainId, Question[]> = {
        detection: detectionQuiz as unknown as Question[],
        "incident-response": incidentResponseQuiz as unknown as Question[],
        "infrastructure-security": infrastructureSecurityQuiz as unknown as Question[],
        iam: iamQuiz as unknown as Question[],
        "data-protection": dataProtectionQuiz as unknown as Question[],
        governance: governanceQuiz as unknown as Question[],
      };

      questions = quizMap[domainId] || [];
    }

    // Apply difficulty filter
    if (difficultyFilter !== "all") {
      questions = questions.filter(q => q.difficulty === difficultyFilter);
    }

    if (questions.length > 0) {
      const shuffled = shuffleQuestions(questions);
      const newState = initializeQuiz(shuffled);
      setQuizState(newState);
      localStorage.removeItem("quizInProgress");
    }
  };

  const handleSelectAnswer = (answer: string | string[]) => {
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

  const handleGoToQuestion = (index: number) => {
    if (!quizState) return;
    setQuizState({ ...quizState, currentIndex: index });
  };

  const handleSubmitClick = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmSubmit = () => {
    if (!quizState) return;
    const updatedState = submitQuiz(quizState);
    setQuizState(updatedState);
    
    localStorage.setItem("quizState", JSON.stringify(updatedState));
    localStorage.removeItem("quizInProgress");
    setShowConfirmDialog(false);
    router.push("/results");
  };

  const handleResumeQuiz = () => {
    const savedState = localStorage.getItem("quizInProgress");
    if (savedState) {
      const state: QuizState = JSON.parse(savedState);
      setQuizState(state);
    }
  };

  const handleNewQuiz = () => {
    localStorage.removeItem("quizInProgress");
    setQuizState(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <div className="h-10 bg-slate-200 rounded w-64 mb-2 animate-pulse"></div>
              <div className="h-6 bg-slate-200 rounded w-96 animate-pulse"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse p-6 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <div className="h-5 bg-slate-200 rounded w-2/3"></div>
                    <div className="h-5 bg-slate-200 rounded w-12"></div>
                  </div>
                  <div className="h-4 bg-slate-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  const hasSavedProgress = quizState !== null;

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

            {hasSavedProgress && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Resume Quiz</h3>
                    <p className="text-sm text-blue-700">You have a quiz in progress</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleResumeQuiz}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Resume
                    </button>
                    <button
                      onClick={handleNewQuiz}
                      className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition-colors"
                    >
                      Start New
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Filter by Difficulty</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDifficultyFilter("all")}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      difficultyFilter === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setDifficultyFilter("easy")}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      difficultyFilter === "easy"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Easy
                  </button>
                  <button
                    onClick={() => setDifficultyFilter("medium")}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      difficultyFilter === "medium"
                        ? "bg-amber-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => setDifficultyFilter("hard")}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      difficultyFilter === "hard"
                        ? "bg-red-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Hard
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleStartQuiz("mixed")}
                className="w-full p-6 bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      Mixed Quiz {difficultyFilter !== "all" && `(${difficultyFilter})`}
                    </h3>
                    <p className="text-sm text-slate-600">
                      Questions from all 6 domains
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Or choose by domain
              </h2>
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_250px] gap-6">
            <div>
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
                      onClick={handleSubmitClick}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Submit Quiz
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <QuestionNavigator
                quizState={quizState}
                onGoToQuestion={handleGoToQuestion}
              />
            </div>
          </div>
        </div>
      </main>

      <ConfirmDialog
        isOpen={showConfirmDialog}
        title="Submit Quiz?"
        message={`You have answered ${progress.answered} out of ${quizState.questions.length} questions. Are you sure you want to submit?`}
        confirmText="Submit"
        cancelText="Keep Working"
        type="info"
        onConfirm={handleConfirmSubmit}
        onCancel={() => setShowConfirmDialog(false)}
      />
    </div>
  );
}
