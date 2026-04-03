import type { QuizState } from "@/types";

interface QuestionNavigatorProps {
  quizState: QuizState;
  onGoToQuestion: (index: number) => void;
}

export function QuestionNavigator({ quizState, onGoToQuestion }: QuestionNavigatorProps) {
  const answeredCount = Object.keys(quizState.answers).length;
  const totalCount = quizState.questions.length;
  const percentage = Math.round((answeredCount / totalCount) * 100);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-slate-900 mb-2">
          Question Navigator
        </h3>
        <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
          <span>{answeredCount} / {totalCount} answered</span>
          <span className="font-semibold text-blue-600">{percentage}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 mb-4">
        {quizState.questions.map((question, index) => {
          const isAnswered = !!quizState.answers[question.id];
          const isCurrent = index === quizState.currentIndex;

          return (
            <button
              key={question.id}
              onClick={() => onGoToQuestion(index)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                isCurrent
                  ? "bg-blue-600 text-white ring-2 ring-blue-300"
                  : isAnswered
                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded"></div>
          <span className="text-slate-600">Current</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-100 border border-emerald-200 rounded"></div>
          <span className="text-slate-600">Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-slate-100 border border-slate-200 rounded"></div>
          <span className="text-slate-600">Unanswered</span>
        </div>
      </div>
    </div>
  );
}
