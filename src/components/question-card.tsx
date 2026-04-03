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
    <div className="bg-white border border-slate-200 rounded-xl p-8">
      <h3 className="text-lg font-medium text-slate-900 mb-6 leading-relaxed">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.choices.map((choice, index) => {
          const isSelected = selectedAnswer === choice;
          const isCorrectAnswer = choice === question.answer;
          
          let bgClass = "bg-slate-50";
          let borderClass = "border-slate-200";
          let hoverClass = "hover:bg-slate-100";
          
          if (isSubmitted && showResult) {
            if (isCorrectAnswer) {
              bgClass = "bg-emerald-50";
              borderClass = "border-emerald-500";
              hoverClass = "";
            } else if (isSelected && !isCorrect) {
              bgClass = "bg-red-50";
              borderClass = "border-red-500";
              hoverClass = "";
            }
          } else if (isSelected) {
            bgClass = "bg-blue-50";
            borderClass = "border-blue-500";
          }

          return (
            <button
              key={index}
              onClick={() => !isSubmitted && onSelectAnswer(choice)}
              disabled={isSubmitted}
              className={`w-full text-left p-4 rounded-lg border transition-all ${bgClass} ${borderClass} ${hoverClass} ${
                isSubmitted ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-sm text-slate-900 pt-0.5">{choice}</span>
              </div>
            </button>
          );
        })}
      </div>

      {isSubmitted && showResult && (
        <div className={`mt-6 p-5 rounded-xl border ${isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
          <p className={`text-sm font-semibold mb-2 ${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
            {isCorrect ? "✓ Correct" : "✗ Incorrect"}
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
