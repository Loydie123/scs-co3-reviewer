"use client";

import { useState } from "react";
import type { ReviewerSection } from "@/types";

interface TopicSectionProps {
  section: ReviewerSection;
}

export function TopicSection({ section }: TopicSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          {section.title}
        </h3>
        <span className="text-slate-500">
          {isExpanded ? "−" : "+"}
        </span>
      </button>

      {isExpanded && (
        <div className="px-6 py-4 bg-white dark:bg-slate-900">
          <div className="space-y-4">
            {section.content.map((paragraph, index) => (
              <p key={index} className="text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}

            {section.services && section.services.length > 0 && (
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Key AWS Services:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {section.services.map((service, index) => (
                    <li key={index} className="text-slate-700 dark:text-slate-300">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.keyPoints && section.keyPoints.length > 0 && (
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Key Points:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {section.keyPoints.map((point, index) => (
                    <li key={index} className="text-slate-700 dark:text-slate-300">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.examTips && section.examTips.length > 0 && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Exam Tips:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {section.examTips.map((tip, index) => (
                    <li key={index} className="text-blue-800 dark:text-blue-200">
                      {tip}
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
