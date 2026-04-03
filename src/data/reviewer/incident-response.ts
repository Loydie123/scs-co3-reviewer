import type { ReviewerContent } from "@/types";
import { DOMAIN_IDS } from "@/types";

export const incidentResponseContent: ReviewerContent = {
  domain: DOMAIN_IDS.INCIDENT_RESPONSE,
  sections: [
    {
      id: "overview",
      title: "Incident Response Overview",
      content: [
        "Incident Response focuses on detecting, analyzing, containing, and recovering from security incidents in AWS environments.",
        "This domain covers incident triage, forensics, automated response, and remediation strategies.",
      ],
      keyPoints: [
        "Speed and automation are critical for effective incident response",
        "Preserve evidence for forensic analysis",
        "Document incident response procedures",
      ],
    },
    {
      id: "incident-lifecycle",
      title: "Incident Response Lifecycle",
      content: [
        "The incident response lifecycle includes preparation, detection, analysis, containment, eradication, recovery, and post-incident activities.",
        "AWS provides tools and services to support each phase of the lifecycle.",
      ],
      keyPoints: [
        "Preparation: Define runbooks and playbooks",
        "Detection: Use GuardDuty, Security Hub, CloudWatch",
        "Analysis: Gather logs from CloudTrail, VPC Flow Logs",
        "Containment: Isolate affected resources",
        "Recovery: Restore from backups, rebuild infrastructure",
      ],
      examTips: [
        "Know the phases of incident response",
        "Understand which AWS service supports each phase",
      ],
    },
    {
      id: "automation",
      title: "Automated Incident Response",
      content: [
        "EventBridge can trigger automated responses based on security findings.",
        "Lambda functions can execute remediation actions automatically.",
        "Systems Manager Automation documents provide pre-built remediation workflows.",
      ],
      services: ["EventBridge", "Lambda", "Systems Manager", "Step Functions"],
      keyPoints: [
        "EventBridge rules route findings to response functions",
        "Lambda can modify security groups, revoke credentials, or isolate instances",
        "Systems Manager Automation provides reusable remediation runbooks",
        "Step Functions orchestrate complex multi-step responses",
      ],
      examTips: [
        "Know how to trigger Lambda from GuardDuty findings via EventBridge",
        "Understand Systems Manager Automation documents for remediation",
      ],
    },
    {
      id: "forensics",
      title: "Forensic Data Collection",
      content: [
        "Forensic analysis requires collecting and preserving evidence from multiple sources.",
        "CloudTrail provides API activity logs for investigating unauthorized actions.",
        "VPC Flow Logs show network traffic patterns.",
        "EBS snapshots preserve disk state for analysis.",
      ],
      services: ["CloudTrail", "VPC Flow Logs", "EBS Snapshots", "CloudWatch Logs"],
      keyPoints: [
        "Enable CloudTrail log file validation for integrity",
        "Take EBS snapshots before terminating compromised instances",
        "Collect memory dumps from EC2 instances if needed",
        "Store forensic data in a separate, secured account",
      ],
      examTips: [
        "Know which logs to collect for different incident types",
        "Understand how to preserve evidence without disrupting operations",
      ],
    },
    {
      id: "containment",
      title: "Containment Strategies",
      content: [
        "Containment limits the scope and impact of a security incident.",
        "Common containment actions include isolating instances, revoking credentials, and blocking network access.",
      ],
      keyPoints: [
        "Modify security groups to block malicious traffic",
        "Detach IAM policies from compromised roles",
        "Move instances to isolated VPC or subnet",
        "Revoke active sessions using IAM",
        "Apply SCPs to restrict account-level actions",
      ],
      examTips: [
        "Know how to quickly isolate compromised resources",
        "Understand the difference between containment and eradication",
      ],
    },
    {
      id: "recovery",
      title: "Recovery and Remediation",
      content: [
        "Recovery involves restoring systems to normal operations after an incident.",
        "Use backups, snapshots, and infrastructure as code to rebuild affected resources.",
      ],
      services: ["AWS Backup", "CloudFormation", "Systems Manager"],
      keyPoints: [
        "Restore from clean backups",
        "Rebuild infrastructure using IaC templates",
        "Apply security patches and updates",
        "Rotate all credentials and keys",
        "Verify security controls are in place",
      ],
      examTips: [
        "Know how to use AWS Backup for recovery",
        "Understand the importance of testing recovery procedures",
      ],
    },
  ],
};
