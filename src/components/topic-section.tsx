"use client";

import { useState } from "react";
import type { ReviewerSection } from "@/types";

interface TopicSectionProps {
  section: ReviewerSection;
}

export function TopicSection({ section }: TopicSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <h3 className="text-base font-semibold text-slate-900 text-left">
          {section.title}
        </h3>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-6 py-5 border-t border-slate-200">
          <div className="space-y-4">
            {section.content.map((paragraph, index) => (
              <p key={index} className="text-sm text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {section.services && section.services.length > 0 && (
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">
                  Key AWS Services
                </h4>
                <div className="flex flex-wrap gap-2">
                  {section.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {section.keyPoints && section.keyPoints.length > 0 && (
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">
                  Key Points
                </h4>
                <ul className="space-y-2">
                  {section.keyPoints.map((point, index) => (
                    <li key={index} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.examTips && section.examTips.length > 0 && (
              <div className="pt-4 mt-4 border-t border-slate-200">
                <h4 className="text-sm font-semibold text-amber-700 mb-3">
                  💡 Exam Tips
                </h4>
                <ul className="space-y-2">
                  {section.examTips.map((tip, index) => (
                    <li key={index} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-amber-600 mt-0.5">→</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
