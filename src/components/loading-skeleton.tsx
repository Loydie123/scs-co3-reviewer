export function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-slate-200 rounded w-3/4"></div>
      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
      <div className="space-y-3 mt-6">
        <div className="h-20 bg-slate-200 rounded"></div>
        <div className="h-20 bg-slate-200 rounded"></div>
        <div className="h-20 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}

export function DomainCardSkeleton() {
  return (
    <div className="animate-pulse p-6 rounded-xl border border-slate-200 bg-white">
      <div className="flex items-start justify-between mb-3">
        <div className="h-5 bg-slate-200 rounded w-2/3"></div>
        <div className="h-5 bg-slate-200 rounded w-12"></div>
      </div>
      <div className="h-4 bg-slate-200 rounded w-full"></div>
    </div>
  );
}
