interface QuizProgressProps {
  current: number;
  total: number;
  answered: number;
}

export function QuizProgress({ current, total, answered }: QuizProgressProps) {
  const percentage = total > 0 ? Math.round((answered / total) * 100) : 0;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Question {current + 1} of {total}
        </span>
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {answered}/{total} answered
        </span>
      </div>

      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
