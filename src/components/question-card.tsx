"use client";

import type { Question } from "@/types";

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string | string[];
  onSelectAnswer: (answer: string | string[]) => void;
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
  const isMultiple = question.type === "multiple";
  const selectedArray = Array.isArray(selectedAnswer) ? selectedAnswer : [];
  const correctArray = Array.isArray(question.answer) ? question.answer : [question.answer];
  
  let isCorrect = false;
  if (isMultiple && Array.isArray(selectedAnswer) && Array.isArray(question.answer)) {
    const sortedAnswer = [...question.answer].sort();
    const sortedUserAnswer = [...selectedAnswer].sort();
    isCorrect = JSON.stringify(sortedAnswer) === JSON.stringify(sortedUserAnswer);
  } else {
    isCorrect = selectedAnswer === question.answer;
  }

  const handleChoiceClick = (choice: string) => {
    if (isSubmitted) return;
    
    if (isMultiple) {
      const currentSelected = Array.isArray(selectedAnswer) ? selectedAnswer : [];
      if (currentSelected.includes(choice)) {
        onSelectAnswer(currentSelected.filter(c => c !== choice));
      } else {
        onSelectAnswer([...currentSelected, choice]);
      }
    } else {
      onSelectAnswer(choice);
    }
  };

  const requiredAnswers = isMultiple && Array.isArray(question.answer) ? question.answer.length : 1;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-slate-900 leading-relaxed">
            {question.question}
          </h3>
          {isMultiple && (
            <p className="text-sm font-semibold text-blue-600 mt-2">
              Select {requiredAnswers === 2 ? "TWO" : requiredAnswers === 3 ? "THREE" : `${requiredAnswers}`} answers
            </p>
          )}
        </div>
        <div className="flex gap-2 ml-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded ${
            question.difficulty === "easy" 
              ? "bg-green-100 text-green-700"
              : question.difficulty === "medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}>
            {question.difficulty}
          </span>
          {isMultiple && (
            <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-700">
              Multiple
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {question.choices.map((choice, index) => {
          const isSelected = isMultiple 
            ? selectedArray.includes(choice)
            : selectedAnswer === choice;
          const isCorrectAnswer = correctArray.includes(choice);
          
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
              onClick={() => handleChoiceClick(choice)}
              disabled={isSubmitted}
              className={`w-full text-left p-4 rounded-lg border transition-all ${bgClass} ${borderClass} ${hoverClass} ${
                isSubmitted ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <div className="flex items-start gap-3">
                {isMultiple ? (
                  <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                    isSelected ? "bg-blue-600 border-blue-600" : "border-slate-300"
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                ) : (
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700">
                    {String.fromCharCode(65 + index)}
                  </span>
                )}
                <span className="text-sm text-slate-900 pt-0.5">{choice}</span>
              </div>
            </button>
          );
        })}
      </div>

      {isSubmitted && showResult && (
        <div className="mt-6 space-y-4">
          <div className={`p-5 rounded-xl border ${isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
            <p className={`text-sm font-semibold mb-2 ${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
              {isCorrect ? "✓ Correct" : "✗ Incorrect"}
            </p>
            {isMultiple && (
              <p className="text-xs text-slate-600 mb-2">
                Correct answer(s): {correctArray.join(", ")}
              </p>
            )}
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold">Why this is correct: </span>
              {question.explanation}
            </p>
          </div>

          {question.why_not && Object.keys(question.why_not).length > 0 && (
            <div className="p-5 rounded-xl border bg-slate-50 border-slate-200">
              <p className="text-sm font-semibold text-slate-900 mb-3">
                Why other options are incorrect:
              </p>
              <div className="space-y-3">
                {Object.entries(question.why_not).map(([option, reason]) => (
                  <div key={option} className="text-sm">
                    <p className="font-medium text-slate-700 mb-1">❌ {option}</p>
                    <p className="text-slate-600 leading-relaxed pl-5">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
