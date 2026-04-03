import type { QuizResult } from "@/types";
import { getScoreGrade, formatPercentage } from "@/lib";

interface ResultSummaryProps {
  result: QuizResult;
}

export function ResultSummary({ result }: ResultSummaryProps) {
  const grade = getScoreGrade(result.percentage);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-4">
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Quiz Complete
        </h2>
        <p className="text-sm text-slate-600">{grade.message}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-5 bg-slate-50 rounded-xl">
          <div className="text-3xl font-bold text-slate-900 mb-1">
            {formatPercentage(result.percentage)}
          </div>
          <div className="text-xs text-slate-500">Score</div>
        </div>

        <div className="text-center p-5 bg-emerald-50 rounded-xl">
          <div className="text-3xl font-bold text-emerald-600 mb-1">
            {result.correctAnswers}
          </div>
          <div className="text-xs text-slate-500">Correct</div>
        </div>

        <div className="text-center p-5 bg-red-50 rounded-xl">
          <div className="text-3xl font-bold text-red-600 mb-1">
            {result.incorrectAnswers}
          </div>
          <div className="text-xs text-slate-500">Incorrect</div>
        </div>
      </div>

      <div className="text-center">
        <span
          className={`inline-block px-5 py-2 rounded-full text-sm font-semibold ${
            grade.color === "green"
              ? "bg-emerald-100 text-emerald-700"
              : grade.color === "blue"
              ? "bg-blue-100 text-blue-700"
              : grade.color === "yellow"
              ? "bg-yellow-100 text-yellow-700"
              : grade.color === "orange"
              ? "bg-orange-100 text-orange-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {grade.grade}
        </span>
      </div>
    </div>
  );
}
