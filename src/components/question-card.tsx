"use client";

import type { Question } from "@/types";

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onSelectAnswer: (answer: string) => void;
  showResult?: boolean;
  isSubmitted?: boolean;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult = false,
  isSubmitted = false,
}: QuestionCardProps) {
  const isCorrect = selectedAnswer === question.answer;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-6">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.choices.map((choice, index) => {
          const isSelected = selectedAnswer === choice;
          const isCorrectAnswer = choice === question.answer;
          
          let bgClass = "bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600";
          let borderClass = "border-slate-200 dark:border-slate-600";
          
          if (isSubmitted && showResult) {
            if (isCorrectAnswer) {
              bgClass = "bg-green-50 dark:bg-green-900/20";
              borderClass = "border-green-500";
            } else if (isSelected && !isCorrect) {
              bgClass = "bg-red-50 dark:bg-red-900/20";
              borderClass = "border-red-500";
            }
          } else if (isSelected) {
            bgClass = "bg-blue-50 dark:bg-blue-900/20";
            borderClass = "border-blue-500";
          }

          return (
            <button
              key={index}
              onClick={() => !isSubmitted && onSelectAnswer(choice)}
              disabled={isSubmitted}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgClass} ${borderClass} ${
                isSubmitted ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-slate-900 dark:text-slate-50">{choice}</span>
              </div>
            </button>
          );
        })}
      </div>

      {isSubmitted && showResult && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? "bg-green-50 dark:bg-green-900/20" : "bg-red-50 dark:bg-red-900/20"}`}>
          <p className={`font-semibold mb-2 ${isCorrect ? "text-green-900 dark:text-green-300" : "text-red-900 dark:text-red-300"}`}>
            {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Explanation:</strong> {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
