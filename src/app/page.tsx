import Link from "next/link";
import { domains } from "@/data/domains";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mb-6">
              AWS Certified Security - Specialty
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-4 tracking-tight">
              SCS-C03 Reviewer
            </h1>
            <p className="text-lg text-slate-600">
              Master the 6 security domains with focused study materials and practice quizzes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Link href="/reviewer" className="group">
              <div className="h-full bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                  Study Materials
                </h2>
                <p className="text-slate-600 mb-4">
                  Review key concepts, AWS services, and exam tips for each domain
                </p>
                <div className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Start reviewing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/quiz" className="group">
              <div className="h-full bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                  Practice Quizzes
                </h2>
                <p className="text-slate-600 mb-4">
                  Test your knowledge with practice questions and detailed explanations
                </p>
                <div className="text-emerald-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Take a quiz
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Exam Domains
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {domains.map((domain) => (
                <div
                  key={domain.id}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-slate-900 text-sm leading-tight">
                      {domain.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-0.5 rounded">
                      {domain.weight}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {domain.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-500">
              Unofficial study tool • Not affiliated with AWS
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
