import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-slate-900 dark:text-slate-50">
              AWS SCS-C03
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/reviewer"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors"
            >
              Reviewer
            </Link>
            <Link
              href="/quiz"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors"
            >
              Quiz
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
