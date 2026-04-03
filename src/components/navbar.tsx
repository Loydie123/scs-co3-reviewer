import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold text-slate-900">
              SCS-C03
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/reviewer"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Reviewer
            </Link>
            <Link
              href="/quiz"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Quiz
            </Link>
            <Link
              href="/mock-exam"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Mock Exam
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
