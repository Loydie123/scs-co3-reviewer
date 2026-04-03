"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar, QuestionCard, QuizProgress, QuestionNavigator } from "@/components";
import detectionQuiz from "@/data/quizzes/detection.json";
import incidentResponseQuiz from "@/data/quizzes/incident-response.json";
import infrastructureSecurityQuiz from "@/data/quizzes/infrastructure-security.json";
import iamQuiz from "@/data/quizzes/iam.json";
import dataProtectionQuiz from "@/data/quizzes/data-protection.json";
import governanceQuiz from "@/data/quizzes/governance.json";
import { initializeQuiz, shuffleQuestions, answerQuestion, nextQuestion, previousQuestion, submitQuiz, isQuizComplete, getProgress } from "@/lib";
import type { QuizState, Question } from "@/types";

const EXAM_DURATION = 170 * 60 * 1000;

export default function MockExamPage() {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(EXAM_DURATION);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted || !quizState) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1000) {
          handleSubmit();
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarted, quizState]);

  const handleStartExam = () => {
    const allQuestions: Question[] = [
      ...detectionQuiz,
      ...incidentResponseQuiz,
      ...infrastructureSecurityQuiz,
      ...iamQuiz,
      ...dataProtectionQuiz,
      ...governanceQuiz,
    ] as Question[];

    const shuffled = shuffleQuestions(allQuestions);
    const examQuestions = shuffled.slice(0, 65);

    setQuizState(initializeQuiz(examQuestions));
    setIsStarted(true);
    setTimeRemaining(EXAM_DURATION);
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

  const handleSubmit = () => {
    if (!quizState) return;
    const updatedState = submitQuiz(quizState);
    setQuizState(updatedState);
    
    localStorage.setItem("quizState", JSON.stringify(updatedState));
    router.push("/results");
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!isStarted || !quizState) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Mock Exam Mode
              </h1>
              <p className="text-slate-600 mb-8">
                Simulate the real AWS SCS-C03 exam experience
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                Exam Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-600">Number of Questions</span>
                  <span className="font-semibold text-slate-900">65</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-600">Time Limit</span>
                  <span className="font-semibold text-slate-900">170 minutes</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-600">Question Types</span>
                  <span className="font-semibold text-slate-900">Multiple choice & Multiple response</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-600">Domains Covered</span>
                  <span className="font-semibold text-slate-900">All 6 domains</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-amber-900 mb-2">Important Notes</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• The timer will start immediately when you begin</li>
                <li>• You can navigate between questions freely</li>
                <li>• The exam will auto-submit when time expires</li>
                <li>• Review all questions before submitting</li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={handleStartExam}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition-colors"
              >
                Start Mock Exam
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentIndex];
  const progress = getProgress(quizState);
  const isComplete = isQuizComplete(quizState);
  const timeWarning = timeRemaining < 10 * 60 * 1000;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="sticky top-16 z-40 bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div className="text-sm text-slate-600">
              Mock Exam • {progress.answered}/{quizState.questions.length} answered
            </div>
            <div className={`text-lg font-mono font-semibold ${
              timeWarning ? "text-red-600" : "text-slate-900"
            }`}>
              {formatTime(timeRemaining)}
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_250px] gap-6">
            <div>
              <div className="mb-6">
                <QuestionCard
                  question={currentQuestion}
                  selectedAnswer={quizState.answers[currentQuestion.id]}
                  onSelectAnswer={handleSelectAnswer}
                  showResult={false}
                  isSubmitted={false}
                />
              </div>

              <div className="flex items-center justify-between">
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
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Submit Exam
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
    </div>
  );
}
