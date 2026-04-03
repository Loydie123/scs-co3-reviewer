import Link from "next/link";
import type { Domain } from "@/types";
import { getDomainBgClass, getDomainTextClass, formatPercentage } from "@/lib";

interface DomainCardProps {
  domain: Domain;
  href?: string;
  onClick?: () => void;
}

export function DomainCard({ domain, href, onClick }: DomainCardProps) {
  const content = (
    <div
      className={`p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all cursor-pointer ${getDomainBgClass(domain.id)}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className={`text-lg font-semibold ${getDomainTextClass(domain.id)}`}>
          {domain.name}
        </h3>
        <span className="text-sm font-medium px-2 py-1 rounded bg-white dark:bg-slate-800">
          {formatPercentage(domain.weight)}
        </span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {domain.description}
      </p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
