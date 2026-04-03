import type { QuizState } from "@/types";

interface QuestionNavigatorProps {
  quizState: QuizState;
  onGoToQuestion: (index: number) => void;
}

export function QuestionNavigator({ quizState, onGoToQuestion }: QuestionNavigatorProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-slate-900 mb-4">
        Question Navigator
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {quizState.questions.map((question, index) => {
          const isAnswered = !!quizState.answers[question.id];
          const isCurrent = index === quizState.currentIndex;

          return (
            <button
              key={question.id}
              onClick={() => onGoToQuestion(index)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                isCurrent
                  ? "bg-blue-600 text-white"
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
    </div>
  );
}
