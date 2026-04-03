import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            About This App
          </h1>

          <div className="space-y-8">
            <section className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                What is this?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                This is a free, open-source study tool designed to help you prepare for the 
                <strong> AWS Certified Security - Specialty (SCS-C03)</strong> exam.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The app provides comprehensive study materials and practice questions covering 
                all six exam domains with varying difficulty levels.
              </p>
            </section>

            <section className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Features
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-600">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>120+ Practice Questions</strong> with detailed explanations</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Study Materials</strong> organized by exam domain</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Mock Exam Mode</strong> with 65 questions and 170-minute timer</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Difficulty Levels</strong> (Easy, Medium, Hard)</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Multiple Choice Support</strong> for realistic exam practice</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Progress Auto-Save</strong> to resume quizzes anytime</span>
                </li>
              </ul>
            </section>

            <section className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Exam Domains Covered
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <div className="font-semibold text-slate-900">Detection</div>
                    <div className="text-sm text-slate-500">16%</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <div className="font-semibold text-slate-900">Incident Response</div>
                    <div className="text-sm text-slate-500">14%</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏗️</span>
                  <div>
                    <div className="font-semibold text-slate-900">Infrastructure Security</div>
                    <div className="text-sm text-slate-500">18%</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <div className="font-semibold text-slate-900">Identity & Access Management</div>
                    <div className="text-sm text-slate-500">20%</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <div className="font-semibold text-slate-900">Data Protection</div>
                    <div className="text-sm text-slate-500">18%</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <div>
                    <div className="font-semibold text-slate-900">Governance</div>
                    <div className="text-sm text-slate-500">14%</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                Important Disclaimer
              </h2>
              <div className="space-y-3 text-sm text-amber-800">
                <p>
                  This is an <strong>unofficial study tool</strong> created for educational and review purposes only.
                </p>
                <p>
                  This app is <strong>not affiliated with, endorsed by, or published by Amazon Web Services (AWS)</strong>.
                </p>
                <p>
                  The practice questions are designed to help you study and are not actual exam questions. 
                  Always refer to the official AWS exam guide for the most current exam objectives and requirements.
                </p>
                <p>
                  AWS, Amazon Web Services, and all related marks are trademarks of Amazon.com, Inc. or its affiliates.
                </p>
              </div>
            </section>

            <section className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  Next.js 16
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  React 19
                </span>
              </div>
            </section>

            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
