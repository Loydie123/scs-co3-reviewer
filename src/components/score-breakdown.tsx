import type { DomainPerformance } from "@/types";
import { domains } from "@/data/domains";
import { formatPercentage, getDomainTextClass } from "@/lib";

interface ScoreBreakdownProps {
  domainBreakdown: DomainPerformance[];
}

export function ScoreBreakdown({ domainBreakdown }: ScoreBreakdownProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
        Performance by Domain
      </h3>

      <div className="space-y-4">
        {domainBreakdown.map((performance) => {
          const domain = domains.find((d) => d.id === performance.domain);
          if (!domain) return null;

          return (
            <div key={performance.domain} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`font-medium ${getDomainTextClass(domain.id)}`}>
                  {domain.name}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {performance.correct}/{performance.total} ({formatPercentage(performance.percentage)})
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    performance.percentage >= 80
                      ? "bg-green-600"
                      : performance.percentage >= 60
                      ? "bg-yellow-600"
                      : "bg-red-600"
                  }`}
                  style={{ width: `${performance.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
