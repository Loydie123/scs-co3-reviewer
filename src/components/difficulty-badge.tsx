import type { QuestionDifficulty } from "@/types";

interface DifficultyBadgeProps {
  difficulty: QuestionDifficulty;
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const styles = {
    easy: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    hard: "bg-red-100 text-red-700",
  };

  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded ${styles[difficulty]}`}>
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </span>
  );
}
