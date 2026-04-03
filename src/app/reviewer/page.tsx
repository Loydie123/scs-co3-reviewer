"use client";

import { useState } from "react";
import { Navbar, DomainCard, TopicSection, ScrollToTop } from "@/components";
import { domains } from "@/data/domains";
import { detectionContent } from "@/data/reviewer/detection";
import { incidentResponseContent } from "@/data/reviewer/incident-response";
import { infrastructureSecurityContent } from "@/data/reviewer/infrastructure-security";
import { iamContent } from "@/data/reviewer/iam";
import { dataProtectionContent } from "@/data/reviewer/data-protection";
import { governanceContent } from "@/data/reviewer/governance";
import type { DomainId } from "@/types";

export default function ReviewerPage() {
  const [selectedDomain, setSelectedDomain] = useState<DomainId | null>(null);

  const reviewerContentMap: Partial<Record<DomainId, typeof detectionContent>> = {
    detection: detectionContent,
    "incident-response": incidentResponseContent,
    "infrastructure-security": infrastructureSecurityContent,
    iam: iamContent,
    "data-protection": dataProtectionContent,
    governance: governanceContent,
  };

  const currentContent = selectedDomain ? reviewerContentMap[selectedDomain] : null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Study Materials
            </h1>
            <p className="text-slate-600">
              Select a domain to review key concepts and AWS services
            </p>
          </div>

          {!selectedDomain ? (
            <div className="grid md:grid-cols-2 gap-4">
              {domains.map((domain) => (
                <DomainCard
                  key={domain.id}
                  domain={domain}
                  onClick={() => setSelectedDomain(domain.id)}
                />
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={() => setSelectedDomain(null)}
                className="mb-6 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to domains
              </button>

              {currentContent ? (
                <div>
                  <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {domains.find((d) => d.id === selectedDomain)?.name}
                    </h2>
                    <p className="text-slate-600">
                      {domains.find((d) => d.id === selectedDomain)?.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {currentContent.sections.map((section) => (
                      <TopicSection key={section.id} section={section} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <p className="text-sm text-amber-800">
                    Content for this domain is coming soon.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
}
