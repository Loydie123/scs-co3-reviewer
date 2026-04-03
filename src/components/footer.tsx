import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Study</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/reviewer" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    Reviewer
                  </Link>
                </li>
                <li>
                  <Link href="/quiz" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    Practice Quiz
                  </Link>
                </li>
                <li>
                  <Link href="/mock-exam" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    Mock Exam
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    About This App
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://aws.amazon.com/certification/certified-security-specialty/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Official AWS Exam Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Exam Domains</h3>
              <ul className="space-y-2">
                <li className="text-sm text-slate-600">Detection (16%)</li>
                <li className="text-sm text-slate-600">Incident Response (14%)</li>
                <li className="text-sm text-slate-600">Infrastructure (18%)</li>
                <li className="text-sm text-slate-600">IAM (20%)</li>
                <li className="text-sm text-slate-600">Data Protection (18%)</li>
                <li className="text-sm text-slate-600">Governance (14%)</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center">
            <p className="text-sm text-slate-500 mb-2">
              Unofficial study tool • Not affiliated with AWS
            </p>
            <p className="text-xs text-slate-400">
              AWS, Amazon Web Services, and all related marks are trademarks of Amazon.com, Inc. or its affiliates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
