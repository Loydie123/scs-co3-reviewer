export interface Domain {
  id: string;
  name: string;
  slug: string;
  weight: number;
  description: string;
}

export const DOMAIN_IDS = {
  DETECTION: "detection",
  INCIDENT_RESPONSE: "incident-response",
  INFRASTRUCTURE_SECURITY: "infrastructure-security",
  IAM: "iam",
  DATA_PROTECTION: "data-protection",
  GOVERNANCE: "governance",
} as const;

export type DomainId = typeof DOMAIN_IDS[keyof typeof DOMAIN_IDS];
