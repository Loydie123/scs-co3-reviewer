import type { Domain } from "@/types";
import { DOMAIN_IDS } from "@/types";

export const domains: Domain[] = [
  {
    id: DOMAIN_IDS.DETECTION,
    name: "Detection",
    slug: "detection",
    weight: 16,
    description: "Monitoring and alerting strategies, threat detection services",
  },
  {
    id: DOMAIN_IDS.INCIDENT_RESPONSE,
    name: "Incident Response",
    slug: "incident-response",
    weight: 14,
    description: "Incident triage, containment, remediation, and forensics",
  },
  {
    id: DOMAIN_IDS.INFRASTRUCTURE_SECURITY,
    name: "Infrastructure Security",
    slug: "infrastructure-security",
    weight: 18,
    description: "VPC security, network protection, edge security",
  },
  {
    id: DOMAIN_IDS.IAM,
    name: "Identity and Access Management",
    slug: "iam",
    weight: 20,
    description: "IAM policies, roles, federation, least privilege",
  },
  {
    id: DOMAIN_IDS.DATA_PROTECTION,
    name: "Data Protection",
    slug: "data-protection",
    weight: 18,
    description: "Encryption, KMS, secrets management, data classification",
  },
  {
    id: DOMAIN_IDS.GOVERNANCE,
    name: "Security Foundations and Governance",
    slug: "governance",
    weight: 14,
    description: "Multi-account strategy, compliance, governance guardrails",
  },
];

export function getDomainById(id: string): Domain | undefined {
  return domains.find((domain) => domain.id === id);
}

export function getDomainBySlug(slug: string): Domain | undefined {
  return domains.find((domain) => domain.slug === slug);
}
