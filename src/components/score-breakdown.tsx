import type { DomainPerformance } from "@/types";
import { domains } from "@/data/domains";
import { formatPercentage } from "@/lib";

interface ScoreBreakdownProps {
  domainBreakdown: DomainPerformance[];
}

export function ScoreBreakdown({ domainBreakdown }: ScoreBreakdownProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-5">
        Performance by Domain
      </h3>

      <div className="space-y-5">
        {domainBreakdown.map((performance) => {
          const domain = domains.find((d) => d.id === performance.domain);
          if (!domain) return null;

          return (
            <div key={performance.domain} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-900">
                  {domain.name}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {performance.correct}/{performance.total} • {formatPercentage(performance.percentage)}
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    performance.percentage >= 80
                      ? "bg-emerald-500"
                      : performance.percentage >= 60
                      ? "bg-amber-500"
                      : "bg-red-500"
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
