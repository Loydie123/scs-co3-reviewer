import Link from "next/link";
import type { Domain } from "@/types";

interface DomainCardProps {
  domain: Domain;
  href?: string;
  onClick?: () => void;
}

export function DomainCard({ domain, href, onClick }: DomainCardProps) {
  const content = (
    <div
      className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          {domain.name}
        </h3>
        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
          {domain.weight}%
        </span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">
        {domain.description}
      </p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
