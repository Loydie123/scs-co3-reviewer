import type { ReviewerContent } from "@/types";
import { DOMAIN_IDS } from "@/types";

export const detectionContent: ReviewerContent = {
  domain: DOMAIN_IDS.DETECTION,
  sections: [
    {
      id: "overview",
      title: "Detection Overview",
      content: [
        "Detection focuses on identifying suspicious activity, potential threats, and security anomalies in AWS accounts and workloads.",
        "This domain covers monitoring strategies, log analysis, threat detection services, and alerting mechanisms.",
      ],
      keyPoints: [
        "Continuous monitoring is essential for security",
        "Multiple AWS services work together for comprehensive detection",
        "Automated alerting reduces response time",
      ],
    },
    {
      id: "cloudtrail",
      title: "AWS CloudTrail",
      content: [
        "CloudTrail records API calls and account activity across AWS infrastructure.",
        "Provides audit trails for compliance, governance, and operational troubleshooting.",
        "Can be integrated with CloudWatch Logs for real-time monitoring.",
      ],
      services: ["CloudTrail", "CloudWatch Logs", "S3"],
      keyPoints: [
        "Enable CloudTrail in all regions",
        "Use log file validation for integrity",
        "Encrypt logs with KMS",
        "Store logs in a centralized S3 bucket",
      ],
      examTips: [
        "Know the difference between management events and data events",
        "Understand CloudTrail Lake for advanced querying",
      ],
    },
    {
      id: "guardduty",
      title: "Amazon GuardDuty",
      content: [
        "GuardDuty is a threat detection service that continuously monitors for malicious activity.",
        "Uses machine learning, anomaly detection, and integrated threat intelligence.",
        "Analyzes CloudTrail logs, VPC Flow Logs, and DNS logs.",
      ],
      services: ["GuardDuty", "CloudTrail", "VPC Flow Logs"],
      keyPoints: [
        "Automatically enabled across all regions when activated",
        "No agents or software to deploy",
        "Provides severity levels for findings",
        "Integrates with EventBridge for automated response",
      ],
      examTips: [
        "GuardDuty is the go-to service for threat detection",
        "Understand finding types and severity levels",
      ],
    },
    {
      id: "security-hub",
      title: "AWS Security Hub",
      content: [
        "Security Hub provides a comprehensive view of security alerts and compliance status.",
        "Aggregates findings from GuardDuty, Inspector, Macie, and third-party tools.",
        "Runs automated security checks against best practices.",
      ],
      services: ["Security Hub", "GuardDuty", "Inspector", "Macie"],
      keyPoints: [
        "Centralized security dashboard",
        "Supports multiple security standards (CIS, PCI-DSS, AWS Foundational Security Best Practices)",
        "Automated compliance checks",
        "Custom insights and actions",
      ],
      examTips: [
        "Security Hub is for aggregation and compliance checking",
        "Know the difference between findings and insights",
      ],
    },
    {
      id: "macie",
      title: "Amazon Macie",
      content: [
        "Macie is a data security service that discovers and protects sensitive data in S3.",
        "Uses machine learning to identify PII, financial data, and credentials.",
        "Provides data classification and security risk assessments.",
      ],
      services: ["Macie", "S3", "CloudWatch"],
      keyPoints: [
        "Automated sensitive data discovery",
        "Custom data identifiers for specific patterns",
        "Generates findings for policy violations",
        "Integrates with Security Hub and EventBridge",
      ],
      examTips: [
        "Macie is specifically for S3 data protection",
        "Understand managed vs custom data identifiers",
      ],
    },
    {
      id: "cloudwatch",
      title: "Amazon CloudWatch",
      content: [
        "CloudWatch collects and tracks metrics, logs, and events from AWS resources.",
        "CloudWatch Logs Insights enables advanced log analysis.",
        "CloudWatch Alarms trigger notifications based on metric thresholds.",
      ],
      services: ["CloudWatch", "CloudWatch Logs", "CloudWatch Alarms", "SNS"],
      keyPoints: [
        "Metric filters extract data from logs",
        "Log groups organize logs by application or resource",
        "Alarms can trigger Lambda functions or SNS notifications",
        "Retention policies control log storage duration",
      ],
      examTips: [
        "Know how to create metric filters from CloudTrail logs",
        "Understand CloudWatch Logs Insights query syntax basics",
      ],
    },
    {
      id: "security-lake",
      title: "Amazon Security Lake",
      content: [
        "Security Lake automatically centralizes security data from AWS and third-party sources.",
        "Stores data in a purpose-built data lake in your account.",
        "Normalizes data to Open Cybersecurity Schema Framework (OCSF) format.",
      ],
      services: ["Security Lake", "S3", "Lake Formation"],
      keyPoints: [
        "Centralized security data repository",
        "Supports custom sources and third-party integrations",
        "Enables advanced analytics and queries",
        "Data stored in your own S3 buckets",
      ],
      examTips: [
        "Security Lake is for centralized security data storage and analysis",
        "Understand OCSF normalization benefits",
      ],
    },
  ],
};
