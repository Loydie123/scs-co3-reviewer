import type { ReviewerContent } from "@/types";
import { DOMAIN_IDS } from "@/types";

export const governanceContent: ReviewerContent = {
  domain: DOMAIN_IDS.GOVERNANCE,
  sections: [
    {
      id: "overview",
      title: "Security Foundations and Governance Overview",
      content: [
        "This domain focuses on multi-account strategies, compliance, auditing, and governance guardrails.",
        "Covers organizational security baselines and operational governance across AWS environments.",
      ],
      keyPoints: [
        "Multi-account strategy improves security isolation",
        "Centralized governance with AWS Organizations",
        "Automated compliance checking and remediation",
        "Regular auditing and security assessments",
      ],
    },
    {
      id: "organizations",
      title: "AWS Organizations",
      content: [
        "AWS Organizations enables centralized management of multiple AWS accounts.",
        "Provides consolidated billing and policy-based account management.",
        "Supports organizational units (OUs) for grouping accounts.",
      ],
      services: ["AWS Organizations", "Service Control Policies"],
      keyPoints: [
        "Management account controls the organization",
        "Member accounts can be organized into OUs",
        "SCPs apply guardrails across accounts",
        "Consolidated billing across all accounts",
        "Supports account creation and invitation",
      ],
      examTips: [
        "Know the structure: management account, OUs, member accounts",
        "Understand SCP inheritance through OU hierarchy",
      ],
    },
    {
      id: "control-tower",
      title: "AWS Control Tower",
      content: [
        "Control Tower automates the setup of a secure, multi-account AWS environment.",
        "Implements AWS best practices through pre-configured guardrails.",
        "Provides a landing zone with baseline security controls.",
      ],
      services: ["Control Tower", "Organizations", "Service Catalog", "CloudFormation"],
      keyPoints: [
        "Landing zone is a well-architected multi-account environment",
        "Guardrails are pre-packaged governance rules",
        "Mandatory guardrails are always enforced",
        "Strongly recommended and elective guardrails are optional",
        "Account Factory automates account provisioning",
      ],
      examTips: [
        "Know the types of guardrails: mandatory, strongly recommended, elective",
        "Understand the landing zone concept",
      ],
    },
    {
      id: "config",
      title: "AWS Config",
      content: [
        "Config tracks resource configurations and changes over time.",
        "Config Rules evaluate resource compliance against desired configurations.",
        "Provides configuration history and change notifications.",
      ],
      services: ["AWS Config", "Config Rules", "Systems Manager"],
      keyPoints: [
        "Continuous monitoring of resource configurations",
        "Config Rules evaluate compliance automatically",
        "Remediation actions can be automated",
        "Multi-account, multi-region aggregation",
        "Conformance packs bundle multiple Config Rules",
      ],
      examTips: [
        "Know the difference between Config and CloudTrail",
        "Understand conformance packs for compliance frameworks",
      ],
    },
    {
      id: "audit-compliance",
      title: "Auditing and Compliance",
      content: [
        "Regular auditing ensures security controls are effective and compliant.",
        "AWS provides tools for automated compliance checking and reporting.",
      ],
      services: ["AWS Audit Manager", "Security Hub", "Config", "CloudTrail"],
      keyPoints: [
        "Audit Manager automates evidence collection for audits",
        "Security Hub runs continuous compliance checks",
        "Config conformance packs map to compliance frameworks",
        "CloudTrail provides audit logs for all API activity",
      ],
      examTips: [
        "Know which service to use for different compliance needs",
        "Understand how to automate compliance reporting",
      ],
    },
    {
      id: "security-baselines",
      title: "Security Baselines and Guardrails",
      content: [
        "Security baselines define minimum security requirements for AWS accounts.",
        "Guardrails prevent or detect deviation from security policies.",
        "Preventive guardrails block non-compliant actions, detective guardrails alert on them.",
      ],
      keyPoints: [
        "Use SCPs for preventive guardrails",
        "Use Config Rules for detective guardrails",
        "Implement security baselines for all new accounts",
        "Regularly review and update baselines",
      ],
      examTips: [
        "Know the difference between preventive and detective guardrails",
        "Understand how to implement both types",
      ],
    },
  ],
};
