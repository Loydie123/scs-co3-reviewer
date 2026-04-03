import type { Domain, DomainId } from "@/types";

export function formatPercentage(value: number): string {
  return `${value}%`;
}

export function formatScore(correct: number, total: number): string {
  return `${correct}/${total}`;
}

export function getDomainColor(domainId: DomainId): string {
  const colors: Record<string, string> = {
    detection: "blue",
    "incident-response": "red",
    "infrastructure-security": "purple",
    iam: "green",
    "data-protection": "yellow",
    governance: "orange",
  };

  return colors[domainId] || "gray";
}

export function getDomainBgClass(domainId: DomainId): string {
  const bgClasses: Record<string, string> = {
    detection: "bg-blue-100 dark:bg-blue-900",
    "incident-response": "bg-red-100 dark:bg-red-900",
    "infrastructure-security": "bg-purple-100 dark:bg-purple-900",
    iam: "bg-green-100 dark:bg-green-900",
    "data-protection": "bg-yellow-100 dark:bg-yellow-900",
    governance: "bg-orange-100 dark:bg-orange-900",
  };

  return bgClasses[domainId] || "bg-gray-100 dark:bg-gray-900";
}

export function getDomainTextClass(domainId: DomainId): string {
  const textClasses: Record<string, string> = {
    detection: "text-blue-700 dark:text-blue-300",
    "incident-response": "text-red-700 dark:text-red-300",
    "infrastructure-security": "text-purple-700 dark:text-purple-300",
    iam: "text-green-700 dark:text-green-300",
    "data-protection": "text-yellow-700 dark:text-yellow-300",
    governance: "text-orange-700 dark:text-orange-300",
  };

  return textClasses[domainId] || "text-gray-700 dark:text-gray-300";
}

export function sortDomainsByWeight(domains: Domain[]): Domain[] {
  return [...domains].sort((a, b) => b.weight - a.weight);
}

export function calculateTotalWeight(domains: Domain[]): number {
  return domains.reduce((sum, domain) => sum + domain.weight, 0);
}
