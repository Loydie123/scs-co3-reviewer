import type { QuizResult } from "@/types";
import { getScoreGrade, formatPercentage } from "@/lib";

interface ResultSummaryProps {
  result: QuizResult;
}

export function ResultSummary({ result }: ResultSummaryProps) {
  const grade = getScoreGrade(result.percentage);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          Quiz Complete!
        </h2>
        <p className="text-slate-600 dark:text-slate-400">{grade.message}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <div className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2">
            {formatPercentage(result.percentage)}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Score</div>
        </div>

        <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-4xl font-bold text-green-700 dark:text-green-300 mb-2">
            {result.correctAnswers}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Correct</div>
        </div>

        <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <div className="text-4xl font-bold text-red-700 dark:text-red-300 mb-2">
            {result.incorrectAnswers}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Incorrect</div>
        </div>
      </div>

      <div className="text-center">
        <span
          className={`inline-block px-6 py-2 rounded-full text-lg font-semibold ${
            grade.color === "green"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
              : grade.color === "blue"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
              : grade.color === "yellow"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
              : grade.color === "orange"
              ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
          }`}
        >
          {grade.grade}
        </span>
      </div>
    </div>
  );
}
