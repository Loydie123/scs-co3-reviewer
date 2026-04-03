import type { ReviewerContent } from "@/types";
import { DOMAIN_IDS } from "@/types";

export const iamContent: ReviewerContent = {
  domain: DOMAIN_IDS.IAM,
  sections: [
    {
      id: "overview",
      title: "IAM Overview",
      content: [
        "Identity and Access Management (IAM) is the foundation of AWS security.",
        "IAM controls who can access AWS resources and what actions they can perform.",
        "This domain has the highest weight (20%) on the SCS-C03 exam.",
      ],
      keyPoints: [
        "Principle of least privilege",
        "Use roles instead of long-term credentials",
        "Enable MFA for privileged users",
        "Regularly review and audit permissions",
      ],
    },
    {
      id: "policies",
      title: "IAM Policies",
      content: [
        "IAM policies are JSON documents that define permissions.",
        "Identity-based policies attach to users, groups, or roles.",
        "Resource-based policies attach to resources like S3 buckets.",
      ],
      keyPoints: [
        "Policies use Effect, Action, Resource, and Condition elements",
        "Explicit deny always wins",
        "Policy evaluation logic: deny by default, explicit deny, explicit allow",
        "Use policy conditions for fine-grained access control",
      ],
      examTips: [
        "Know the policy evaluation logic",
        "Understand the difference between identity-based and resource-based policies",
      ],
    },
    {
      id: "roles",
      title: "IAM Roles and Trust Policies",
      content: [
        "IAM roles provide temporary credentials for accessing AWS resources.",
        "Trust policies define who can assume the role.",
        "Roles are used for cross-account access, federated users, and AWS services.",
      ],
      services: ["IAM", "STS", "AWS Organizations"],
      keyPoints: [
        "Roles use temporary security credentials from STS",
        "Trust policy controls who can assume the role",
        "Permission policy controls what the role can do",
        "Use external ID for third-party access to prevent confused deputy",
      ],
      examTips: [
        "Know the difference between trust policy and permission policy",
        "Understand when to use external ID",
      ],
    },
    {
      id: "permission-boundaries",
      title: "Permission Boundaries",
      content: [
        "Permission boundaries set the maximum permissions an IAM entity can have.",
        "They don't grant permissions, they limit them.",
        "Useful for delegating user creation while maintaining control.",
      ],
      keyPoints: [
        "Permission boundary defines maximum allowed permissions",
        "Effective permissions are the intersection of identity policy and boundary",
        "Commonly used to prevent privilege escalation",
        "Applied to users and roles, not groups",
      ],
      examTips: [
        "Understand how permission boundaries limit permissions",
        "Know use cases for preventing privilege escalation",
      ],
    },
    {
      id: "scps",
      title: "Service Control Policies (SCPs)",
      content: [
        "SCPs are organization policies that set permission guardrails for accounts.",
        "They define maximum permissions for all principals in an account.",
        "SCPs do not grant permissions, they filter them.",
      ],
      services: ["AWS Organizations", "IAM"],
      keyPoints: [
        "SCPs apply to all users and roles in an account, including root",
        "SCPs do not affect service-linked roles",
        "Effective permissions are the intersection of SCP and IAM policies",
        "Use SCPs to enforce security baselines across accounts",
      ],
      examTips: [
        "Know that SCPs affect the root user",
        "Understand SCP inheritance in organization hierarchy",
      ],
    },
    {
      id: "federation",
      title: "Federation and Identity Providers",
      content: [
        "Federation allows users to access AWS using existing corporate credentials.",
        "IAM supports SAML 2.0 and OpenID Connect (OIDC) identity providers.",
        "AWS IAM Identity Center (formerly SSO) simplifies federated access.",
      ],
      services: ["IAM", "IAM Identity Center", "STS", "Cognito"],
      keyPoints: [
        "SAML 2.0 for enterprise identity providers",
        "OIDC for web identity federation (Google, Facebook)",
        "STS provides temporary credentials for federated users",
        "IAM Identity Center for centralized access management",
      ],
      examTips: [
        "Know when to use SAML vs OIDC",
        "Understand the role of STS in federation",
      ],
    },
    {
      id: "access-analysis",
      title: "Access Analysis and Auditing",
      content: [
        "IAM Access Analyzer identifies resources shared with external entities.",
        "IAM credential reports show credential status for all users.",
        "IAM policy simulator tests policy effects before deployment.",
      ],
      services: ["IAM Access Analyzer", "IAM", "CloudTrail"],
      keyPoints: [
        "Access Analyzer uses automated reasoning to analyze policies",
        "Identifies unintended external access to resources",
        "Credential reports help identify unused credentials",
        "Policy simulator validates policy logic",
      ],
      examTips: [
        "Know what IAM Access Analyzer detects",
        "Understand how to use credential reports for security audits",
      ],
    },
  ],
};
