"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold text-slate-900">
              SCS-C03
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
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

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/reviewer"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Reviewer
              </Link>
              <Link
                href="/quiz"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Quiz
              </Link>
              <Link
                href="/mock-exam"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Mock Exam
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
